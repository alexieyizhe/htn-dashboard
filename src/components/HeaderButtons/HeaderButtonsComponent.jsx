import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const HeaderButton = styled.div`
  display: inline-block;
  color: ${props => props.theme.colors.grey};
  cursor: pointer;
  margin: auto 0 auto 1vw;

  will-change: transform;
  transition: transform 250ms ease-in-out;
  transform: scale(0.75);
  &:hover {
    transform: scale(0.9);
  }
`;


const Toast = ({
  className,
}) => (
  <Container className={className}>
    <HeaderButton>
      <FontAwesomeIcon
        icon="question"
        size="2x"
        onClick={() => console.log('clicked Help button')}
      />
    </HeaderButton>
    <HeaderButton>
      <FontAwesomeIcon
        icon="cog"
        size="2x"
        onClick={() => console.log('clicked Settings button')}
      />
    </HeaderButton>
    <HeaderButton>
      <FontAwesomeIcon
        icon="door-open"
        size="2x"
        onClick={() => console.log('clicked Logout button')}
      />
    </HeaderButton>


  </Container>
);


export default Toast;
