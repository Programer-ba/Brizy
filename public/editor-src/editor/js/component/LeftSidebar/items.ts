import { MouseEvent } from "react";
import Config from "visual/global/Config";
import Prompts from "visual/component/Prompts";
import { t } from "visual/utils/i18n";
import { IS_CMS } from "visual/utils/env";
import { IS_EXTERNAL_POPUP, IS_EXTERNAL_STORY } from "visual/utils/models";
import { AddElements } from "./components/AddElements";
import { BlocksSortable } from "./components/BlocksSortable";
import { Styling } from "./components/Styling";
import { Settings } from "./components/Settings";
import { DeviceModes } from "./components/DeviceModes";
import { Cms } from "./components/Cms";

const urls = Config.get("urls");

export default {
  top: [
    ...(IS_CMS && !IS_EXTERNAL_STORY && !IS_EXTERNAL_POPUP ? [Cms] : []),
    AddElements,
    BlocksSortable,
    Styling
  ],
  bottom: [
    DeviceModes,
    ...(IS_CMS ? [] : [Settings]),
    {
      id: "popover",
      icon: "nc-back",
      title: t("More"),
      type: "popover",
      options: [
        {
          type: "link",
          icon: "nc-info",
          label: t("About us"),
          link: urls.about,
          linkTarget: "_blank"
        },
        {
          type: "link",
          icon: "nc-help-docs",
          label: t("Support & Docs"),
          link: urls.support,
          linkTarget: "_blank",
          roles: ["admin"]
        },
        {
          type: "link",
          icon: "nc-alert-circle-que",
          label: t("Shortcuts"),
          link: "#",
          onClick: (e: MouseEvent): void => {
            e.preventDefault();

            Prompts.open({
              mode: "stack",
              prompt: "keyHelper"
            });
          }
        },
        {
          type: "link",
          icon: "nc-back",
          label: t("Go to Dashboard"),
          link: urls.backToDashboard
        }
      ]
    }
  ]
};