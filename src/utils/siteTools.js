import { css, createGlobalStyle } from "styled-components";


export const displaySizes = {
  desktop: 2160,
  tablet: 1024,
  phone: 600
};

// Iterate through the sizes and create a media template
export const mediaSize = Object.keys(displaySizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${displaySizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});


export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }
`;
