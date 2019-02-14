import React from "react";
import { ThemeProvider } from "styled-components";
import Dashboard from "../views/Dashboard/DashboardViewContainer";
import siteStyles from "../utils/siteStyles";
import { GlobalStyles } from "../utils/siteTools";

export default () => (
  <ThemeProvider theme={siteStyles}>
    <>
      <GlobalStyles />
      <Dashboard />
    </>
  </ThemeProvider>

);
