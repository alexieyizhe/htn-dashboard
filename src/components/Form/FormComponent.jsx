import React, { useContext, useState, useCallback } from "react";
import styled from "styled-components";
import { debounce } from "debounce";
import { SiteContext } from "../../utils/siteContext";
import { mediaSize } from "../../utils/siteTools";

import Heading from "../Heading/HeadingComponent";
import Question from "../Question/QuestionComponent";


const FormContainer = styled.div`
  ${mediaSize.tablet`
    padding-bottom: 12vw;
    width: 80vw;
  `};

  ${mediaSize.phone`
    padding-bottom: 20vw;
  `};
`;


const Alert = styled.span`
  position: relative;
  color: ${props => props.allclear ? props.theme.colors.green : props.theme.colors.grey};

  transition: opacity 250ms ease-in-out;
  opacity: ${props => props.show ? 1 : 0};

  &.stack {
    position: absolute;
    left: 0;
  }
`;



const Form = ({
  id
}) => {

  const [ questionSaveState, setQuestionSaveState ] = useState('ready');
  const { state, dispatch } = useContext(SiteContext);
  const questionSetInState = state.questionSets.filter(qs => (qs.id === id))[0];
  const setIsComplete = questionSetInState && questionSetInState.completed;

  const delayedDispatchResponse = useCallback(
    debounce((questionId, questionResponse) => {
      dispatch({ type: 'updateApplication', data: { setId: id, questionId, questionResponse } });
      setQuestionSaveState('saved');
    }, 1000),
    [id]
  );

  const saveResponse = (questionId, questionResponse) => {
    setQuestionSaveState('saving');
    delayedDispatchResponse(questionId, questionResponse)
  };

  return (
    <FormContainer>
      <Heading main>{questionSetInState && questionSetInState.label}</Heading>
      {questionSetInState && questionSetInState.questions.map(question => (
        <Question key={question.id} questionData={question} responseUpdater={saveResponse} />
      ))}
      <Alert
        show={(questionSaveState === 'saved' && !setIsComplete)}
      >
        Your responses have been saved.
      </Alert>

      <Alert
        className="stack"
        show={(questionSaveState === 'saving')}
      >
        Saving...
      </Alert>

      <Alert
        className="stack"
        allclear
        show={(questionSaveState === 'saved' || questionSaveState === 'ready') && setIsComplete}
      >
        Nice! This section has been completed.
      </Alert>
    </FormContainer>
  );
}


export default Form;
