import React from "react";
import { ThemeProvider } from "styled-components";
import siteTheme, { GlobalStyles } from "../utils/siteStyles";
import SiteContextProvider from "../utils/siteContext";

import HelmetHead from '../components/Helmet/HelmetHeader';
import App from "../views/App";


export default () => (
  <ThemeProvider theme={siteTheme}>
    <>
      <HelmetHead />
      <GlobalStyles />
      <SiteContextProvider>
        <App />
      </SiteContextProvider>
    </>
  </ThemeProvider>

);
