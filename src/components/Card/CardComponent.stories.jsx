import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./CardComponent";


storiesOf("Card", module)
  .add("Default", () => <Card />)
  .add("With Label", () => <Card label="Some Label" />)
  .add("Completed", () => <Card completed />)
  .add("Completed With Label", () => <Card label="Some Other Label" completed />);
