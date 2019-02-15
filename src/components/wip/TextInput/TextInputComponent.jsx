import React from "react";
import styled from "styled-components";


const Container = styled.input`
  padding: 1vw;
  border: ${props => `2px solid ${props.outlineColor || props.theme.colors.grey}`};
  border-radius: ${props => props.theme.defaults.borderRadius};

  color: ${props => props.outlineColor || props.theme.defaults.black};
  transition: border 250ms ease-in-out;

  &:focus {
    outline: none;
    border: ${props => `2px solid ${props.outlineColor || props.theme.colors.black}`};
  }
`;


const TextInput = ({
  placeholder,
  outlineColor
}) => (
  <Container
    placeholder={placeholder}
    outlineColor={outlineColor}
  />
);


export default TextInput;
