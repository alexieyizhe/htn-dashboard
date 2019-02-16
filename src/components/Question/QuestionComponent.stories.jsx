import React from "react";
import { storiesOf } from "@storybook/react";
import Question from "./QuestionComponent";

const sampleQuestionDataText = {
  id: 'favFood',
  label: 'What is your favourite food?',
  placeholder: 'Pizza',
  type: 'text'
}

const sampleQuestionDataLongText = {
  id: 'favFood',
  label: 'What is your favourite food?',
  placeholder: 'Pizza',
  type: 'longText'
}

const sampleQuestionDataDropdown = {
  id: 'favFood',
  label: 'What is your favourite food?',
  placeholder: 'Pizza...',
  options: [
    {label: 'Pizza', value: 'pizza'},
    {label: 'Sushi', value: 'sushi'},
    {label: 'Tacos', value: 'tacos'},
  ],
  type: 'select'
}

storiesOf("Question", module)
  .add("Text", () => <Question questionData={sampleQuestionDataText} responseUpdater={() => {}} />)
  .add("Long Text", () => <Question questionData={sampleQuestionDataLongText} responseUpdater={() => {}} />)
  .add("Dropdown", () => <Question questionData={sampleQuestionDataDropdown} responseUpdater={() => {}} />);
