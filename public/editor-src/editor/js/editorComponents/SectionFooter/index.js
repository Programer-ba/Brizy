import React from "react";
import EditorComponent from "visual/editorComponents/EditorComponent";
import CustomCSS from "visual/component/CustomCSS";
import classnames from "classnames";
import { validateKeyByProperty } from "visual/utils/onChange";
import SectionFooterItems from "./Items";
import Background from "visual/component/Background";
import ContainerBorder from "visual/component/ContainerBorder";
import PaddingResizer from "visual/component/PaddingResizer";
import { Roles } from "visual/component/Roles";
import {
  wInBoxedPage,
  wInTabletPage,
  wInMobilePage,
  wInFullPage
} from "visual/config/columns";
import { CollapsibleToolbar, ToolbarExtend } from "visual/component/Toolbar";
import * as toolbarConfig from "./toolbar";
import * as sidebarConfig from "./sidebar";
import { styleSection, styleContainer, styleAnimation } from "./styles";
import { css } from "visual/utils/cssStyle";
import defaultValue from "./defaultValue.json";
import {
  styleElementSectionContainerType,
  styleSizeContainerSize
} from "visual/utils/style2";
import { parseCustomAttributes } from "visual/utils/string/parseCustomAttributes";
import Animation from "visual/component/Animation";
import { hasMembership } from "visual/utils/membership";

class SectionFooter extends EditorComponent {
  static get componentId() {
    return "SectionFooter";
  }

  static defaultProps = {
    meta: {}
  };

  static defaultValue = defaultValue;

  static experimentalDynamicContent = true;

  mounted = false;

  collapsibleToolbarRef = React.createRef();

  componentDidMount() {
    this.mounted = true;
  }

