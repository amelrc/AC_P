import device from "../generalStyles";
import TabNav from "./tabNab";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(10px);
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

const NavBar = () => {
  return (
    <Nav>
      <TabNav href="/menu" text="work" />
      <TabNav href="/about" text="about" />
      <TabNav href="/contact" text="contact" />
    </Nav>
  );
};

export default NavBar;
