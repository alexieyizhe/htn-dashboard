/* eslint-disable no-undef */
import React from "react";

import Card from "./CardComponent";

describe("Card", () => {
  it("renders correctly", () => {
    const cardComponent = mountWithTheme(<Card siteTitle="Default Starter" />);
    expect(cardComponent).toMatchSnapshot();
  })
})
