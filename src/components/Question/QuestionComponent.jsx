import React from "react";
import styled from "styled-components";


const Container = styled.div`
  margin-bottom: 2vw;
`;

const Title = styled.div`
  font-size: 1em;
  font-weight: ${props => props.theme.defaults.fontWeight};
  text-transform: uppercase;
  color: ${props => props.theme.colors.grey};
`


const Question = ({
  questionData
}) => {

  let QuestionInput;
  switch(questionData.type) {
    case 'text':
      QuestionInput = <div>this is a text question</div>;
      break;

    case 'longText':
      QuestionInput = <div>this is a longText question</div>;
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
      {QuestionInput}
    </Container>
  );
}


export default Question;
