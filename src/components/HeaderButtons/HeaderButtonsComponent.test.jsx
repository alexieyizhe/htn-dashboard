/* eslint-disable no-undef */
import React from "react";

import HeaderButtons from "./HeaderButtonsComponent";

describe("HeaderButtons", () => {
  it("renders correctly", () => {
    const component = mountWithTheme(<HeaderButtons />);
    expect(component).toMatchSnapshot();
  })
})
