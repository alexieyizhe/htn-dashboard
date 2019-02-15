import React from "react";
import styled from "styled-components";


const Container = styled.textarea`
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


const TextArea = ({
  placeholder,
  outlineColor
}) => (
  <Container
    placeholder={placeholder}
    outlineColor={outlineColor}
  />
);


export default TextArea;
