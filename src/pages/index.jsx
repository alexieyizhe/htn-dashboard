import React from "react";
import { ThemeProvider } from "styled-components";
import siteTheme, { GlobalStyles } from "../utils/siteStyles";
import SiteContextProvider from "../utils/siteContext";

import App from "../views/App";


export default () => (
  <ThemeProvider theme={siteTheme}>
    <>
      <GlobalStyles />
      <SiteContextProvider>
        <App />
      </SiteContextProvider>
    </>
  </ThemeProvider>

);
