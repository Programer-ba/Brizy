import React from "react";
import ReactDOM from "react-dom";
import ClickOutside from "visual/component/ClickOutside";
import HotKeys from "visual/component/HotKeys";
import {
  ToolbarExtendContext,
  ToolbarExtendContextType
} from "../ToolbarExtend";
import {
  PortalToolbarPositioner,
  PortalToolbarPositionerProps
} from "./PortalToolbarPositioner";
import { RightSidebarItems } from "visual/component/RightSidebar/RightSidebarItems";
import { monitor, ToolbarMonitorHandler } from "../monitor";
import { selectorSearchCoordinates, selectorSearchDomTree } from "./utils";
import { OptionDefinition } from "visual/component/Options/Type";

const portalNodesByDocument: Map<Document, HTMLElement> = new Map();

export type PortalToolbarProps = {
  getItems: () => OptionDefinition[];
  getSidebarItems?: () => OptionDefinition[];
  getSidebarTitle?: () => string;
  manualControl?: boolean;
  selector?: string;
  selectorSearchStrategy?: "dom-tree" | "coordinates";
  onBeforeOpen?: () => void;
  onBeforeClose?: () => void;
  onOpen?: () => void;
  onClose?: () => void;
  onEscape?: () => void;
} & Omit<PortalToolbarPositionerProps, "items">;

type PortalToolbarState = {
  opened: boolean;
};

type ToolbarClickEvent = Event & {
  brzToolbarHandled?: boolean;
};

