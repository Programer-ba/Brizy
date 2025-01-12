module.exports = {
  id: "block1kit3247",
  thumbnailWidth: 600,
  thumbnailHeight: 287,
  title: "block1kit3247",

  keywords: "contact,forms",
  cat: [4509, 100],
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
            bgColorHex: "#ffffff",
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
                          '<h2 class="brz-text-lg-center brz-tp-heading2"><span class="brz-cp-color2" style="opacity: 1;">Get In Touch</span></h2>'
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
                                    width: 50,
                                    placeholder: "Name",
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
                                    width: 50,
                                    placeholder: "Email",
                                    mobileWidth: 100
                                  }
                                },
                                {
                                  type: "Form2Field",
                                  value: {
                                    type: "Select",
                                    label: "Project",
                                    required: "on",
                                    options: [
                                      "Freelance",
                                      "Business",
                                      "Affiliate"
                                    ],
                                    width: 100,
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
                              borderColorHex: "#dcdee1",
                              borderColorOpacity: 0.6,
                              tempBorderColorOpacity: 0.6,
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
                              colorHex: "#73777f",
                              colorOpacity: 0.7,
                              tempColorOpacity: 0.7,
                              colorPalette: "",
                              tempColorPalette: ""
                            }
                          },
                          {
                            type: "Button",
                            value: {
                              _styles: ["button", "submit"],
                              text: "SEND MESSAGE",
                              iconName: "",
                              iconType: "",
                              tabsState: "",
                              tabsColor: "",
                              bgColorPalette: "color2",
                              tempBgColorPalette: "color2",
                              bgColorOpacity: 1,
                              borderRadiusType: "square",
                              fillType: "filled",
                              borderColorPalette: "color2",
                              tempBorderColorPalette: "color2",
                              hoverBgColorOpacity: 1,
                              hoverBgColorHex: "#239ddb",
                              tempHoverBgColorOpacity: 1,
                              hoverBgColorPalette: "color3",
                              tempHoverBgColorPalette: "color3",
                              hoverBorderColorHex: "#239ddb",
                              hoverBorderColorPalette: "",
                              tempHoverBorderColorPalette: "",
                              hoverBorderColorOpacity: 0
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
            mobileBgColorHex: "#ffffff",
            mobileBgColorOpacity: 1,
            containerSize: 60
          }
        }
      ]
    }
  }
};
