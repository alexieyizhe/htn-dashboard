import { createGlobalStyle } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLightbulb,
  faExclamation,
  faTimes,
  faCheck,
  faDoorClosed,
  faDoorOpen,
  faQuestion,
  faCogs,
  faCog,
  faChevronUp,
  faChevronDown,
  faChevronCircleLeft
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faLightbulb,
  faExclamation,
  faTimes,
  faCheck,
  faDoorClosed,
  faDoorOpen,
  faQuestion,
  faCogs,
  faCog,
  faChevronUp,
  faChevronDown,
  faChevronCircleLeft
);

const siteTheme = {
  colors: {
    black: '#4B4B4B',
    lightBlack: '#696969',
    grey: '#AAAAAA',

    blue: '#68B0E5',
    green: '#5CBF6B',

    warning: '#F4A867',
    error: '#F07285',
  },
  defaults: {
    borderRadius: '10px',
    borderRadiusRound: '50px',
    fontWeight: '600'
  }
}

export const GlobalStyles = createGlobalStyle`
  html, body, * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    font-family: Rubik, Arial, sans-serif;
  }
`;


export default siteTheme;
