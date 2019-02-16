/* eslint-disable no-undef */
import React from "react";

import Header from "./HeaderComponent";

describe("Header", () => {
  it("renders correctly", () => {
    const component = mountWithTheme(<Header />);
    expect(component).toMatchSnapshot();
  })
})
