import React, { useState, useEffect } from "react";
import styled from "styled-components";


const Container = styled.textarea`
  width: 100%;
  max-width: 100%;
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


const TextArea = ({
  id,
  defaultValue,
  placeholder,
  outlineColor,
  responseUpdater
}) => {

  const [value, updateValue] = useState(defaultValue);

  useEffect(() => {
    if(defaultValue !== value) responseUpdater(id, value);
  });

  return (
    <Container
      className={value !== '' ? 'touched' : ''}
      placeholder={placeholder}
      outlineColor={outlineColor}
      defaultValue={defaultValue}
      onChange={(e) => updateValue(e.target.value)}
    />
  );
};


export default TextArea;
