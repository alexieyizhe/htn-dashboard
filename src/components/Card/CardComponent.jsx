import React from "react";
import styled from "styled-components";

/* Images */
import CheckmarkImg from "../../../static/checkmark.png";


const CardContainer = styled.div`
  width: 60vw;
  height: 10vw;
  padding: 2vw;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  color: white;
  background-color: ${props => props.completed ? props.theme.colors.green : props.theme.colors.blue};

  border-radius: ${props => props.theme.defaults.borderRadius};
  cursor: pointer;

  will-change: transform;
  transition: transform 250ms ease-in-out;
  transform: scale(1.0);
  &:hover {
    transform: scale(1.02);
  }
`;


const CardLabel = styled.div`
  font-size: 1.5em;
`;


const CardCheckmark = styled.img`
  max-height: 50%;
  margin: auto 1vw; // centers img
`;


const Card = ({
    className,
    label = "DEFAULT LABEL",
    completed = false,
    backgroundImg,
    clickHandler = () => console.log(`You clicked ${label}`),
}) => (
  <CardContainer
    className={className}
    completed={completed}
    backgroundImg={backgroundImg}
    onClick={() => clickHandler()}
  >
    <CardLabel>{label}</CardLabel>
    {completed && <CardCheckmark src={CheckmarkImg} alt={`Checkmark indicating completion of the ${label} question set.`} />}
  </CardContainer>
);


export default Card;
