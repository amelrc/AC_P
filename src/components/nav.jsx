import { Link } from "react-router-dom";
import device from "../generalStyles";
import styled from "styled-components";
import TabNav from "./tabNab";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.small} {
    transform-origin: top right;
    transform: rotate(-90deg);
    width: calc(100vh - 54px);
    position: absolute;
    top: 54px;
    right: 54px;
    min-height: 54px;
    flex-direction: row-reverse;
  }
`;
const Links = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const NavBar = () => {
  return (
    <Nav>
      <TabNav href="/work" text="work" />
      <TabNav href="/about" text="about" />
      <TabNav href="/contact" text="contact" />
    </Nav>
  );
};

export default NavBar;
