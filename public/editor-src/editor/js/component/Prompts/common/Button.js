import React, { Component } from "react";
import _ from "underscore";
import classnames from "classnames";
import EditorIcon from "visual/component/EditorIcon";

class Button extends Component {
  static defaultProps = {
    className: "",
    type: "button", // button | link
    color: "gray", // gray | tail | red | default
    href: undefined,
    target: undefined,
    size: 1, // 1, 2, 3
    rightIcon: "",
    leftIcon: "",
    loading: false,
    disabled: false,
    onClick: _.noop
  };

  render() {
    const {
      className: _className,
      type,
      size,
      color,
      rightIcon,
      leftIcon,
      loading,
      disabled,
      href,
      target,
      children,
      onClick
    } = this.props;
    const className = classnames(
      "brz-button brz-ed-btn",
      "brz-ed-btn-sm brz-ed-btn-rounded",
      _className,
      loading ? "brz-ed-btn--loading" : "brz-ed-btn-icon",
      `brz-ed-btn-width-${size}`,
      `brz-ed-btn-${color}`,
      { "brz-ed-btn-icon--left": leftIcon },
      { "brz-ed-btn-icon--right": rightIcon },
      { "brz-ed-btn--disabled": disabled }
    );

    const content = loading ? (
      <EditorIcon icon="nc-circle-02" className="brz-ed-animated--spin" />
    ) : (
      <React.Fragment>
        {leftIcon && <EditorIcon icon={leftIcon} />}
        {children}
        {rightIcon && <EditorIcon icon={rightIcon} />}
      </React.Fragment>
    );

    return type === "button" ? (
      <button className={className} onClick={onClick}>
        {content}
      </button>
    ) : (
      <a href={href} target={target} className={className} onClick={onClick}>
        {content}
      </a>
    );
  }
}

export default Button;
