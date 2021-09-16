import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopM: "1366px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptopV: `(min-width: ${size.laptop})`,
  laptopH: `(max-width: ${size.laptop})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
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
  max-width: 700px;
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
  @media ${device.laptopV} {
    width: 50%;
    margin-right: 16%;
    padding-top: 140px;
  }
`;
