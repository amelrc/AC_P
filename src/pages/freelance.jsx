import { TextWrapper, device } from "../generalStyles";
import styled from "styled-components";
import { InfoWrapper } from "./bspSoftware";
import TSS_1 from "../images/assets/TSS/TSS Landing Page Desktoptss.png";
import TSS_2 from "../images/assets/TSS/TSS Project Page Desktotss.png";
import HF_1 from "../images/assets/HF/HF_1.png";
import HF_2 from "../images/assets/HF/HF_2.png";
import Font from "../images/assets/HF/HF_Font.png";
import Colors from "../images/assets/HF/HF_colors.png";
import Influences from "../images/assets/HF/Influences.svg";
import StudiateLogin from "../images/assets/STUDIATE/Studiate_Login.png";

const Title = styled.h2`
  font: bold 24px kumbh Sans;
  color: #0d0b33;
`;

const FontColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 100%;
  margin: 40px 0;
`;

const Freelance = () => {
  return (
    <div>
      <TextWrapper>
        <h3>Freelance</h3>
        <h5
          style={{ color: "#9a9a9a", fontWeight: "normal", margin: "16px 0" }}
        >
          Selected Projects
        </h5>
        <br />
        <p>
          This is a selection of projects I have worked in the past decade. As a
          self-employed designer I had a chance to meet and work with very
          talented people. These projects are mostly start-ups companies, where
          I was being challenged to build the right features for the right
          users. I've grown as designer and developer, by researching, advising,
          consulting people to bring their product alive.
        </p>
      </TextWrapper>
      {/* //// */}
      <InfoWrapper>
        <Title>TheSideStudio</Title>
        <br />
        <p>
          TheSideStudio provides solutions and assistance with a wide range of
          projects varying from creative direction, art direction,
          cinematography, 3D design & animation, concept creation, VFX and
          illustration. It focus and specialize on product visualization, 3D
          models, simulations and interactive experiences for media platforms,
          film and live events.
        </p>

        <div style={{ padding: "8% 0" }}>
          <img
            style={{ border: "1px solid lightgrey", width: "100%" }}
            src={TSS_1}
            alt="TSS_Landing"
          />
          <img
            style={{ border: "1px solid lightgrey", width: "100%" }}
            src={TSS_2}
            alt="TSS_Project"
          />
        </div>
      </InfoWrapper>
      <InfoWrapper>
        <Title>Hidden Focus</Title>
        <br />
        <p>
          TheSideStudio provides solutions and assistance with a wide range of
          projects varying from creative direction, art direction,
          cinematography, 3D design & animation, concept creation, VFX and
          illustration. It focus and specialize on product visualization, 3D
          models, simulations and interactive experiences for media platforms,
          film and live events.
        </p>
        <div style={{ padding: "8% 0" }}>
          <FontColorWrapper>
            <div>
              <img width="100%" src={Font} alt="font" />
            </div>
            <div>
              <img width="100%" src={Colors} alt="colors" />
            </div>
          </FontColorWrapper>

          <FontColorWrapper>
            <div style={{ margin: "0 40px" }}>
              <Image width="100%" src={HF_1} alt="TSS_Landing" />
            </div>
            <div style={{ margin: "0 40px" }}>
              <Image width="100%" src={HF_2} alt="TSS_Project" />
            </div>
          </FontColorWrapper>
          <Image width="100%" src={Influences} alt="TSS_Landing" />
        </div>
      </InfoWrapper>
      <InfoWrapper>
        <Title>Studiate</Title>
        <br />
        <p>
          Studiate takes care of scheduling, invoicing, payments, and
          bookkeeping for teachers. It allows teachers to set their availability
          and students to make appointments in teacher's available timeslots
          while permiting to schedule and re-schedule students while
          simultaneously notifying them.
        </p>
        <Image width="100%" src={StudiateLogin} alt="TSS_Landing" />
      </InfoWrapper>
    </div>
  );
};

export default Freelance;
