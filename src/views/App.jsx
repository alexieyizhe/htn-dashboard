import React, { useContext } from "react";
import styled from "styled-components";
import { SiteContext } from "../utils/siteContext";

import DashboardView from "./Dashboard/DashboardViewContainer";
import QuestionSetView from "./QuestionSet/QuestionSetViewComponent";


import Header from "../components/Header/HeaderComponent";
import HeaderButtons from "../components/HeaderButtons/HeaderButtonsComponent";
import Toast from "../components/Toaster/ToastComponent";
import Heading from "../components/Heading/HeadingComponent";


const getDashboardGreeting = () => {
  let greeting = "Good morning";
  const hourOfDay = parseFloat(new Date().getHours());
  if (hourOfDay >= 12 && hourOfDay < 18) {
    greeting = "Good afternoon";
  } else if (hourOfDay >= 18) {
    greeting = "Good evening";
  }

  return greeting;
};


const Container = styled.div`
  width: 100vw;
  height: auto;
  padding: 5vh 10vw;

  display: flex;
  flex-direction: row;
`;

const LeftColumn = styled.div`
  position: sticky;
  top: 5vh;
  height: 90vh;
  width: 45vw;

  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RightColumn = styled.div`
  position: relative;
  width: 45vw;

  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
`;


const ColumnContents = styled.div`
  position: relative;
`;


const ColumnPane = styled.div`
  padding-top: 3vw;

  position: absolute;
  will-change: translateX, opacity;
  transition: transform 500ms ease-in-out, opacity 300ms ease-in-out;
  opacity: ${props => props.show ? 1 : 0};
  transform: ${props => props.show ? 'translateX(0)' : `translateX(${props.hide === 'left' ? '-20vw' : '20vw'})`};
`;


const NavButtons = styled.div`
  height: 10vh;
`;


const Greeting = styled.div`
  padding-top: 3vw;
  height: 60vh;

  & .userName {
    font-size: 4em;
    color: ${props => props.theme.colors.black};
  }
`;


const ToastContainer = styled.div`
  height: 20vh;
`;


const DashboardToast = styled(Toast)`
  width: 60%;
  height: 70%;

  & span {
    font-weight: 600;
  }
`;


const App = () => {

  const { state } = useContext(SiteContext);
  const isOnDashboard = (state.curLocation === 'dashboard');
  const numUnfinishedSets = state.questionSets.filter(qs => qs && !qs.completed).length;

  return (
    <Container>

      <LeftColumn>
        <Header/>
        <Greeting>
          <Heading noMargin>{getDashboardGreeting()},</Heading>
          <div className="userName">
            {state.name}.
          </div>
          <Heading>Good to see you again!</Heading>
        </Greeting>
        <ToastContainer>
          <DashboardToast>
            You have <span>{numUnfinishedSets}</span> sections left in your application.
          </DashboardToast>
        </ToastContainer>
      </LeftColumn>

      <RightColumn>
        <NavButtons><HeaderButtons /></NavButtons>
        <ColumnContents style={{position: 'relative'}}>
          <ColumnPane show={isOnDashboard} hide="left" stack><DashboardView /></ColumnPane>
          <ColumnPane show={!isOnDashboard} hide="right" stack><QuestionSetView qsId={state.curLocation}/></ColumnPane>
        </ColumnContents>

      </RightColumn>

    </Container>
  );
}

export default App;
