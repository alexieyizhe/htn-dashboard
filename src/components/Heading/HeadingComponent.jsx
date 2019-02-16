import styled from "styled-components";

const Heading = styled.div`
  font-size: 2em;
  font-weight: 500;
  color: ${props => props.main ? props.theme.colors.black : props.theme.colors.grey};
  margin-bottom: ${props => props.noMargin ? 0 : '0.5em'};
`;

export default Heading;
