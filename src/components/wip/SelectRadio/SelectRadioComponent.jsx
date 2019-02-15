import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Container = styled.span`
`;

const Option = styled



const SelectRadio = ({
  className,
  selectFor,
  outlineColor,
  children
}) => (
  <Container
    className={className}
  >
    <div>
      {selectFor.label}
    </div>
  </Container>
);


export default SelectRadio;
