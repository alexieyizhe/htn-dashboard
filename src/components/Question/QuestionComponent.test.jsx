/* eslint-disable no-undef */
import React from "react";

import Question from "./QuestionComponent";

const sampleQuestionDataText = {
  id: 'favFood',
  label: 'What is your favourite food?',
  placeholder: 'Pizza',
  type: 'text'
}

const sampleQuestionDataLongText = {
  id: 'favFood',
  label: 'Why is that your favourite food?',
  placeholder: 'Because yum',
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


describe("Heading", () => {
  it("renders correctly as textInput", () => {
    const component = mountWithTheme(<Question questionData={sampleQuestionDataText} responseUpdater={() => {}} />);
    expect(component).toMatchSnapshot();
  });

  it("renders correctly as longtextInput", () => {
    const component = mountWithTheme(<Question questionData={sampleQuestionDataLongText} responseUpdater={() => {}} />);
    expect(component).toMatchSnapshot();
  });

  it("renders correctly as select", () => {
    const component = mountWithTheme(<Question questionData={sampleQuestionDataDropdown} responseUpdater={() => {}} />);
    expect(component).toMatchSnapshot();
  });
})
