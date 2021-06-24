import styled from "styled-components";

const TextWrapper = styled.div`
  background-color: #9398ff;
  width: 20px;
  height: 20px;
  font: bold 14px/12px Kumbh Sans;
  color: #fdfde5;
  transition: width 0.5s ease-in-out;
  border-radius: 12px;
  display: flex;
  align-items: center;
  text-indent: 2px;
  padding: 2px;
  position: absolute;
  right: 0;
  &:hover {
    width: 102px;
    span {
      color: #fff;
    }
  }
  span {
    color: transparent;
  }
  p {
    margin-top: 2px;
    padding: 4px;
  }
`;

const Tag = ({ initial, rest }) => {
  return (
    <div style={{ position: 'relative', height: 30 }}>
      <TextWrapper>
        <p>{initial}<span>{rest}</span></p>
      </TextWrapper>
    </div>
  );
};

export default Tag;
