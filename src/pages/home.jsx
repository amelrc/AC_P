import styled from "styled-components";
import Image from "../images/BG.jpg";

const BG = styled.div`
  background-image: url(${Image});
  background-position: 30% center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const NavWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Home = () => {
  return (
    <BG id="bg">
      <NavWrapper>
        <div>this is the home page</div>
      </NavWrapper>
    </BG>
  );
};

export default Home;
