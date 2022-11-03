import styled from "styled-components";
import { FaEllipsisH } from "react-icons/fa";

export const StyledSong = styled.div<{active?: boolean}>`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 12px; */
  padding: 0 16px;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => (props.active ? "#ec1f55" : "#fff")};
  background-color: #f5f5f5;
  opacity: ${(props) => (props.active ? "0.8" : "none")};
`;
export const SongThumb = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-size: cover;
  margin: 6px 8px;
  background-image: url("https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg");
`;
export const SongBody = styled.div`
  display: inline-flex;
  margin-top: 20px;
  background-color: #fff;
  box-shadow: 3px 3px 1px 1px #d7d1d1;
`;
export const SongComposor = styled.div`
  flex: 1;
  padding: 8px 16px;
  & h3 {
    font-size: 18px;
  }
  & p {
    font-size: 12px;
    color: #999;
  }
`;
export const SongOption = styled.div`
  padding: 16px 8px;
  color: #999;
  font-size: 18px;
`;
export const OptionIcon = styled(FaEllipsisH)``;
