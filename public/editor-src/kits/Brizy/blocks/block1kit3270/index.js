module.exports = {
  id: "block1kit3270",
  thumbnailWidth: 600,
  thumbnailHeight: 363,
  title: "block1kit3270",

  keywords: "contact,directions,forms,map,text,two columns",
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
                  items: [
                    {
                      type: "RichText",
                      value: {
                        _styles: ["richText"],
                        text:
                          '<h2 class="brz-tp-heading2 brz-text-lg-center"><span class="brz-cp-color8">Contact Us</span></h2>'
                      }
                    }
                  ],
                  marginTop: 0
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
                          '<p class="brz-text-lg-center brz-tp-paragraph brz-mb-lg-0"><span class="brz-cp-color7" style="background-color: transparent;">Our user interface was built on React - the most efficient JavaScript library. We guarantee you will love the difference in performance.&nbsp;Build clean, minimalistic, beautifully crafted websites p2erfectly fit for any device.</span></p>'
                      }
                    }
                  ],
                  paddingType: "ungrouped",
                  paddingRight: 250,
                  paddingLeft: 250
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
                        height: 30,
                        mobileHeight: 30
                      }
                    }
                  ],
                  showOnMobile: "off"
                }
              },
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
                              _styles: ["wrapper", "wrapper--map"],
                              items: [
                                {
                                  type: "Map",
                                  value: {
                                    _styles: ["map"],
                                    height: 468
                                  }
                                }
                              ],
                              marginRight: 10
                            }
                          }
                        ]
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
                                                type: "Select",
                                                label: "Project",
                                                required: "on",
                                                options: [
                                                  "Freelance",
                                                  "Business"
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
                                                options: [
                                                  "Option 1",
                                                  "Option 2"
                                                ],
                                                placeholder: "Message",
                                                height: 175
                                              }
                                            }
                                          ],
                                          fontStyle: "paragraph"
                                        }
                                      },
                                      {
                                        type: "Button",
                                        value: {
                                          _styles: ["button", "submit"],
                                          text: "SUBMIT",
                                          iconName: "tail-right",
                                          iconType: "outline",
                                          tabsState: "",
                                          tabsColor: "",
                                          hoverBgColorHex: "#239ddb",
                                          hoverBgColorOpacity: 1,
                                          tempHoverBgColorOpacity: 1,
                                          hoverBgColorPalette: "color8",
                                          tempHoverBgColorPalette: "color3",
                                          hoverBorderColorHex: "#239ddb",
                                          hoverBorderColorPalette: "",
                                          tempHoverBorderColorPalette: "",
                                          hoverBorderColorOpacity: 0,
                                          hoverColorPalette: "color2",
                                          hoverColorOpacity: 1
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
                              paddingLeft: 0,
                              tempPaddingLeft: 30,
                              padding: 0
                            }
                          }
                        ],
                        paddingLeft: 25
                      }
                    }
                  ]
                }
              }
            ],
            mobileBgColorHex: "#191b21",
            mobileBgColorOpacity: 1,
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
      ]
    }
  }
};
