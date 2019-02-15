import React from "react";
import styled from "styled-components";


import TextInput from "../TextInput/TextInputComponent";
import TextArea from "../TextArea/TextAreaComponent";


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
  width: 90%;
  height: auto;
`;

const Question = ({
  questionData
}) => {

  let QuestionInput;
  switch(questionData.type) {
    case 'text':
      QuestionInput = <TextInput />;
      break;

    case 'longText':
      QuestionInput = <TextArea />;
      break;

    case 'select':
      QuestionInput = <div>this is a select question</div>;
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
