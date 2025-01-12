module.exports = {
  id: "block1kit3222",
  thumbnailWidth: 600,
  thumbnailHeight: 216,
  title: "block1kit3222",

  keywords:
    "address,button,call to action,contact,cover,forms,header,image background,info,phone,two columns",
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
            bgColorHex: "#eef0f2",
            bgColorOpacity: 0.9,
            mobileBgColorOpacity: 0.9,
            tempBgColorOpacity: 0.9,
            mobileBgColorHex: "#eef0f2",
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
                              _styles: ["wrapper", "wrapper--iconText"],
                              items: [
                                {
                                  type: "IconText",
                                  value: {
                                    _styles: ["iconText"],
                                    items: [
                                      {
                                        type: "Icon",
                                        value: {
                                          _styles: ["icon", "iconText--icon"],
                                          borderRadius: 4,
                                          name: "map-pin",
                                          type: "outline",
                                          hoverColorOpacity: 1,
                                          mobileBorderRadius: 5
                                        }
                                      },
                                      {
                                        type: "RichText",
                                        value: {
                                          _styles: ["text", "iconText--text"],
                                          text:
                                            '<h4 class="brz-tp-heading5 brz-mb-lg-0 brz-mb-xs-10"><span class="brz-cp-color2">Address</span></h4><p class="brz-tp-paragraph"><em class="brz-cp-color7">Northville, 3192 Tennessee Avenue</em></p>'
                                        }
                                      }
                                    ],
                                    iconSpacing: 39
                                  }
                                }
                              ]
                            }
                          },
                          {
                            type: "Wrapper",
                            value: {
                              _styles: ["wrapper", "wrapper--line"],
                              items: [
                                {
                                  type: "Line",
                                  value: {
                                    _styles: ["line"],
                                    width: 100,
                                    mobileWidth: 100,
                                    borderColorOpacity: 0.15
                                  }
                                }
                              ],
                              marginBottom: 15,
                              marginTop: 20
                            }
                          },
                          {
                            type: "Wrapper",
                            value: {
                              _styles: ["wrapper", "wrapper--iconText"],
                              items: [
                                {
                                  type: "IconText",
                                  value: {
                                    _styles: ["iconText"],
                                    items: [
                                      {
                                        type: "Icon",
                                        value: {
                                          _styles: ["icon", "iconText--icon"],
                                          borderRadius: 4,
                                          name: "newsletter",
                                          type: "outline",
                                          hoverColorOpacity: 1,
                                          mobileBorderRadius: 5
                                        }
                                      },
                                      {
                                        type: "RichText",
                                        value: {
                                          _styles: ["text", "iconText--text"],
                                          text:
                                            '<h4 class="brz-mb-xs-10 brz-mb-lg-0 brz-tp-heading5"><span class="brz-cp-color2">Email</span></h4><p class="brz-tp-paragraph"><em class="brz-cp-color7">hello@yourdomain.com</em></p>'
                                        }
                                      }
                                    ],
                                    iconSpacing: 39
                                  }
                                }
                              ]
                            }
                          },
                          {
                            type: "Wrapper",
                            value: {
                              _styles: ["wrapper", "wrapper--line"],
                              items: [
                                {
                                  type: "Line",
                                  value: {
                                    _styles: ["line"],
                                    width: 100,
                                    mobileWidth: 100,
                                    borderColorOpacity: 0.15
                                  }
                                }
                              ],
                              marginBottom: 15,
                              marginTop: 20
                            }
                          },
                          {
                            type: "Wrapper",
                            value: {
                              _styles: ["wrapper", "wrapper--iconText"],
                              items: [
                                {
                                  type: "IconText",
                                  value: {
                                    _styles: ["iconText"],
                                    items: [
                                      {
                                        type: "Icon",
                                        value: {
                                          _styles: ["icon", "iconText--icon"],
                                          name: "phone-call",
                                          type: "outline",
                                          hoverColorOpacity: 1,
                                          tempPadding: 5,
                                          hoverBorderColorHex: "#bde1f4",
                                          hoverBgColorHex: "#239ddb"
                                        }
                                      },
                                      {
                                        type: "RichText",
                                        value: {
                                          _styles: ["text", "iconText--text"],
                                          text:
                                            '<h4 class="brz-mb-xs-10 brz-mb-lg-0 brz-tp-heading5"><span class="brz-cp-color2">Phone</span></h4><p class="brz-tp-paragraph"><em class="brz-cp-color7">+1 948 485 783</em></p>'
                                        }
                                      }
                                    ],
                                    iconSpacing: 39
                                  }
                                }
                              ]
                            }
                          }
                        ],
                        verticalAlign: "center",
                        paddingRight: 40
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
                                                options: [
                                                  "Option 1",
                                                  "Option 2"
                                                ],
                                                placeholder: "Name"
                                              }
                                            },
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
                                                placeholder: "Email"
                                              }
                                            },
                                            {
                                              type: "Form2Field",
                                              value: {
                                                type: "Paragraph",
                                                label: "Message",
                                                required: "off",
                                                options: [
                                                  "Option 1",
                                                  "Option 2"
                                                ],
                                                placeholder: "Message",
                                                height: 120
                                              }
                                            }
                                          ],
                                          fontStyle: "paragraph",
                                          tabsState: "",
                                          tabsColor: "",
                                          borderColorHex: "#dcdee1",
                                          borderColorOpacity: 0.65,
                                          tempBorderColorOpacity: 0.65,
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
                                          tempBorderLeftWidth: 1
                                        }
                                      },
                                      {
                                        type: "Button",
                                        value: {
                                          _styles: ["button", "submit"],
                                          text: "SUBMIT",
                                          iconName: "",
                                          iconType: "",
                                          tabsState: "",
                                          tabsColor: "",
                                          hoverBgColorPalette: "color2",
                                          hoverBgColorOpacity: 1,
                                          hoverBorderColorPalette: "",
                                          tempHoverBorderColorPalette: "",
                                          hoverBgColorHex: "#142850",
                                          tempHoverBgColorOpacity: 1,
                                          tempHoverBgColorPalette: "color3",
                                          hoverBorderColorHex: "#142850",
                                          hoverBorderColorOpacity: 0
                                        }
                                      }
                                    ],
                                    submitWidth: 40,
                                    tabletSubmitWidth: 100,
                                    mobileSubmitWidth: 100
                                  }
                                }
                              ],
                              paddingType: "ungrouped",
                              paddingLeftSuffix: "px",
                              tempPaddingLeftSuffix: "px",
                              paddingSuffix: "px",
                              tempPaddingSuffix: "px",
                              paddingLeft: 30,
                              tempPaddingLeft: 30
                            }
                          }
                        ],
                        verticalAlign: "center"
                      }
                    }
                  ]
                }
              }
            ],
            containerSize: 80,
            bgImageWidth: 1996,
            bgImageHeight: 1331,
            bgImageSrc: "7f83717c6e5c1ac723f42e351a782cf4543ce29d.jpeg",
            mobileBgImageWidth: 1996,
            mobileBgImageHeight: 1331,
            mobileBgImageSrc: "7f83717c6e5c1ac723f42e351a782cf4543ce29d.jpeg"
          }
        }
      ]
    }
  }
};
