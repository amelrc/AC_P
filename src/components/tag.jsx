import styled from "styled-components";

const TextWrapper = styled.div`
  ${(props) => `background-color: ${props.bgColor};`}
  width: 100%;
  height: 20px;
  font: bold 14px/12px Kumbh Sans;
  color: #fdfde5;
  border-radius: 12px;
  text-indent: 2px;
  padding: 2px;
  div {
    padding: 4px;
  }
`;

const Tag = ({ word, bgColor }) => {
  return (
    <div style={{ margin: 4 }}>
      <TextWrapper bgColor={bgColor}>
        <div>{word}</div>
      </TextWrapper>
    </div>
  );
};

export default Tag;
