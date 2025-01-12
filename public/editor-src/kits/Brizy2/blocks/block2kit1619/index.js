module.exports = {
  id: "block2kit1619",
  thumbnailWidth: 600,
  thumbnailHeight: 163,
  title: "block2kit1619",

  keywords: "features,icons",
  cat: [5584, 100],
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
                type: "Cloneable",
                value: {
                  _styles: ["wrapper-clone", "wrapper-clone--icon"],
                  items: [
                    {
                      type: "Icon",
                      value: {
                        _styles: ["icon"],
                        name: "keyboard-mouse",
                        type: "outline",
                        size: "large",
                        customSize: 64,
                        borderRadius: 0,
                        hoverColorHex: "#0ad1bd",
                        hoverColorOpacity: 1,
                        hoverColorPalette: "color3"
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
                          '<h1 class="brz-tp-heading1 brz-text-lg-center"><span class="brz-cp-color2">5 Reasons To Purchase Desktop Computers</span></h1>'
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
                          '<p class="brz-text-lg-center brz-tp-subtitle"><span class="brz-cp-color7">Do you know what could beat the exciting feeling of having a new computer? Make your own PC!</span></p>'
                      }
                    }
                  ],
                  paddingType: "ungrouped",
                  paddingRightSuffix: "%",
                  paddingRight: 30,
                  padding: 0,
                  paddingSuffix: "px",
                  paddingLeftSuffix: "%",
                  paddingLeft: 30,
                  tabletPaddingType: "ungrouped",
                  tabletPaddingRight: 100,
                  tabletPadding: 0,
                  tabletPaddingSuffix: "px",
                  tabletPaddingLeft: 100
                }
              }
            ],
            paddingType: "ungrouped",
            paddingTop: 75,
            paddingBottom: 75,
            padding: 75
          }
        }
      ]
    }
  }
};
