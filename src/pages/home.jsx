import MemojiMe from "../images/Memoji.svg";
import ScrollArrow from "../images/Scroll_Arrow.svg";
import styled from "styled-components";
import { device } from "../generalStyles";
import { keyframes } from "styled-components";

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
`;

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

const Memoji = styled.img`
  width: 50%;
  max-width: 200px;
`;

const Text = styled.p`
  font-family: "SF UI Display Thin";
  font-size: 1rem;
  line-height: 19px;
  color: #230808;
`;

const Home = () => {
  return (
    <div>
      <TextWrapper>
        <div style={{ color: "#36003A" }}>
          <H1>Full Stack Designer</H1>
          <P1>Intersecting</P1>
          <P2>Aesthetics</P2>
          <P3>&</P3>
          <P4>Functionality</P4>
        </div>
        <Memoji src={MemojiMe} alt="memoji of myself" />
      </TextWrapper>
      <Text>
        Based in The Netherlands but working worldwide. partnering with local
        and international clients that value design just as much as I do.
      </Text>
      {/* <img src={ScrollArrow} alt="arrow indicating to scroll down" /> */}
    </div>
  );
};

export default Home;
