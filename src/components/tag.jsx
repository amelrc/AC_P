import styled from "styled-components";

const TextWrapper = styled.div`
  background-color: #9398ff;
  width: 20px;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font: normal normal normal 12px/12px Kumbh Sans;
  color: #fdfde5;
  transition: width 2s;
  &:hover {
    width: 100px;
  }
`;

const Tag = ({ name }) => {
  return (
    <div style={{ marginTop: 200 }}>
      <TextWrapper>
        <p>Programming</p>
      </TextWrapper>
    </div>
  );
};

export default Tag;
