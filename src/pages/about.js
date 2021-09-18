import styled from "styled-components";
import React, { useRef } from "react";
import { MenuWrapper } from "../pages/menu";
import AboutImage from "../images/about.JPG";
import { device } from "../generalStyles";

export const TextWrapper = styled.div`
  font-family: Kumbh Sans;
  color: #fdfde5;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 4%;
  padding: 100px 0;
  max-width: 700px;
  h1 {
    font: 60px Kumbh Sans;
    color: #fdfde5;
    margin: auto 16% 16%;
  }
  h3 {
    font-weight: bold;
    font-size: 40px;
    margin: 8%;
  }
  p {
    font: 20px/36px Kumbh Sans;
    margin: 4% 8%;
  }
  input {
    font: 20px/36px Kumbh Sans;
    margin: 4% 8%;
  }
  @media ${device.tablet} {
    width: 60%;
    margin-right: 10%;
    padding-top: 140px;
  }
  @media ${device.laptopV} {
    width: 50%;
    margin-right: 16%;
    padding-top: 140px;
  }
`;

const About = () => {
  const textAreaRef = useRef(null);

  const copyToClipboard = () => {
    textAreaRef.current.select();
    document.execCommand("copy");
  };

  return (
    <MenuWrapper>
      <TextWrapper style={{ width: "100%" }}>
        <h1>I design & build digital products</h1>
        <img width="96%" src={AboutImage} alt="yo" />
        <h3>About</h3>
        <p style={{ fontWeight: "bold" }}>
          Hi, I’m Amel. I'm a multi-talented individual with over 10+ years of
          experiences in wide range of disciplines.
        </p>
        <p>
          From fine arts to design to programming, I've traversed between
          graphic desing, UI, UX; painting the net through making software and
          web applications. Apart from being a multi-disciplinary maker, I'm an
          advisor, entrepreneur, front-end developer, sea live protector,
          traveler, and more.
        </p>
        <p>
          I don’t like to define myself by the work I’ve done. I define myself
          by the work I want to do. I prefer to keep learning, continue
          challenging myself, and do interesting things that matter.
        </p>
        <p>
          Fueled by the good in people, I’m easily inspired, passionate,
          expressive, multi-talented spirit with a natural ability to entertain
          and inspire. I’m never satisfied to just come up with ideas. Instead I
          have an almost impulsive need to act on them.
        </p>
        <input
          ref={textAreaRef}
          value="amelrc@gmail.com"
          onClick={copyToClipboard}
        />
      </TextWrapper>
    </MenuWrapper>
  );
};

export default About;
