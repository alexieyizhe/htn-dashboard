import React, { useContext } from "react";
import styled from "styled-components";
import { SiteContext } from "../utils/siteContext";

import DashboardView from "./Dashboard/DashboardViewContainer";
import QuestionSetView from "./QuestionSet/QuestionSetViewComponent";


import Header from "../components/Header/HeaderComponent";
import HeaderButtons from "../components/HeaderButtons/HeaderButtonsComponent";
import Toast from "../components/Toaster/ToastComponent";
import Heading from "../components/Heading/HeadingComponent";


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
  width: 45vw;

  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
`;


const NavButtons = styled.div`
  height: 10vh;
`;


const Greeting = styled.div`
  height: 60vh;


  & .userName {
    font-size: 4em;
    color: ${props => props.theme.colors.black};
  }

  & span {
    font-weight: 600;
    color: ${props => props.theme.colors.black};
  }

`;


const ToastContainer = styled.div`
  height: 20vh;
`;


const DashboardToast = styled(Toast)`
  width: 55%;
  height: 75%;
`;



const App = () => {

  const { state, dispatch } = useContext(SiteContext);

  return (
    <Container>

      <LeftColumn>
        <Header/>
        <Greeting>
          <Heading noMargin>Good morning,</Heading>
          <div className="userName">
            Bob.
          </div>
          <Heading>Good to see you again!</Heading>
        </Greeting>
        <ToastContainer>
          <DashboardToast>
            You have <span>four</span> sections left in your application.
          </DashboardToast>
        </ToastContainer>
      </LeftColumn>

      <RightColumn>
        <NavButtons><HeaderButtons /></NavButtons>
        {state.curLocation === 'dashboard'
          ? <DashboardView />
          : <QuestionSetView questionSet={state.questionSets[0]} />}
      </RightColumn>

    </Container>
  );
}

export default App;
