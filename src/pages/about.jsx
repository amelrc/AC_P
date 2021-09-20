import styled from "styled-components";
import React, { useRef } from "react";
import { MenuWrapper } from "../pages/menu";
import AboutImage from "../images/about.JPG";
import { device } from "../generalStyles";
import Tag from "../components/tag";

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
  const designTools = [
    "Adobe CC",
    "Sketch",
    "Figma",
    "Abstract",
    "Framer",
    "Whimsical",
  ];
  const programmingTools = [
    "HTML",
    "CSS",
    "JavasScript",
    "React",
    "Vue",
    "Typescript",
    "NextJS",
    "JSS",
    "Material UI",
    "BEM",
    "Sass",
  ];

  return (
    <MenuWrapper>
      <TextWrapper style={{ width: "100%" }}>
        <h1>I design & build digital products</h1>
        <img width="96%" src={AboutImage} alt="yo" />
        <h3>About</h3>
        <p style={{ fontWeight: "bold" }}>
          Hi, I’m Amel – a multi-talented individual with over 10+ years of
          experiences in wide range of disciplines.
        </p>
        <p>
          From fine arts to design to programming, I've traversed from sculpture
          and painting, to graphic design, UI and UX, to developing software and
          web applications. Apart from being a multi-disciplinary creator, I'm
          an advisor, entrepreneur, and front-end developer with interests in
          sea life protection, travelling, and so much more.
        </p>
        <p>
          I don’t like to define myself by the work I’ve done. I define myself
          by the work I want to do. I have a desire to learn continuously
          through new challenges and do interesting things that matter.
        </p>
        <p>
          Fuelled by the good in people, I’m easily inspired, passionate and
          expressive with a natural ability to entertain and motivate. I’m never
          satisfied with ideas alone, instead I have an impulsive need to act on
          them.
        </p>
        <p>These are the tools I got with me:</p>
        <div style={{ display: "flex", flexWrap: "wrap", margin: "4% 8%" }}>
          {designTools.map((el, i) => (
            <Tag key={i} word={el} bgColor={"#9398ff"} />
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", margin: "4% 8%" }}>
          {programmingTools.map((el, i) => (
            <Tag key={i} word={el} bgColor={"#ff3b6d"} />
          ))}
        </div>
      </TextWrapper>
    </MenuWrapper>
  );
};

export default About;
