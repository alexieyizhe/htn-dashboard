import React from "react";
import styled from "styled-components";
import { SITE_QUESTION_TYPES } from "../../utils/siteTools";

import TextInput from "../TextInput/TextInputComponent";
import TextArea from "../TextArea/TextAreaComponent";
import SelectDropdown from "../SelectDropdown/SelectDropdownComponent";

const Container = styled.div`
  margin: 2vw 0;
`;

const Title = styled.div`
  font-size: 1em;
  font-weight: ${props => props.theme.defaults.fontWeight};
  text-transform: uppercase;
  color: ${props => props.theme.colors.grey};

  margin-bottom: 0.5em;
`;


const ResponseContainer = styled.div`
  width: 95%;
  height: auto;
`;

const Question = ({
  questionData,
  responseUpdater
}) => {

  let QuestionInput;
  switch(questionData.type) {
    case SITE_QUESTION_TYPES.TEXT:
      QuestionInput = <TextInput placeholder={questionData.placeholder} id={questionData.id} defaultValue={questionData.curValue} responseUpdater={responseUpdater} />;
      break;

    case SITE_QUESTION_TYPES.LONGTEXT:
      QuestionInput = <TextArea placeholder={questionData.placeholder} id={questionData.id} defaultValue={questionData.curValue} responseUpdater={responseUpdater} />;
      break;

    case SITE_QUESTION_TYPES.SELECT:
      QuestionInput = <SelectDropdown options={questionData.options} id={questionData.id} defaultValue={questionData.curValue} responseUpdater={responseUpdater} />;
      break;

    default:
      QuestionInput = <div>this is a default case question</div>;
  }

  return (
    <Container>
      <Title>{questionData.label}</Title>
      <ResponseContainer>
        {QuestionInput}
      </ResponseContainer>
    </Container>
  );
}


export default Question;
