import React from "react";
import styled from "styled-components";

/* Images */
import LogoImg from "../../../static/favicon.jpg";


const Container = styled.span`
  width: auto;
  height: 10vh;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  color: ${props => props.theme.colors.black};
  background-color: white;
`;


const HeaderTitle = styled.span`
  font-size: 1.75em;
  margin: auto auto auto 0.5em;
`;


const HeaderLogo = styled.img`
  max-height: 70%;
  margin: auto 0; // centers img
`;


const Header = () => (
  <Container>
    <HeaderLogo src={LogoImg} alt="Hack the North logo" />
    <HeaderTitle>Hack the North</HeaderTitle>
  </Container>
);


export default Header;
