import { Link } from "react-router-dom";
import device from "../generalStyles";
import styled from "styled-components";
import TabNav from "./tabNab";

const Nav = styled.div`
  display: flex;
  @media ${device.small} {
    transform-origin: left top;
    transform: translateX(-100%) rotate(90deg);
    width: 100vh;
    // position: fixed;
  }
`;
const Links = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const NavBar = () => {
  return (
    <Nav>
      <Links to="/menu">
        <TabNav text="work" />
      </Links>
      <Links to="/about">
        <TabNav text="about" />
      </Links>
      <Links to="/contact">
        <TabNav text="contact" />
      </Links>
    </Nav>
  );
};

export default NavBar;
