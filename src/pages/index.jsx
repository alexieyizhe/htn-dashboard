import React from "react";
import { ThemeProvider } from "styled-components";
import Dashboard from "../views/Dashboard/DashboardViewContainer";
import siteTheme, { GlobalStyles } from "../utils/siteStyles";

export default () => (
  <ThemeProvider theme={siteTheme}>
    <>
      <GlobalStyles />
      <Dashboard />
    </>
  </ThemeProvider>

);
