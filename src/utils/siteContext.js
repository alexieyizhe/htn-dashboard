import React, { createContext, useReducer } from 'react';

// Default context seed data
const defaultQuestionSets = [];

const addStateToQuestions = questions => {
  const newQuestions = questions.map(q => ({
    ...q,
    curValue: ''
  }));

  return newQuestions;
};


const addStateToQuestionSets = questionSets => {
  const newQS = questionSets.map(qs => ({
    ...qs,
    completed: false,
    questions: addStateToQuestions(qs.questions)
  }));

  return newQS;
};



const updateQuestions = (questions, questionId, questionResponse) => {

  const newQuestions = questions.map(q => ({
    ...q,
    curValue: (q.id === questionId ? questionResponse : q.curValue)
  }))


  return newQuestions;
}

const updateQuestionSets = (questionSets, qsId, questionId, questionResponse) => {
  let newQS = questionSets.map(qs => ({
    ...qs,
    questions: (qs.id === qsId) ? updateQuestions(qs.questions, questionId, questionResponse) : qs.questions,
  }));

  newQS = newQS.map(qs => ({
    ...qs,
    completed: qs.questions.every(question => question.curValue !== ''),
  }));

  return newQS;
}


const DASHBOARD_PAGE = 'dashboard';
const defaultLocation = DASHBOARD_PAGE;


const initialState = {
  name: 'Michal',
  questionSets: addStateToQuestionSets(defaultQuestionSets),
  applicationCompleted: false,
  applicationSubmitted: false,
  curLocation: defaultLocation
};

const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;

    case "hydrateStorage":
      return {
        ...state,
        [action.data.key]: action.data.value
      }

    case "getAPIData":
      return {
        ...state,
        questionSets: addStateToQuestionSets(action.data)
      }

    case "goHome":
      return { ...state, curLocation: DASHBOARD_PAGE };

    case "goToQuestionSet":
      return { ...state, curLocation: action.newLoc };

    case "updateApplication": {
      let newState = {
        ...state,
        questionSets: updateQuestionSets(state.questionSets, action.data.setId, action.data.questionId, action.data.questionResponse),
      };
      newState = {
        ...newState,
        applicationCompleted: newState.questionSets.every(qs => qs.completed)
      };
      return newState;
    }

    case "submitApp":
      return { ...state, applicationSubmitted: true };

    default:
      return state;
  }
};

export const SiteContext = createContext();

export const SiteContextConsumer = SiteContext.Consumer;

const SiteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
  );
}

export default SiteContextProvider;
