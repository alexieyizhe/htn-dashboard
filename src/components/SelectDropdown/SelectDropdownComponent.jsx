import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Select from 'react-select';


const SelectDrop = styled(Select)`
  width: 100%;
  height: 100%;
  padding: 0.2em;

  font-size: 100%;
  color: ${props => props.outlineColor || props.theme.defaults.black};

  transition: border 250ms ease-in-out;
  border-radius: ${props => props.theme.defaults.borderRadius};
  border: ${props => `2px solid ${props.outlineColor || props.theme.colors.grey}`};

  &.touched {
    outline: none;
    border: ${props => `2px solid ${props.outlineColor || props.theme.colors.black}`};
  }

  & .react-select__control, & .select__control--is-focused {
    border: none;
    box-shadow: none;
  }

  & .react-select__menu {
    margin-top: 0.2em;

    & .react-select__option {
      cursor: pointer;
    }
  }
`;


const SelectDropdown = ({
  id,
  defaultValue,
  placeholder = 'Select an option...',
  options,
  disabled,
  allowMultiple,
  outlineColor,
  responseUpdater
}) => {

  const [value, updateValue] = useState(defaultValue);
  const [isFocused, toggleFocus] = useState(false);
  const [isFilled, setFilled] = useState(defaultValue !== '');

  useEffect(() => {
    if(defaultValue !== value) responseUpdater(id, value);
  });

  return (
    <SelectDrop
      className={`react-select-container ${(isFocused || isFilled) ? 'touched' : ''}`}
      classNamePrefix='react-select'
      outlineColor={outlineColor}
      isMulti={allowMultiple}
      isDisabled={disabled}
      placeholder={placeholder}
      options={options}
      defaultValue={defaultValue && {value: defaultValue, label: options.find(o => o.value === defaultValue).label}}
      onBlur={() => toggleFocus(false)}
      onFocus={() => toggleFocus(true)}
      onChange={(option) => {setFilled(true); updateValue(option.value)}}
    />
  );
}


export default SelectDropdown;
