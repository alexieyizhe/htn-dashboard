import React from "react";
import styled from "styled-components";

import Card from "../../components/Card/CardComponent";

const DashboardContainer = styled.div`
  width: 100vw;
  height: auto;
  padding: 5vh 5vw;



`;

const LeftColumn = styled.div`
  position: sticky;
  top: 5vh;
  height: 90vh;
  width: 45vw;

  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RightColumn = styled.div`
  width: 45vw;

  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;

`;


const NavButtons = styled.div`
  height: 10vh;
  background-color: rgb(212, 212, 212);
`;
const HeaderContainer = styled.div`
  height: 10vh;

  background-color: grey;
`;

const GreetingContainer = styled.div`
  height: 60vh;

  background-color: rgb(153, 153, 153);

`;


const ToastContainer = styled.div`
  height: 20vh;

  background-color: rgb(79, 79, 79);
`;


const AppSectionsContainer = styled.div`
  position: relative;
  background-color: rgb(99, 99, 99);
  height: auto;
`;

const DashboardCard = styled(Card)`
  width: 40vw;
  height: 15vw;
  margin: 0 0 2vw auto;
`;



const DashboardView = () => (
  <DashboardContainer>
    <LeftColumn>
      <HeaderContainer>header</HeaderContainer>
      <GreetingContainer>greeting goes here</GreetingContainer>
      <ToastContainer>toast goes here</ToastContainer>
    </LeftColumn>
    <RightColumn>
      <NavButtons>sign out, help, etc</NavButtons>
      <AppSectionsContainer>

        <DashboardCard label="General Info" />

        <DashboardCard label="Technical Skills" />

        <DashboardCard label="Logistics" />

        <DashboardCard />

        <DashboardCard />

        <DashboardCard />

        <DashboardCard />

        <DashboardCard />

        <DashboardCard />

        <DashboardCard />


      </AppSectionsContainer>
    </RightColumn>

  </DashboardContainer>
);


export default DashboardView;
