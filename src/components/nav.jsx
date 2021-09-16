import device from "../generalStyles";
import TabNav from "./tabNab";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1;
  background-color: #fdfde4;
  @media ${device.laptopV} {
    transform-origin: top right;
    transform: rotate(-90deg);
    width: calc(100vh - 58px);
    position: fixed;
    top: 58px;
    right: 58px;
    min-height: 58px;
    flex-direction: row-reverse;
    bottom: auto;
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
