import React, { useState } from "react";
import styled from "styled-components";
import Select from 'react-select';

const Container = styled.div`
`;


const Box = styled.div`
`;


const OptionsList = styled.ul`
`;


const OptionSelect = styled(Select)`
  border: ${props => `2px solid ${props.outlineColor || props.theme.colors.grey}`};
  border-radius: ${props => props.theme.defaults.borderRadius};
`;


const SelectDropdown = ({
  className,
  placeholder = 'Select an option',
  optionsArray,
  disabled,
  allowMultiple,
  outlineColor
}) => {

  return (
    <Container>
      <Select
        className='react-select-container'
        classNamePrefix='react-select'
        options={optionsArray}
      />
    </Container>
  );
}


export default SelectDropdown;
