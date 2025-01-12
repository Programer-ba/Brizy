module.exports = {
  id: "block1kit3244",
  thumbnailWidth: 600,
  thumbnailHeight: 287,
  title: "block1kit3244",

  keywords: "contact,forms",
  cat: [4509, 100],
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
            bgColorHex: "#191b21",
            bgColorOpacity: 1,
            items: [
              {
                type: "Wrapper",
                value: {
                  _styles: ["wrapper", "wrapper--richText"],
                  marginBottom: 0,
                  items: [
                    {
                      type: "RichText",
                      value: {
                        _styles: ["richText"],
                        text:
                          '<h3 class="brz-tp-abovetitle brz-text-lg-center"><span class="brz-cp-color3" style="background-color: transparent;">CONTACT US</span></h3>'
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
                          '<h2 class="brz-tp-heading2 brz-text-lg-center"><span style="opacity: 1;" class="brz-cp-color8">Get In Touch</span></h2>'
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
                        height: 20,
                        mobileHeight: 20
                      }
                    }
                  ],
                  showOnMobile: "off"
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
                                    label: "Name",
                                    required: "on",
                                    options: ["Option 1", "Option 2"],
                                    placeholder: "Name",
                                    width: 50,
                                    mobileWidth: 100
                                  }
                                },
                                {
                                  type: "Form2Field",
                                  value: {
                                    type: "Email",
                                    label: "Email",
                                    required: "on",
                                    options: ["Option 1", "Option 2"],
                                    placeholder: "Email",
                                    width: 50,
                                    mobileWidth: 100
                                  }
                                },
                                {
                                  type: "Form2Field",
                                  value: {
                                    type: "Select",
                                    label: "Project",
                                    required: "off",
                                    options: [
                                      "Freelance",
                                      "Business",
                                      "Affiliate"
                                    ],
                                    placeholder: "Project"
                                  }
                                },
                                {
                                  type: "Form2Field",
                                  value: {
                                    type: "Paragraph",
                                    label: "Message",
                                    required: "off",
                                    options: ["Option 1", "Option 2"],
                                    placeholder: "Message"
                                  }
                                }
                              ],
                              fontStyle: "paragraph",
                              tabsState: "",
                              tabsColor: "",
                              bgColorPalette: "color2",
                              tempBgColorPalette: "color2",
                              bgColorOpacity: 0.15,
                              borderRadius: 0,
                              borderTopLeftRadius: 0,
                              borderTopRightRadius: 0,
                              borderBottomLeftRadius: 0,
                              borderBottomRightRadius: 0,
                              tempBorderTopLeftRadius: 0,
                              tempBorderTopRightRadius: 0,
                              tempBorderBottomLeftRadius: 0,
                              tempBorderBottomRightRadius: 0,
                              bgColorHex: "#142850",
                              tempBgColorOpacity: 0.15,
                              borderColorHex: "#dcdee1",
                              borderColorOpacity: 0.2,
                              tempBorderColorOpacity: 0.2,
                              borderColorPalette: "",
                              tempBorderColorPalette: "",
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
                              selectColorPalette: "color2",
                              tempSelectColorPalette: "color2",
                              selectColorOpacity: 0.7
                            }
                          },
                          {
                            type: "Button",
                            value: {
                              _styles: ["button", "submit"],
                              text: "SEND MESSAGE",
                              iconName: "",
                              iconType: "",
                              borderWidth: 0,
                              tempBorderWidth: 2,
                              paddingRight: 42,
                              paddingLeft: 42,
                              borderRadiusType: "square",
                              fillType: "filled",
                              borderRadius: 2,
                              borderColorOpacity: 0,
                              borderColorPalette: 0,
                              bgColorOpacity: 1,
                              bgColorPalette: "color3",
                              hoverBgColorOpacity: 1,
                              tabsState: "",
                              tabsColor: "",
                              hoverBgColorPalette: "color8",
                              hoverBorderColorPalette: "",
                              tempHoverBorderColorPalette: "",
                              hoverBgColorHex: "#ffffff",
                              tempHoverBgColorOpacity: 1,
                              tempHoverBgColorPalette: "color3",
                              hoverBorderColorHex: "#ffffff",
                              hoverBorderColorOpacity: 0,
                              hoverColorPalette: "color2",
                              hoverColorOpacity: 1
                            }
                          }
                        ],
                        submitWidth: 35,
                        tabletSubmitWidth: 100,
                        mobileSubmitWidth: 100,
                        horizontalAlign: "center"
                      }
                    }
                  ]
                }
              }
            ],
            mobileBgColorHex: "#191b21",
            mobileBgColorOpacity: 1,
            containerSize: 60
          }
        }
      ]
    }
  }
};
