import React, { useContext, useState } from "react";
import styled, { withTheme } from "styled-components";
import { SiteContext } from "../../utils/siteContext";

import Heading from "../../components/Heading/HeadingComponent";
import Card from "../../components/Card/CardComponent";
import Button from "../../components/Button/ButtonComponent";



const DashboardCard = styled(Card)`
  width: 40vw;
  height: 10vw;
  margin: 0 0 2vw auto;
`;

const SubmitActionContainer = styled.div`


`;


const SubmitButton = styled(Button)`
  display: inline-block;
  font-size: 1em;
  margin-right: 1em;
`;

const SubmitMsg = styled.span`
  color: ${props => props.color};
`;




const DashboardView = ({
  theme,
  submitAppHandler = () => console.log('THIS WOULD BE WHERE THE SUBMIT APPLICATION LOGIC GOES IN A REAL APPLICATION')
}) => {

  const [ submitStatus, updateStatus ] = useState({ msg: '', color: '#363636' });
  const { state, dispatch } = useContext(SiteContext);

  const goToQuestionSet = questionSetId => dispatch({ type: 'goToQuestionSet', newLoc: questionSetId })
  const submitApplication = () => {
    if(state.applicationCompleted) {
      dispatch({ type: 'submitApp' });
      updateStatus({ msg: "We've received your application!", color: theme.colors.green });
      submitAppHandler();
    } else {
      updateStatus({ msg: "Make sure to fill out the entire application!", color: theme.colors.error });
    }
  }

  return (
    <div>
      <Heading main>Application Sections</Heading>
      {state.questionSets.map(questionSet => (
        <DashboardCard
          key={questionSet.id}
          label={questionSet.label}
          completed={questionSet.completed}
          clickHandler={() => goToQuestionSet(questionSet.id)} />
      ))}
      <SubmitActionContainer>
        {!state.applicationSubmitted && <SubmitButton label="Submit" onClickHandler={() => submitApplication()}/>}
        <SubmitMsg color={submitStatus.color}>{submitStatus.msg}</SubmitMsg>
      </SubmitActionContainer>
    </div>
  );
}


export default withTheme(DashboardView);
