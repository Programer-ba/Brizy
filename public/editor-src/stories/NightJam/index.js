const Slide1 = require("./pages/Slide1");
const Slide2 = require("./pages/Slide2");
const Slide3 = require("./pages/Slide3");
const Slide4 = require("./pages/Slide4");
const Slide5 = require("./pages/Slide5");
const StoryStyle = require("./styles/Story");

module.exports = {
  name: "Night Jam",
  color: "#2a4989",
  cat: [0, 6, 100],
  pages: [Slide1, Slide2, Slide3, Slide4, Slide5],
  styles: [StoryStyle]
};
