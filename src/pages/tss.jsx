import styled from "styled-components";
import device from "../generalStyles";
import LAPTOP from "../assets/TSS/AC_P_Laptop.svg";
import HomePage from "../assets/TSS/TSS Landing Page Desktoptss.png";
import ProjectPage from "../assets/TSS/TSS Project Page Desktotss.png";

const TextWrapper = styled.div`
  font-family: Kumbh Sans;
  color: #0d0b33;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 4%;
  padding-top: 100px;
  h3 {
    font-weight: bold;
    font-size: 24px;
  }
  p {
    font-size: 14px;
    line-height: 18px;
  }
`;

const Laptop = styled.img`
  position: sticky;
  top: 30%;
  width: 320px;
  margin: 40px auto;
  @media ${device.tablet} {
    width: calc(84% - 54px);
  }
`;

const Img = styled.img`
  width: 260px;
  margin: auto;
  @media ${device.tablet} {
    width: calc(100% - 54px);
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${Img}:nth-child(3) {
    padding-bottom: 300px;
  }
`;

const Tss = () => {
  return (
    <div>
      <TextWrapper>
        <h3>THESIDESTUDIO</h3>
        <br />
        <p>
          THESIDESTUDIO provides solutions incluiding art direction,
          cinematography, 3D design and animation, concept creation, VFX and
          illustration. It focus and specialize on product visualization, 3D
          models, simulations and interactive experiences for media platforms,
          film and live events.
        </p>
        <br />
        <p>
          My task for this project included digital art direction, UX/UI design
          with responsive interactive prototyping for the wireframe and design.
        </p>
      </TextWrapper>
      <ImageWrapper>
        <Laptop src={LAPTOP} alt="laptop frame" />
        <Img src={HomePage} alt="desktop" />
        <Img src={ProjectPage} alt="project" />
      </ImageWrapper>
    </div>
  );
};

export default Tss;
