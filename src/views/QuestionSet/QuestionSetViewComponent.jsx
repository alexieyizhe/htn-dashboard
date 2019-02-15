import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiteContext } from "../../utils/siteContext";

import Heading from "../../components/Heading/HeadingComponent";
import Question from "../../components/Question/QuestionComponent";

const Container = styled.div`
  position: relative;
`;

const BackButton = styled.span`
  position: absolute;
  top: 3px;
  left: -5vw;

  color: ${props => props.theme.colors.black};
  cursor: pointer;

  will-change: transform;
  transition: transform 250ms ease-in-out;
  transform: scale(1.0);
  &:hover {
    transform: scale(1.1);
  }
`;


const QuestionSet = ({
  className,
  questionSet,
}) => {

  const { state, dispatch } = useContext(SiteContext);
  const goHome = () => dispatch({ type: 'goHome' });

  return (
    <Container>
      <BackButton onClick={() => goHome()}>
        <FontAwesomeIcon icon="chevron-circle-left" size="2x" />
      </BackButton>
      <Heading main>{questionSet.label}</Heading>
      {questionSet.questions.map(question => (
        <Question questionData={question} />
      ))}
    </Container>
  );
};


export default QuestionSet;