export default class PortalToolbar
  extends React.Component<
    PortalToolbarProps,
    PortalToolbarState,
    ToolbarExtendContextType
  >
  implements ToolbarMonitorHandler {
  static contextType = ToolbarExtendContext;

  static defaultProps = {
    manualControl: false
  };

  context: ToolbarExtendContextType = undefined;

  state: PortalToolbarState = {
    opened: false
  };

  node: Element | null = null;

  selectorNode: Element | null = null;

  componentDidMount(): void {
    // eslint-disable-next-line react/no-find-dom-node
    this.node = ReactDOM.findDOMNode(this) as Element | null;

    if (this.node === null) {
      return;
    }

    if (this.node.ownerDocument === null) {
      return;
    }

    if (!portalNodesByDocument.get(this.node.ownerDocument)) {
      const portalNode = this.node.ownerDocument.createElement("div");
      portalNode.id = "brz-toolbar-portal";
      this.node.ownerDocument.body.appendChild(portalNode);
      portalNodesByDocument.set(this.node.ownerDocument, portalNode);
    }

    if (!this.props.manualControl) {
      this.makeComponentControlled();
    }
  }

  componentDidUpdate({ manualControl = false }): void {
    if (manualControl !== this.props.manualControl) {
      if (manualControl === true) {
        this.makeComponentControlled();
      } else {
        this.makeComponentUnControlled();
      }
    }
  }

  componentWillUnmount(): void {
    monitor.unsetIfActive(this);
    this.node = null;
    this.selectorNode = null;
  }

  makeComponentUnControlled = (): void => {
    if (this.node === null) {
      return;
    }

    this.node.removeEventListener("click", this.handleNodeClick);
  };

  makeComponentControlled = (): void => {
    if (this.node === null) {
      return;
    }

    this.node.addEventListener("click", this.handleNodeClick, false);
  };

  handleNodeClick = (event: Event): void => {
    if (this.node === null || (event as ToolbarClickEvent).brzToolbarHandled) {
      return;
    }

    if (this.props.selector === undefined) {
      if (monitor.getActive() === this) {
        return;
      }

      (event as ToolbarClickEvent).brzToolbarHandled = true;
      this.show();
    } else {
      const search =
        this.props.selectorSearchStrategy === "dom-tree"
          ? selectorSearchDomTree
          : selectorSearchCoordinates;
      const target = search(
        this.node,
        this.props.selector,
        event as MouseEvent
      );

      if (target) {
        (event as ToolbarClickEvent).brzToolbarHandled = true;

        if (this.state.opened === false) {
          this.selectorNode = target;
          this.show();
        } else if (target !== this.selectorNode) {
          this.hide(() => {
            this.selectorNode = target;
            this.show();
          });
        }
      } else {
        this.hide();
      }
    }
  };

  handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation();

    const { onClick } = this.props;

    if (onClick) {
      onClick(e);
    }
  };

  handleMouseEnter = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation();

    const { onMouseEnter } = this.props;

    if (onMouseEnter) {
      onMouseEnter(e);
    }

    if (this.node !== null) {
      const customEvent = new CustomEvent("brz.toolbar.mouseenter", {
        bubbles: true
      });
      this.node.dispatchEvent(customEvent);
    }
  };

  handleMouseLeave = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation();

    const { onMouseLeave } = this.props;

    if (onMouseLeave !== undefined) {
      onMouseLeave(e);
    }

    if (this.node) {
      const customEvent = new CustomEvent("brz.toolbar.mouseleave", {
        bubbles: true
      });
      this.node.dispatchEvent(customEvent);
    }
  };

  handleEscape = (): void => {
    const ownProps = this.props;
    const contextProps = this.context;
    const finalProps = { ...contextProps, ...ownProps };

    if (finalProps.onEscape) {
      finalProps.onEscape();
    } else {
      this.hide();
    }
  };

  handleClickOutside = (): void => {
    monitor.unsetActive();
  };

  handleMonitorActivationRequest(): void {
    this.show();
  }

  handleMonitorDeactivationRequest(): void {
    this.hide();
  }

  show(): void {
    if (!this.state.opened) {
      const { onBeforeOpen, onOpen } = this.props;

      monitor.setActive(this);
      onBeforeOpen && onBeforeOpen();

      this.setState({ opened: true }, () => {
        onOpen && onOpen();

        if (this.node !== null) {
          const e = new CustomEvent("brz.toolbar.open", {
            bubbles: true
          });

          this.node.dispatchEvent(e);
        }
      });
    }
  }

  hide(cb?: () => void): void {
    if (this.state.opened) {
      const { onBeforeClose, onClose } = this.props;

      onBeforeClose && onBeforeClose();
      this.setState({ opened: false }, () => {
        onClose && onClose();

        if (this.node !== null) {
          const e = new CustomEvent("brz.toolbar.close", {
            bubbles: true
          });
          this.node.dispatchEvent(e);
        }

        cb?.();
      });
    }
  }

  clickOutsideException = (clickTarget: HTMLElement): boolean => {
    try {
      const node = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
      return node !== null && node.contains(clickTarget);
    } catch (e) {
      return false;
    }
  };

  getOutSideExceptions = (): (string | Function)[] => {
    return [
      ".brz-ed-sidebar__right",
      ".brz-ed-tooltip__content-portal",
      ".brz-ed-fixed",
      ".brz-ed-box__resizer--point",
      ...(TARGET === "WP"
        ? [
            ".media-modal", // class of the WP media modal
            ".media-modal-backdrop"
          ]
        : []),
      this.clickOutsideException // makes the toolbar not rerender when clicking repeatedly on the same node
    ];
  };

  renderToolbar(): React.ReactNode {
    if (this.node === null) {
      return;
    }
    if (this.node.ownerDocument === null) {
      return;
    }

    const items = this.props.getItems();

    if (!items || items.length === 0) {
      return;
    }

    const ownProps = this.props;
    const contextProps = this.context;
    const ownerDocument = this.node.ownerDocument;
    const portalNode = portalNodesByDocument.get(ownerDocument);

    return (
      portalNode &&
      ReactDOM.createPortal(
        <>
          <ClickOutside
            exceptions={this.getOutSideExceptions()}
            onClickOutside={this.handleClickOutside}
          >
            <PortalToolbarPositioner
              {...contextProps}
              {...ownProps}
              items={items}
              node={this.selectorNode ?? this.node}
              onClick={this.handleClick}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            />
          </ClickOutside>
          {ownProps.getSidebarItems && (
            <RightSidebarItems
              getItems={ownProps.getSidebarItems}
              getTitle={ownProps.getSidebarTitle}
            />
          )}
          <HotKeys
            id="key-helper-toolbar-escape"
            keyNames={["esc"]}
            onKeyUp={this.handleEscape}
          />
        </>,
        portalNode
      )
    );
  }

  render(): React.ReactNode {
    const { children } = this.props;
    const { opened } = this.state;

    return (
      <>
        {children}
        {opened && this.renderToolbar()}
      </>
    );
  }
}
