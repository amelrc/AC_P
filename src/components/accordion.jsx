import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import device from "../generalStyles";

export const Data = [
  {
    question: "Website",
    answer: ["The Side Studio", "Hidden Focus", "Blue Star Planning"],
  },
  {
    question: "Software",
    answer: ["Rubrics", "BSP"],
  },
  {
    question: "Branding",
    answer: ["Logos"],
  },
];

const AccordionSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 54px;
`;

const AccordionWrapper = styled.div`
  // position: absolute;
  width: 90%;
  // margin-top: 25%;
  // z-index: 1;
  @media ${device.tablet} {
    width: 70%;
    margin-top: 15%;
  }
`;

const AccSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  font: normal normal bold 40px/60px Kumbh Sans;
  color: #fdfde5;
  @media ${device.tablet} {
    font: normal normal bold 60px/80px Kumbh Sans;
  }
  @media ${device.small} {
    font: normal normal bold 70px/88px Kumbh Sans;
  }
`;

const AccDetails = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font: normal normal normal 30px/40px Kumbh Sans;
  color: #fdfde5;
  margin-left: 40px;
  p {
    color: #fdfde5;
    padding: 4px;
    &: hover {
      background: #fdfde5;
      color: #0d0b33;
      padding: 4px;
    }
  }
  @media ${device.tablet} {
    font: normal normal normal 40px/50px Kumbh Sans;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) =>
    clicked === index ? setClicked(null) : setClicked(index);

  return (
    <AccordionSection>
      <AccordionWrapper>
        {Data.map((item, index) => {
          return (
            <div key={index}>
              <AccSummary onClick={() => toggle(index)} key={index}>
                {item.question}
              </AccSummary>
              {clicked === index ? (
                <AccDetails>
                  {item.answer.map((a, i) => (
                    <Link
                      key={i}
                      style={{ textDecoration: "none" }}
                      to={`/${item.question.toLowerCase()}/${a
                        .replace(/\s/g, "-")
                        .toLowerCase()}`}
                    >
                      <p>{a}</p>
                    </Link>
                  ))}
                </AccDetails>
              ) : null}
            </div>
          );
        })}
      </AccordionWrapper>
    </AccordionSection>
  );
};

export default Accordion;
