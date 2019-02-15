import React from "react";
import { storiesOf } from "@storybook/react";
import SelectDropdown from "./SelectDropdownComponent";

const sampleOptions = [
  { value: 'lasagna', label: 'Lasagna' },
  { value: 'pizza', label: 'Pizza' },
  { value: 'sushi', label: 'Sushi' },
  { value: 'coffee', label: 'Coffee' },

]

storiesOf("SelectDropdown", module)
  .add("Default", () => <SelectDropdown optionsArray={sampleOptions} />)
  .add("Custom Outline", () => <SelectDropdown outlineColor="rgb(146, 160, 241)" optionsArray={sampleOptions} />);
