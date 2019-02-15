import React, { useContext } from "react";
import styled from "styled-components";
import { SiteContext } from "../../utils/siteContext";

import Heading from "../../components/Heading/HeadingComponent";
import Card from "../../components/Card/CardComponent";




const DashboardCard = styled(Card)`
  width: 40vw;
  height: 10vw;
  margin: 0 0 2vw auto;
`;


const DashboardView = () => {
  const { state, dispatch } = useContext(SiteContext);
  const goToQuestionSet = name => dispatch({ type: 'goToQuestionSet', newLoc: name })

  return (
    <div>
      <Heading main>Application Sections</Heading>
      {state.questionSets.map(questionSet => (
        <DashboardCard key={questionSet.id} clickHandler={() => goToQuestionSet(questionSet.id)} label={questionSet.label} />
      ))}
    </div>
  );
}


export default DashboardView;
