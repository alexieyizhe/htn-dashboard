import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "../../components/Card/CardComponent";
import Header from "../../components/Header/HeaderComponent";
import HeaderButtons from "../../components/HeaderButtons/HeaderButtonsComponent";
import Toast from "../../components/Toaster/ToastComponent";

const DashboardContainer = styled.div`
  width: 100vw;
  height: auto;
  padding: 5vh 10vw;

  display: flex;
  flex-direction: row;
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
`;


const Greeting = styled.div`
  margin-top: 3vw;
  height: 60vh;

  font-size: 2em;
  font-weight: 500;
  color: ${props => props.theme.colors.grey}
  & .userName {
    font-size: 2.25em;
    color: ${props => props.theme.colors.black};
  }
  & span {
    color: ${props => props.theme.colors.black};
  }

`;


const ToastContainer = styled.div`
  height: 20vh;

`;


const DashboardToast = styled(Toast)`
  width: 55%;
  height: 75%;
`;


const AppSectionsContainer = styled.div`
  margin-top: 3vw;
  position: relative;
`;

const DashboardCard = styled(Card)`
  width: 40vw;
  height: 10vw;
  margin: 0 0 2vw auto;
`;



const DashboardView = () => (
  <DashboardContainer>
    <LeftColumn>
      <Header/>
      <Greeting>
        <div>Good morning,</div>
        <div className="userName">
          Bob.
        </div>
        <div>Good to see you again!</div>
      </Greeting>
      <ToastContainer>
        <DashboardToast>
          You have <span style={{ fontWeight: 600 }}>four</span> sections left in your application.
        </DashboardToast>
      </ToastContainer>
    </LeftColumn>
    <RightColumn>
      <NavButtons>
        <HeaderButtons />
      </NavButtons>
      <AppSectionsContainer>

        <DashboardCard label="General Info" />

        <DashboardCard label="Technical Skills" />

        <DashboardCard label="Logistics" />

        <DashboardCard completed />

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
