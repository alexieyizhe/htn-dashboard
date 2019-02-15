import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";
import { ThemeConsumer } from "styled-components";
import siteTheme from "../src/utils/siteStyles";

configure({ adapter: new Adapter() });

const mountWithTheme = (tree, theme = siteTheme) => {
  ThemeConsumer._currentValue = theme;
  return mount(tree);
};

const shallowWithTheme = (tree, theme = siteTheme) =>
  shallow(tree, { theme });


const babelOptions = {
  presets: ["babel-preset-gatsby"],
}

global.mountWithTheme = mountWithTheme;
global.shallowWithTheme = shallowWithTheme;

module.exports = require("babel-jest").createTransformer(babelOptions)
