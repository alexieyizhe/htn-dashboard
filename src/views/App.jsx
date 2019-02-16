import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import "isomorphic-fetch"; // eslint-disable-line
import { SiteContext } from "../utils/siteContext";
import { mediaSize, HTN_QUESTION_ENDPOINT, STATE_KEYS } from "../utils/siteTools";

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

  ${mediaSize.tablet`
    flex-direction: column;
  `};
`;

const LeftColumn = styled.div`
  position: sticky;
  top: 5vh;
  height: 90vh;
  width: 45vw;

  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;

  ${mediaSize.tablet`
    position: relative;
    height: auto;
    width: 80vw;
    justify-content: space-between;

  `};
`;

const RightColumn = styled.div`
  width: 45vw;

  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;

  ${mediaSize.tablet`
    margin-top: 5vh;
    height: auto;
    width: 80vw;
  `};
`;


const ColumnContents = styled.div`
  position: relative;
`;


const ColumnPane = styled.div`
  padding-top: 5vh;

  position: absolute;
  will-change: translateX, opacity;
  transition: transform 500ms ease-in-out, opacity 300ms ease-in-out;
  opacity: ${props => props.show ? 1 : 0};
  transform: ${props => props.show ? 'translateX(0)' : `translateX(${props.hide === 'left' ? '-100vw' : '100vw'})`};
`;


const NavButtons = styled.div`
  height: 10vh;

  ${mediaSize.tablet`
    position: absolute;
    top: 10vh;
    right: 10vw;
  `};
`;


const Greeting = styled.div`
  position: sticky;
  top: 15vh;
  padding-top: 5vh;
  height: 60vh;

  & .userName {
    font-size: 4em;
    color: ${props => props.theme.colors.black};
  }

  ${mediaSize.tablet`
    height: auto;
  `};
`;


const ToastContainer = styled.div`
  position: fixed;
  bottom: 5vh;
  width: 40vw;
  height: 20vh;

  ${mediaSize.tablet`
    display: none;
  `};
`;


const DashboardToast = styled(Toast)`
  width: 65%;
  height: 70%;

  & span {
    font-weight: 600;
  }
`;


const App = () => {

  const { state, dispatch } = useContext(SiteContext);
  const isOnDashboard = (state.curLocation === 'dashboard');
  const numUnfinishedSets = state.questionSets.filter(qs => qs && !qs.completed).length;

  const fetchQuestionSetData = () => {
    fetch(HTN_QUESTION_ENDPOINT) // eslint-disable-line
     .then(response => response.json())
     .then(questionSetData => {
       localStorage.setItem('lastAPICall', JSON.stringify(Date.now()));
       dispatch({ type: "getAPIData", data: questionSetData });
     })
     .catch(e => {
       console.log(e);
     });
  }

  const loadStateFromAPIorStorage = () => {
    STATE_KEYS.forEach(key => {
      if(localStorage.hasOwnProperty(key) && key !== "questionSet") { // eslint-disable-line
        let valueInStorage = localStorage.getItem(key);
         try {
           valueInStorage = JSON.parse(valueInStorage);
           console.log(valueInStorage)
           dispatch({ type: "hydrateStorage", data: { key, value: valueInStorage } });

         } catch (e) {
           // usually an invalid parse (possibly empty string)
           console.log(e);
         }
       } else if(key === "questionSet") {
         fetchQuestionSetData();
       }
    })
  }

  const saveStateToStorage = () => {
    STATE_KEYS.forEach(key => {
      localStorage.setItem(key, JSON.stringify(state[key]));
    })
  }

  
  useEffect(() => {
    loadStateFromAPIorStorage();
    fetchQuestionSetData();
    window.addEventListener('beforeunload', () => saveStateToStorage());

    return () => {
      window.removeEventListener('beforeunload', () => saveStateToStorage());

      saveStateToStorage();
    }
  }, []);

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
