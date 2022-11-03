import styled from "styled-components";

export const StyledHeader = styled.div`
  text-align: center;
  margin-bottom: 10px;
  & h4 {
    color: #ec1f55;
    font-size: 12px;
  }
  & h2 {
    color: #333;
    font-size: 20px;
  }
`;
export const StyledCD = styled.div`
  display: flex;
  margin: auto;
  width: 200px;
  height: 200px;
`;
export const StyledCDThumb = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 50%;
  overflow: hidden;
  & img {
    position: absolute;
    z-index: -1;
    background: cover;
    width: 100%;
    height: 100%;
  }
`;
export const HeaderContainer = styled.div`
  height: 30%;
  padding-top: 30px;
`




