import styled from "styled-components";

const device = {
  tablet: `(min-width: 768px)`,
  small: `(min-width: 1024px)`,
  medium: `(min-width: 1366px)`,
  large: `(min-width: 1920px)`,
};
export default device;

// export const colors = {
//   bgGreyDark: "#383e40",
//   bgGreyLight: "#f8f8f8",
//   bgContentLight: `#F67879`,
//   bgContentLightest: `#FDDAD2`,
// }

export const TextWrapper = styled.div`
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
  @media ${device.tablet} {
    width: 60%;
    margin-right: 10%;
    padding-top: 140px;
  }
  @media ${device.small} {
    width: 50%;
    margin-right: 16%;
    padding-top: 140px;
  }
`;
