import Image from "../images/BG.jpg";
import styled from "styled-components";
import { device } from "../generalStyles";
import { keyframes } from "styled-components";

const BG = styled.div`
  background-image: url(${Image});
  background-position: 30% center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const NavWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-end;
  @media ${device.tablet} {
    margin: auto 8% auto auto;
    justify-content: flex-end;
  }
`;

const slideInFromLeft = keyframes`
from {
  width: 0;
}
to {
  width: 400px;
}
`;

const TextWrapper = styled.div`
  margin: 20% 10%;
  @media ${device.tablet} {
    margin-bottom: 8%;
  }
`;

const H2 = styled.h2`
  font: bold 50px Kumbh Sans;
  padding-left: 16px;
  width: 120%;
  @media ${device.tablet} {
    // animation: ${slideInFromLeft} 0.3s linear;
    font: bold 90px Kumbh Sans;

    width: 400px;
  }
`;

const H2Dark = styled(H2)`
  background-color: #0d0b33;
  color: #fdfde5;
`;
const H2LightA = styled(H2)`
  background-color: #fdfde5;
  color: #0d0b33;
  width: 80%;
`;
const H2Light = styled(H2)`
  background-color: #fdfde5;
  color: #0d0b33;
`;

const Home = () => {
  return (
    <BG id="bg">
      <NavWrapper>
        <TextWrapper>
          <H2Dark>Hola!</H2Dark>
          <H2LightA>I'm</H2LightA>
          <H2Light>Amel</H2Light>
        </TextWrapper>
      </NavWrapper>
    </BG>
  );
};

export default Home;
