import MemojiMe from "../images/Memoji.svg";
import styled from "styled-components";
import { device } from "../generalStyles";
import { keyframes } from "styled-components";

const TextWrapper = styled.div``;

const H1 = styled.h1`
  font-family: "SF UI Display Bold";
  font-weight: 600;
  font-size: 20px;
  line-height: 5rem;
  text-align: center;
`;

const P1 = styled.p`
  font-family: "SF UI Display Thin";
  font-weight: 200;
  font-size: 3rem;

  text-align: center;
`;
const P2 = styled.p`
  font-family: "Roxborough Thin";
  font-size: 4rem;

  text-align: center;
`;
const P3 = styled.p`
  font-family: "Roxborough Bold";
  font-size: 8rem;
  line-height: 2rem;
  mix-blend-mode: hard-light;
  color: transparent;
  -webkit-text-stroke: 1px #bd00ff;
  text-align: center;
`;
const P4 = styled.p`
  font-family: "SF UI Display Light";
  font-weight: 600;
  font-size: 4rem;
  text-align: center;
`;

const MemojiWrapper = styled.div`
  clip-path: ellipse(40% 42% at 50% 50%);
  background: linear-gradient(240.24deg, #c1c5ce 19.65%, #dee1e8 74.2%);
  // transform: rotate(-31.78deg);
  width: 200px;
  height: 232px;
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

// const TextWrapper = styled.div`
//   margin: 20% 10%;
//   @media ${device.tablet} {
//     margin-bottom: 8%;
//   }
// `;

const H2 = styled.h2`
  font-family: "Roxborough Thin";
  padding-left: 16px;
  width: 120%;
  @media ${device.tablet} {
    // animation: ${slideInFromLeft} 0.3s linear;
    // font: bold 90px Kumbh Sans;

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
    <div id="bg">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ color: "#36003A" }}>
          <H1>Full Stack Designer</H1>
          <P1>Intersecting</P1>
          <P2>Aesthetics</P2>
          <P3>&</P3>
          <P4>Functionality</P4>
        </div>
        <img src={MemojiMe} width={"50%"} alt="memoji of myself" />
      </div>

      <NavWrapper>
        <TextWrapper>
          <H2Dark>Hola!</H2Dark>
          <H2LightA>I'm</H2LightA>
          <H2Light>Amel</H2Light>
        </TextWrapper>
      </NavWrapper>
    </div>
  );
};

export default Home;
