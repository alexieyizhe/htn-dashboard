import React from "react";
import styled from "styled-components";


const Container = styled.button`
  cursor: pointer;
  padding: 1em 2em;
  border-radius: ${props => props.theme.defaults.borderRadiusRound};

  color: white;
  background-color: ${props => props.backgroundColor || props.theme.colors.lightBlack};

  &:focus {
    outline: none;
  }

  transition: background-color 250ms ease-in-out;
  &:hover {
    background-color: ${props => props.backgroundColor || props.theme.colors.black};
  }
`;


const Button = ({
  label,
  backgroundColor,
  type = "button",
  onClickHandler = null,
}) => (
  <Container
    type={type}
    backgroundColor={backgroundColor}
    onClick={onClickHandler !== null ? () => onClickHandler() : () => console.log(`clicked ${label} button`)}
  >
    {label}
  </Container>
);


export default Button;
