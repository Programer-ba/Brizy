import React, {
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import Config from "visual/global/Config";
import Portal from "visual/component/Portal";
import EditorIcon from "visual/component/EditorIcon";
import { t } from "visual/utils/i18n";
import { mPipe, pass } from "fp-utilities";
import * as Obj from "visual/utils/reader/object";
import { IS_PRO } from "visual/utils/env";
import { pageSelector, uiSelector } from "visual/redux/selectors";
import { PageCloudCMS } from "visual/types";
import { updateUI } from "visual/redux/actions2";
import Link from "../Options/types/Link";
import * as Base from "./types/Base";
import * as Messages from "./types/Messages";
import * as List from "./types/List";
import { collectionTypeTrimPrefix } from "visual/utils/api/cms/graphql/convertors";
import {
  CMS,
  isCloud,
  isCMS,
  isShopify,
  Shopify
} from "visual/global/Config/types/configs/Cloud";
import { getWhiteLabel } from "./utils";
import { fromNumber } from "./types/ProjectId";

interface Props {
  config: CMS | Shopify;
}

const fromConfigPlatform = (
  p: (CMS | Shopify)["platform"]
): "cloud" | "shopify" => {
  switch (p) {
    case "shopify":
      return "shopify";
    case "cms":
      return "cloud";
  }
};

const Component = ({ config }: Props): ReactElement => {
  const iframeSrc = config.cms.adminUrl;
  const token = config.tokenV2?.access_token;
  const ref = useRef<HTMLIFrameElement>(null);
  const page = useSelector(pageSelector) as PageCloudCMS;
  const leftSidebar = useSelector(uiSelector).leftSidebar;
  const opened =
    leftSidebar.drawerContentType === "cmsUi" && leftSidebar.isOpen;
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const dispatch = useDispatch();
  const update = useCallback(
    isOpen => {
      setIframeLoaded(false);
      dispatch(
        updateUI("leftSidebar", {
          drawerContentType: isOpen ? "cmsUi" : null,
          isOpen
        })
      );
    },
    [dispatch]
  );
  const onLinkClick = useCallback((): void => update(!opened), [
    opened,
    update
  ]);
  const onIframeLoad = useCallback((): void => setIframeLoaded(true), []);
  const onIframeMessage = useCallback(
    mPipe(
      pass((e: MessageEvent) => e.origin === iframeSrc),
      Obj.readKey("data"),
      Obj.read,
      Base.fromObject,
      Messages.readInputMessage,
      m => {
        switch (m.type) {
          case "close":
            return update(false);
          case "redirect": {
            console.log("redirect", m.payload);
            if (TARGET === "Cloud") {
              window.parent.location.href = m.payload;
            } else if (TARGET === "Cloud-localhost") {
              const r = /editor\/(\w+)\/(\d+)$/;
              const [, mode, id] = r.exec(m.payload) ?? [];

              if (mode && id) {
                window.parent.location.href = `/editor/${mode}/${id}`;
              } else {
                console.warn("could not parse url: ", m.payload);
              }
            }
            return;
          }
        }
      }
    ),
    [iframeSrc]
  );

  useEffect(() => {
    if (opened && iframeLoaded) {
      const list = token
        ? List.listWithToken({
            token,
            collectionId: collectionTypeTrimPrefix(page.collectionType.id),
            user: { isPro: IS_PRO },
            apiUrl: config.cms.apiUrl,
            previewUrl: config.urls.pagePreview,
            mediaUrl: config.urls.image,
            projectSettings: config.urls.projectSettings,
            type: fromConfigPlatform(config.platform),
            protectedPagePassword: config.project.protectedPagePassword,
            whiteLabel: getWhiteLabel(config),
            projectId: fromNumber(config.project.id)
          })
        : List.listWithoutToken({
            collectionId: collectionTypeTrimPrefix(page.collectionType.id),
            user: { isPro: IS_PRO },
            apiUrl: config.cms.apiUrl,
            previewUrl: config.urls.pagePreview,
            mediaUrl: config.urls.image,
            projectSettings: config.urls.projectSettings,
            type: fromConfigPlatform(config.platform),
            protectedPagePassword: config.project.protectedPagePassword,
            whiteLabel: getWhiteLabel(config),
            projectId: fromNumber(config.project.id)
          });

      ref.current?.contentWindow?.postMessage(list, iframeSrc);
    }
  }, [opened, iframeLoaded]);
  useEffect(() => {
    if (opened) {
      window.parent.addEventListener("message", onIframeMessage);
    }

    return (): void =>
      window.parent.removeEventListener("message", onIframeMessage);
  }, [opened, onIframeMessage]);

  return (
    <>
      <Link
        className={classNames({
          "brz-ed-sidebar__control__item": true,
          "brz-ed-sidebar__control__item--active": opened
        })}
        icon="nc-menu"
        title={t("CMS")}
        onClick={onLinkClick}
      />
      {opened && (
        <Portal node={window.parent.document.body}>
          <div className="brz-cms__wrapper">
            <iframe
              ref={ref}
              src={iframeSrc}
              className={classNames("brz-iframe", "brz-cms", {
                "brz-loading": !iframeLoaded
              })}
              onLoad={onIframeLoad}
            />
            {!iframeLoaded && (
              <div className="brz-cms--loading">
                <EditorIcon
                  icon="nc-circle-02"
                  className="brz-ed-animated--spin"
                />
              </div>
            )}
          </div>
        </Portal>
      )}
    </>
  );
};

const _Component = (): ReactNode => {
  const config = Config.getAll();

  return isCloud(config) && (isCMS(config) || isShopify(config)) ? (
    <Component config={config} />
  ) : null;
};

export const Cms = {
  id: "cms",
  type: "custom",
  Component: _Component
};