import device, { TextWrapper } from "../generalStyles";
import styled from "styled-components";
import img_rubrics from "../assets/RUB/rubrics.png";

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 10% 0;
`;

const Rubrics = () => {
  return (
    <div>
      <TextWrapper>
        <h3>RUBRICS</h3>
        <h5
          style={{ color: "#9a9a9a", fontWeight: "normal", margin: "16px 0" }}
        >
          Grading System App
        </h5>
        <br />
        <p>
          Leon van Gelder is a High-school in Groningen that uses a grading
          system based on rubrics. This means students review each other’s
          skills instead of the ordinary grading system.
        </p>
        <br />
        <p>
          The app had a really basic layout and was not user-friendly. My job
          was to program the UI in pure vanilla javascript. The app is optimised
          for the Microsoft Surface Go which was the device used by all school
          personnel.
        </p>
      </TextWrapper>

      <div>
        <ImageWrapper>
          <img width="120%" src={img_rubrics} alt="desktop" />
        </ImageWrapper>
      </div>
    </div>
  );
};

export default Rubrics;
