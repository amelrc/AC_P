import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Links = styled(Link)`
  text-decoration: none;
  width: 100%;
  font-family: "SF UI Display Bold";
  color: transparent;
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  -webkit-text-stroke: 1.6px #230808;
  &: hover {
    color: #230808;
  }
`;

const Word = styled.a``;

const ResizableWord = ({ style, href, navitem }) => {
  const [word, setWord] = useState(navitem);

  useLayoutEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
      const resizedWord = isMobile ? word.slice(0, 1) : navitem; // Adjust the logic based on your requirements
      setWord(resizedWord);
    };

    handleResize(); // Immediately apply the resizing logic on initial mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [word]);

  return (
    <Links style={style} navitem={word} to={href}>
      {word}
    </Links>
  );
};

export default ResizableWord;
