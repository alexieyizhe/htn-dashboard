import React from "react";
import {
  configure,
  addDecorator,
  getStorybook,
  setAddon
} from "@storybook/react";

// import createPercyAddon from "@percy-io/percy-storybook";
import { ThemeProvider } from "styled-components";
import siteTheme, { GlobalStyles } from "../src/utils/siteStyles";

const req = require.context("../src", true, /\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <ThemeProvider theme={siteTheme}>
    <>
      <GlobalStyles />
      {story()}
    </>
  </ThemeProvider>
));

// const { percyAddon, serializeStories } = createPercyAddon();
// setAddon(percyAddon);

configure(loadStories, module);

// serializeStories(getStorybook);