  shouldComponentUpdate(nextProps) {
    return this.optionalSCU(nextProps);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleToolbarClose = () => {
    if (!this.mounted) {
      return;
    }

    this.patchValue({
      tabsState: "tabNormal",
      tabsCurrentElement: "tabCurrentElement",
      tabsColor: "tabOverlay"
    });
  };

  handleToolbarEscape = () => {
    this.collapsibleToolbarRef.current.open();
  };

  handlePaddingResizerChange = patch => this.patchValue(patch);

  getMeta(v) {
    const { meta } = this.props;
    const containerType = styleElementSectionContainerType({ v });
    const size = styleSizeContainerSize({ v, device: "desktop" });
    const tabletSize = styleSizeContainerSize({ v, device: "tablet" });
    const mobileSize = styleSizeContainerSize({ v, device: "mobile" });

    const wInPage = containerType === "fullWidth" ? wInFullPage : wInBoxedPage;
    const desktopW = Math.round(wInPage * (size / 100) * 10) / 10;
    const tabletW = Math.round(wInTabletPage * (tabletSize / 100) * 10) / 10;
    const mobileW = Math.round(wInMobilePage * (mobileSize / 100) * 10) / 10;

    return {
      ...meta,
      desktopW,
      desktopWNoSpacing: desktopW,
      tabletW,
      tabletWNoSpacing: tabletW,
      mobileW,
      mobileWNoSpacing: mobileW
    };
  }

  renderToolbar(v) {
    const { globalBlockId } = this.props.meta;
    const { membership, membershipRoles } = v;

    return (
      <CollapsibleToolbar
        {...this.makeToolbarPropsFromConfig2(toolbarConfig, sidebarConfig)}
        ref={this.collapsibleToolbarRef}
        className="brz-ed-collapsible--section"
        animation="rightToLeft"
        global={!!globalBlockId}
        membership={hasMembership(membership, membershipRoles)}
        onClose={this.handleToolbarClose}
      />
    );
  }

  renderItems(v, vs, vd) {
    const meta = this.getMeta(v);
    const classNameContainer = classnames(
      "brz-container",
      v.containerClassName,
      css(
        `${this.constructor.componentId}-container`,
        `${this.getId()}-container`,
        styleContainer(v, vs, vd)
      )
    );
    const itemsProps = this.makeSubcomponentProps({
      bindWithKey: "items",
      className: classNameContainer,
      meta
    });

    return (
      <Background value={v} meta={meta}>
        <PaddingResizer value={v} onChange={this.handlePaddingResizerChange}>
          <SectionFooterItems {...itemsProps} />
        </PaddingResizer>
      </Background>
    );
  }

  renderForEdit(v, vs, vd) {
    const {
      className,
      customClassName,
      cssClassPopulation,
      customAttributes
    } = v;

    const classNameSection = classnames(
      "brz-footer",
      className,
      cssClassPopulation === "" ? customClassName : cssClassPopulation,
      css(
        `${this.constructor.componentId}-section`,
        `${this.getId()}-section`,
        styleSection(v, vs, vd)
      )
    );

    const animationClassName = classnames(
      validateKeyByProperty(v, "animationName", "none") &&
        css(
          `${this.constructor.componentId}-wrapper-animation,`,
          `${this.getId()}-animation`,
          styleAnimation(v, vs, vd)
        )
    );

    return (
      <ContainerBorder
        type="footer"
        hiddenInResponsive={true}
        activateOnContentClick={false}
      >
        {({ ref: containerBorderRef, attr: containerBorderAttr }) => (
          <CustomCSS selectorName={this.getId()} css={v.customCSS}>
            <Animation
              ref={containerBorderRef}
              component="footer"
              componentProps={{
                ...parseCustomAttributes(customAttributes),
                ...containerBorderAttr,
                "data-block-id": this.props.blockId,
                id: this.getId(),
                className: classNameSection
              }}
              animationClass={animationClassName}
            >
              <Roles
                allow={["admin"]}
                fallbackRender={() => this.renderItems(v, vs, vd)}
              >
                {this.renderToolbar(v)}
                <ToolbarExtend onEscape={this.handleToolbarEscape}>
                  {this.renderItems(v, vs, vd)}
                </ToolbarExtend>
              </Roles>
            </Animation>
          </CustomCSS>
        )}
      </ContainerBorder>
    );
  }

  renderMemberShipWrapper(content, v) {
    if (v.membership === "on") {
      const roles = JSON.parse(v.membershipRoles).join(",");

      return (
        <>
          {`{{display_by_roles roles="${roles}"}}`}
          {content}
          {"{{end_display_by_roles}}"}
        </>
      );
    }

    return content;
  }

  renderForView(v, vs, vd) {
    const {
      className,
      customClassName,
      cssIDPopulation,
      cssClassPopulation,
      customAttributes,
      tagName
    } = v;
    const { sectionPopup, sectionPopup2 } = this.props.meta;

    const classNameSection = classnames(
      "brz-footer",
      className,
      cssClassPopulation === "" ? customClassName : cssClassPopulation,
      css(
        `${this.constructor.componentId}-section`,
        `${this.getId()}-section`,
        styleSection(v, vs, vd)
      )
    );

    const animationClassName = classnames(
      validateKeyByProperty(v, "animationName", "none") &&
        css(
          `${this.constructor.componentId}-wrapper-animation,`,
          `${this.getId()}-animation`,
          styleAnimation(v, vs, vd)
        )
    );

    const props = {
      ...parseCustomAttributes(customAttributes),
      "data-uid": this.getId(),
      id:
        cssIDPopulation === "" ? v.anchorName || this.getId() : cssIDPopulation,
      className: classNameSection
    };

    const content = (
      <CustomCSS selectorName={this.getId()} css={v.customCSS}>
        <Animation
          iterationCount={sectionPopup || sectionPopup2 ? Infinity : 1}
          component={tagName}
          componentProps={props}
          animationClass={animationClassName}
        >
          {this.renderItems(v, vs, vd)}
        </Animation>
      </CustomCSS>
    );

    return this.renderMemberShipWrapper(content, v);
  }
}

export default SectionFooter;
