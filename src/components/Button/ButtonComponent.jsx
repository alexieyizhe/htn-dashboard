import React from "react";
import styled from "styled-components";


const Container = styled.button`
  cursor: pointer;
  padding: 1em 2em;
  border-radius: ${props => props.theme.defaults.borderRadiusRound};

  color: white;
  background-color: ${props => props.backgroundColor || (props.disabled ? props.theme.colors.grey : props.theme.colors.lightBlack)};

  &:focus {
    outline: none;
  }

  transition: background-color 250ms ease-in-out;
  &:hover {
    background-color: ${props => props.backgroundColor || (props.disabled ? props.theme.colors.grey : props.theme.colors.black)};
  }
`;


const Button = ({
  className,
  label,
  disabled,
  backgroundColor,
  type = "button",
  onClickHandler = () => console.log(`clicked ${label} button`),
}) => (
  <Container
    className={className}
    type={type}
    disabled={disabled}
    backgroundColor={backgroundColor}
    onClick={disabled ? null : () => onClickHandler()}
  >
    {label}
  </Container>
);


export default Button;
