import { Link } from "react-router-dom";
import Accordion from "../components/accordion";
import styled from "styled-components";
import device from "../generalStyles";

export const MenuWrapper = styled.div`
  background-color: #0d0b33;
  height: calc(100vh - 47px);
  overflow: scroll;
  @media ${device.tablet} {
    height: 100vh;
  }
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <Accordion />
    </MenuWrapper>
  );
};

export default Menu;
