import React, { useState } from "react";
import styled from "styled-components";


const Container = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.8em;

  font-size: 100%;
  color: ${props => props.outlineColor || props.theme.defaults.black};

  transition: border 250ms ease-in-out;
  border-radius: ${props => props.theme.defaults.borderRadius};
  border: ${props => `2px solid ${props.outlineColor || props.theme.colors.grey}`};

  &.touched, &:focus {
    outline: none;
    border: ${props => `2px solid ${props.outlineColor || props.theme.colors.black}`};
  }
`;


const TextInput = ({
  placeholder,
  outlineColor
}) => {

  const [value, updateValue] = useState('');

  return (
    <Container
      className={value !== '' ? 'touched' : ''}
      placeholder={placeholder}
      outlineColor={outlineColor}
      value={value}
      onChange={(e) => updateValue(e.target.value)}
    />
  );
};


export default TextInput;
