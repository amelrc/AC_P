import device from "../generalStyles";
import Logo from "../images/Logo.svg";
import ResizableWord from "./ResizableWord";
import styled from "styled-components";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 60% 1fr;
  justify-items: center;
  padding: 16px 0;
  align-items: center;
  width: 100%;
`;

const NavTop = ({ style }) => {
  return (
    <Nav style={style}>
      <ResizableWord href="/" navitem={"work"} />
      <img src={Logo} alt="Amel Caballero Design Logo" />
      <ResizableWord href="/" navitem={"services"} />
    </Nav>
  );
};
const NavBot = ({ style }) => {
  return (
    <Nav style={style}>
      <ResizableWord href="/" navitem={"about"} />
      <ResizableWord style={{ gridColumn: 3 }} href="/" navitem={"contact"} />
    </Nav>
  );
};

export { NavBot, NavTop };
