import styled from "styled-components";

const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #0d0b33;
  border-top: solid 1px #fdfde5;
  &:hover {
    background-color: #0d0b33;
  }
`;
const Tab = styled.p`
  font: normal normal bold 22px/22px Kumbh Sans;
  color: #fdfde5;
  margin: 12px auto;
`;

const TabNav = ({ text }) => {
  return (
    <TabWrapper>
      <Tab>{text}</Tab>
    </TabWrapper>
  );
};

export default TabNav;
