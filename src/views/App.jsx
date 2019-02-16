import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import "isomorphic-fetch"; // eslint-disable-line
import { SiteContext } from "../utils/siteContext";
import { mediaSize, getDashboardGreeting, HTN_QUESTION_ENDPOINT, STATE_KEYS } from "../utils/siteTools";

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
  const numUnfinishedSets = state.questionSets && state.questionSets.filter(qs => qs && !qs.completed).length;
  const stateRef = useRef();
  stateRef.current = state;

  const fetchQuestionSetData = () => {
    fetch(HTN_QUESTION_ENDPOINT) // eslint-disable-line
     .then(response => response.json())
     .then(questionSetData => {
       // ideally, you would store a hash or some unique identifier of the question sets
       // so that if the question set ever changes, the user has to fill out the new
       // application question set instead of being able to keep the old one
       localStorage.setItem('lastAPICallIdentifier', 'SOME_UNIQUE_HASH');
       dispatch({ type: "getAPIData", data: questionSetData });
     })
     .catch(e => {
       console.log(e);
     });
  }

  const loadStateFromAPIorStorage = () => {
    STATE_KEYS.forEach(key => {
      // here's where you would compare the identifier in localStorage with
      // a newer identifier so that you can determine whether a newer
      // version of the application question set exists
      // const identifierMatches = (key !== 'questionSets' || false);
      // eslint-disable-next-line
      const shouldLoadFromStorage = localStorage.hasOwnProperty(key) // && identifierMatches

      if(shouldLoadFromStorage) {
        let valueInStorage = localStorage.getItem(key);
         try {
           valueInStorage = JSON.parse(valueInStorage);
           dispatch({ type: "hydrateStorage", data: { key, value: valueInStorage } });

         } catch (e) {
           // usually an invalid parse (possibly empty string)
           console.log(e);
         }
       } else if(key === 'questionSets') {
         // questionSets wasn't found locally (probably new user), fetch data
         fetchQuestionSetData();
       }
    })
  }

  const saveStateToStorage = () => {
    STATE_KEYS.forEach(key => {
      localStorage.setItem(key, JSON.stringify(stateRef.current[key]));
    })
  }


  useEffect(() => {
    loadStateFromAPIorStorage();
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
            You have <span>{numUnfinishedSets}</span> section(s) left in your application.
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
