module.exports = {
  id: "block2kit1838",
  thumbnailWidth: 600,
  thumbnailHeight: 329,
  title: "block2kit1838",

  keywords: "contact,forms,image",
  cat: [5586, 100],
  type: 0,

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
                type: "Row",
                value: {
                  _styles: ["row", "hide-row-borders", "padding-0"],
                  items: [
                    {
                      type: "Column",
                      value: {
                        _styles: ["column"],
                        items: [
                          {
                            type: "Wrapper",
                            value: {
                              _styles: ["wrapper", "wrapper--image"],
                              items: [
                                {
                                  type: "Image",
                                  value: {
                                    _styles: ["image"],
                                    imageWidth: 458,
                                    imageHeight: 608,
                                    imageSrc: "d03-BG.jpg",
                                    height: 100,
                                    positionX: 50,
                                    positionY: 50,
                                    imagePopulation: "",
                                    resize: 84,
                                    borderRadiusType: "custom",
                                    borderRadius: 6,
                                    tempBorderRadius: 6,
                                    tabletResize: 100,
                                    mobileResize: 100,
                                    mobileHeight: 60
                                  }
                                }
                              ],
                              marginTopSuffix: "px",
                              marginTop: -6,
                              margin: 0,
                              marginSuffix: "px",
                              mobileMarginType: "ungrouped",
                              mobileMarginTopSuffix: "px",
                              mobileMarginTop: -15,
                              mobileMargin: 0,
                              mobileMarginSuffix: "px"
                            }
                          }
                        ],
                        paddingTop: 0,
                        paddingTopSuffix: "px",
                        padding: 15,
                        tabsState: "tabNormal",
                        tabsCurrentElement: "tabCurrentElement",
                        tabsColor: "tabOverlay",
                        tabletPaddingType: "ungrouped",
                        tabletPaddingSuffix: "px",
                        tabletPaddingTopSuffix: "px",
                        tabletPaddingRightSuffix: "px",
                        tabletPaddingBottomSuffix: "px",
                        tabletPaddingLeftSuffix: "px",
                        tabletPadding: 0,
                        tabletPaddingTop: 0,
                        tabletPaddingRight: 20,
                        tabletPaddingBottom: 0,
                        tabletPaddingLeft: 20,
                        tabletMarginTopSuffix: "px",
                        tabletMarginTop: -14,
                        tabletMargin: 0,
                        tabletMarginSuffix: "px",
                        mobileMarginType: "grouped",
                        mobileMarginSuffix: "px",
                        mobileMarginTopSuffix: "px",
                        mobileMarginRightSuffix: "px",
                        mobileMarginBottomSuffix: "px",
                        mobileMarginLeftSuffix: "px",
                        mobileMargin: 0,
                        mobileMarginTop: 0,
                        mobileMarginRight: 0,
                        mobileMarginBottom: 0,
                        mobileMarginLeft: 0
                      }
                    },
                    {
                      type: "Column",
                      value: {
                        _styles: ["column"],
                        items: [
                          {
                            type: "Wrapper",
                            value: {
                              _styles: ["wrapper", "wrapper--spacer"],
                              items: [
                                {
                                  type: "Spacer",
                                  value: {
                                    _styles: ["spacer"],
                                    height: 80,
                                    tabletHeight: 40,
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
                              _styles: ["wrapper", "wrapper--richText"],
                              items: [
                                {
                                  type: "RichText",
                                  value: {
                                    _styles: ["richText"],
                                    text:
                                      '<h1 class="brz-tp-heading1"><span class="brz-cp-color2">Hello, there!</span></h1>'
                                  }
                                }
                              ]
                            }
                          },
                          {
                            type: "Wrapper",
                            value: {
                              _styles: ["wrapper", "wrapper--richText"],
                              items: [
                                {
                                  type: "RichText",
                                  value: {
                                    _styles: ["richText"],
                                    text:
                                      '<p class="brz-tp-subtitle"><span class="brz-cp-color7">In the history of modern astronomy, there is probably no one greater leap forward.</span></p>'
                                  }
                                }
                              ]
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
                                    height: 40,
                                    tabletHeight: 1,
                                    mobileHeight: 20
                                  }
                                }
                              ],
                              showOnTablet: "off",
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
                                                type: "Email",
                                                label: "Email",
                                                required: "on",
                                                options: [
                                                  "Option 1",
                                                  "Option 2"
                                                ],
                                                placeholder: "Email",
                                                width: 80
                                              }
                                            },
                                            {
                                              type: "Form2Field",
                                              value: {
                                                type: "Text",
                                                label: "Name",
                                                required: "on",
                                                options: [
                                                  "Option 1",
                                                  "Option 2"
                                                ],
                                                placeholder: "Name",
                                                width: 80
                                              }
                                            },
                                            {
                                              type: "Form2Field",
                                              value: {
                                                type: "Paragraph",
                                                label: "Messages",
                                                required: "off",
                                                options: [
                                                  "Option 1",
                                                  "Option 2"
                                                ],
                                                placeholder: "Messages"
                                              }
                                            }
                                          ],
                                          fontStyle: "paragraph",
                                          tabsState: "",
                                          tabsColor: "",
                                          colorPalette: "color2",
                                          tempColorPalette: "color2",
                                          colorOpacity: 0.7,
                                          colorHex: "#1c1c1c",
                                          tempColorOpacity: 0.7,
                                          borderColorHex: "#dcdee1",
                                          borderColorOpacity: 0,
                                          tempBorderColorOpacity: 1,
                                          borderColorPalette: "",
                                          tempBorderColorPalette: "",
                                          borderStyle: 0,
                                          borderWidth: 0,
                                          borderTopWidth: 0,
                                          borderRightWidth: 0,
                                          borderBottomWidth: 0,
                                          borderLeftWidth: 0,
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
                                          tempBorderBottomRightRadius: 5
                                        }
                                      },
                                      {
                                        type: "Button",
                                        value: {
                                          _styles: ["button", "submit"],
                                          text: "Submit Message",
                                          iconName: "email-83",
                                          iconType: "glyph",
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
                                          hoverBgColorPalette: "color2",
                                          hoverBorderColorPalette: "",
                                          tempHoverBorderColorPalette: "",
                                          hoverBgColorHex: "#1c1c1c",
                                          tempHoverBgColorOpacity: 1,
                                          tempHoverBgColorPalette: "color3",
                                          hoverBorderColorHex: "#1c1c1c"
                                        }
                                      }
                                    ],
                                    submitWidth: 60,
                                    padding: 20,
                                    paddingRight: 20,
                                    paddingBottom: 20,
                                    paddingLeft: 20
                                  }
                                }
                              ]
                            }
                          }
                        ],
                        tabsState: "tabNormal",
                        tabsCurrentElement: "tabCurrentElement",
                        tabsColor: "tabOverlay",
                        paddingLeft: 50,
                        paddingLeftSuffix: "px",
                        padding: 15,
                        paddingRight: 100,
                        paddingRightSuffix: "px",
                        mobilePaddingRightSuffix: "px",
                        mobilePaddingRight: 20,
                        mobilePadding: 0,
                        mobilePaddingSuffix: "px",
                        mobilePaddingLeftSuffix: "px",
                        mobilePaddingLeft: 20,
                        mobilePaddingType: "ungrouped"
                      }
                    }
                  ]
                }
              }
            ],
            padding: 0,
            paddingTop: 0,
            paddingBottom: 100,
            tabsState: "tabNormal",
            tabsCurrentElement: "tabCurrentElement",
            tabsColor: "tabOverlay",
            paddingType: "ungrouped",
            bgColorPalette: "color6",
            tempBgColorPalette: "color6",
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
            mobilePadding: 25,
            mobilePaddingBottom: 40
          }
        }
      ]
    }
  }
};
