import React from "react";
import {
  configure,
  addDecorator,
  getStorybook,
  setAddon
} from "@storybook/react";

// import createPercyAddon from "@percy-io/percy-storybook";
import { ThemeProvider } from "grommet";
import siteStyles from "../src/utils/siteStyles";
// import { GlobalStyles } from "../src/utils/siteTools";

const req = require.context("../src", true, /\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <ThemeProvider theme={siteStyles}>
    <>
      // <GlobalStyles />
      {story()}
    </>
  </ThemeProvider>
));

// const { percyAddon, serializeStories } = createPercyAddon();
// setAddon(percyAddon);

configure(loadStories, module);

// serializeStories(getStorybook);
