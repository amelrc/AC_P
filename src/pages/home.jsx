import styled from "styled-components";
import Image from "../images/BG.jpg";
import Logo from "../assets/logo.svg";
import Nav from "../components/nav";

const BG = styled.div`
  background-image: url(${Image});
  background-position: 30% center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const NavWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Home = () => {
  return (
    <BG>
      <div></div>
      <NavWrapper>
        <LogoWrapper>
          <img width="54px" src={Logo} alt="logo" />
        </LogoWrapper>
        <Nav />
      </NavWrapper>
    </BG>
  );
};

export default Home;
