import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiteContext } from "../../utils/siteContext";
import { mediaSize } from "../../utils/siteTools";

import Form from "../../components/Form/FormComponent";

const Container = styled.div`
  position: relative;
`;

const BackButton = styled.span`
  position: absolute;
  top: 3px;
  left: -5vw;

  color: ${props => props.theme.colors.black};
  cursor: pointer;

  will-change: transform;
  transition: transform 250ms ease-in-out;
  transform: scale(1.0);
  &:hover {
    transform: scale(1.1);
  }

  ${mediaSize.tablet`
    width: 10%;
    position: fixed;
    top: auto;
    bottom: 5vw;
    left: 50%;
    margin-left: -5%;
  `};
`;


const QuestionSet = ({
  qsId,
}) => {

  const { dispatch } = useContext(SiteContext);
  const goHome = () => dispatch({ type: 'goHome' });

  return (
    <Container>
      <BackButton onClick={() => goHome()}>
        <FontAwesomeIcon icon="chevron-circle-left" size="2x" />
      </BackButton>

      <Form id={qsId} />

    </Container>
  );
};


export default QuestionSet;
