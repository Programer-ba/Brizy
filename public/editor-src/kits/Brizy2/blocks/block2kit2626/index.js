module.exports = {
  id: "block2kit2626",
  thumbnailWidth: 600,
  thumbnailHeight: 333,
  title: "block2kit2626",

  keywords: "contact,forms,map",
  cat: [5586, 100],
  type: 1,

  resolve: {
    type: "Section",
    value: {
      _styles: ["section"],
      items: [
        {
          type: "SectionItem",
          value: {
            _styles: ["section-item"],
            items: [
              {
                type: "Wrapper",
                value: {
                  _styles: ["wrapper", "wrapper--map"],
                  items: [
                    {
                      type: "Map",
                      value: {
                        _styles: ["map"],
                        height: 250,
                        tabletHeight: 300,
                        tabsState: "tabNormal",
                        tabsCurrentElement: "tabCurrentElement",
                        tabsColor: "tabBorder",
                        mobileHeight: 256
                      }
                    }
                  ],
                  marginTopSuffix: "px",
                  marginTop: 0,
                  margin: 0,
                  marginSuffix: "px",
                  tabletMarginType: "grouped",
                  mobileMarginType: "grouped"
                }
              },
              {
                type: "Wrapper",
                value: {
                  _styles: ["wrapper", "wrapper--spacer"],
                  items: [
                    {
                      type: "Spacer",
                      value: {
                        _styles: ["spacer"],
                        height: 60,
                        tabletHeight: 20,
                        mobileHeight: 30
                      }
                    }
                  ],
                  showOnTablet: "on",
                  showOnMobile: "on"
                }
              },
              {
                type: "Wrapper",
                value: {
                  _styles: ["wrapper", "wrapper--form2"],
                  items: [
                    {
                      type: "Form2",
                      value: {
                        _styles: ["form2"],
                        items: [
                          {
                            type: "Form2Fields",
                            value: {
                              items: [
                                {
                                  type: "Form2Field",
                                  value: {
                                    type: "Text",
                                    label: "First Name",
                                    required: "on",
                                    options: ["Option 1", "Option 2"],
                                    placeholder: "First Name",
                                    width: 50
                                  }
                                },
                                {
                                  type: "Form2Field",
                                  value: {
                                    type: "Text",
                                    label: "Last Name",
                                    required: "on",
                                    options: ["Option 1", "Option 2"],
                                    placeholder: "Last Name",
                                    width: 50
                                  }
                                },
                                {
                                  type: "Form2Field",
                                  value: {
                                    type: "Email",
                                    label: "Email Address",
                                    required: "on",
                                    options: ["Option 1", "Option 2"],
                                    placeholder: "Email Address",
                                    width: 50
                                  }
                                },
                                {
                                  type: "Form2Field",
                                  value: {
                                    type: "Email",
                                    label: "Subject",
                                    required: "on",
                                    options: ["Option 1", "Option 2"],
                                    placeholder: "Subject",
                                    width: 50
                                  }
                                },
                                {
                                  type: "Form2Field",
                                  value: {
                                    type: "Paragraph",
                                    label: "Write Your Message",
                                    required: "on",
                                    options: ["Option 1", "Option 2"],
                                    placeholder: "Write Your Message",
                                    width: 100
                                  }
                                }
                              ],
                              fontStyle: "paragraph",
                              tabsState: "",
                              tabsColor: "",
                              colorPalette: "color8",
                              tempColorPalette: "color8",
                              colorOpacity: 0.8,
                              colorHex: "#ffffff",
                              tempColorOpacity: 0.8,
                              borderColorHex: "#ffffff",
                              borderColorOpacity: 0.6,
                              tempBorderColorOpacity: 0.6,
                              borderColorPalette: "color8",
                              tempBorderColorPalette: "color8",
                              borderStyle: "solid",
                              borderWidth: 1,
                              borderTopWidth: 1,
                              borderRightWidth: 1,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                              tempBorderTopWidth: 1,
                              tempBorderRightWidth: 1,
                              tempBorderBottomWidth: 1,
                              tempBorderLeftWidth: 1,
                              size: "small",
                              paddingTop: 10,
                              paddingRight: 20,
                              paddingBottom: 10,
                              paddingLeft: 20,
                              borderRadius: 5,
                              borderTopLeftRadius: 5,
                              borderTopRightRadius: 5,
                              borderBottomLeftRadius: 5,
                              borderBottomRightRadius: 5,
                              tempBorderRadius: 5,
                              tempBorderTopLeftRadius: 5,
                              tempBorderTopRightRadius: 5,
                              tempBorderBottomLeftRadius: 5,
                              tempBorderBottomRightRadius: 5,
                              tempBorderWidth: 1,
                              bgColorHex: "#ffffff",
                              bgColorOpacity: 0,
                              tempBgColorOpacity: 1,
                              bgColorPalette: "",
                              tempBgColorPalette: ""
                            }
                          },
                          {
                            type: "Button",
                            value: {
                              _styles: ["button", "submit"],
                              text: "Send Message",
                              iconName: "",
                              iconType: "",
                              iconPosition: "left",
                              tabsState: "",
                              tabsColor: "",
                              borderRadiusType: "custom",
                              tempBorderRadiusType: "custom",
                              paddingRight: 42,
                              paddingLeft: 42,
                              fillType: "filled",
                              borderRadius: 5,
                              borderWidth: 0,
                              borderColorOpacity: 0,
                              borderColorPalette: 0,
                              bgColorOpacity: 1,
                              bgColorPalette: "color3",
                              hoverBgColorOpacity: 1,
                              hoverBorderColorOpacity: 0.8,
                              tempBorderRadius: 5,
                              tempBorderWidth: 2,
                              size: "medium",
                              fontSize: 12,
                              paddingTB: 14,
                              paddingTop: 14,
                              paddingBottom: 14,
                              tempPaddingTB: 14,
                              tempPaddingTop: 14,
                              tempPaddingBottom: 14,
                              paddingRL: 42,
                              tempPaddingRL: 42,
                              tempPaddingRight: 42,
                              tempPaddingLeft: 42,
                              hoverBgColorPalette: "color3",
                              hoverBorderColorPalette: "",
                              tempHoverBorderColorPalette: "",
                              hoverBgColorHex: "#1c1c1c",
                              tempHoverBgColorOpacity: 1,
                              tempHoverBgColorPalette: "color3",
                              hoverBorderColorHex: "#1c1c1c",
                              colorPalette: "color2",
                              colorOpacity: 1,
                              hoverColorPalette: "color8",
                              hoverColorOpacity: 1
                            }
                          }
                        ],
                        submitWidth: 20,
                        padding: 25,
                        paddingRight: 25,
                        paddingBottom: 25,
                        paddingLeft: 25,
                        horizontalAlign: "right",
                        tabletSubmitWidth: 30,
                        mobileSubmitWidth: 100
                      }
                    }
                  ],
                  paddingType: "ungrouped",
                  paddingRight: 100,
                  paddingRightSuffix: "px",
                  tempPaddingRightSuffix: "px",
                  paddingSuffix: "px",
                  tempPaddingSuffix: "px",
                  tempPaddingRight: 100,
                  paddingLeft: 100,
                  paddingLeftSuffix: "px",
                  tempPaddingLeftSuffix: "px",
                  tempPaddingLeft: 100,
                  tabletPaddingType: "ungrouped",
                  tabletPaddingRightSuffix: "px",
                  tempTabletPaddingRightSuffix: "px",
                  tabletPaddingSuffix: "px",
                  tempTabletPaddingSuffix: "px",
                  tabletPaddingRight: 35,
                  tempTabletPaddingRight: 35,
                  tabletPaddingLeftSuffix: "px",
                  tempTabletPaddingLeftSuffix: "px",
                  tabletPaddingLeft: 35,
                  tempTabletPaddingLeft: 35,
                  mobilePaddingType: "ungrouped",
                  mobilePaddingRightSuffix: "px",
                  tempMobilePaddingRightSuffix: "px",
                  mobilePaddingSuffix: "px",
                  tempMobilePaddingSuffix: "px",
                  mobilePaddingRight: 15,
                  tempMobilePaddingRight: 15,
                  mobilePaddingLeftSuffix: "px",
                  tempMobilePaddingLeftSuffix: "px",
                  mobilePaddingLeft: 15,
                  tempMobilePaddingLeft: 15
                }
              }
            ],
            paddingType: "ungrouped",
            paddingTop: 0,
            paddingBottom: 90,
            padding: 75,
            tabsState: "tabNormal",
            tabsCurrentElement: "tabCurrentElement",
            tabsColor: "tabOverlay",
            bgColorPalette: "color2",
            tempBgColorPalette: "color2",
            bgColorOpacity: 1,
            borderRadius: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            tempBorderTopLeftRadius: 0,
            tempBorderTopRightRadius: 0,
            tempBorderBottomLeftRadius: 0,
            tempBorderBottomRightRadius: 0,
            tabletPaddingType: "ungrouped",
            tabletPaddingTop: 0,
            tabletPadding: 50,
            mobilePaddingType: "ungrouped",
            mobilePaddingTop: 0,
            mobilePadding: 25
          }
        }
      ]
    }
  }
};
