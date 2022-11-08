import styled, { css } from "styled-components";
import {
  FaRedo,
  FaStepBackward,
  FaPause,
  FaPlay,
  FaStepForward,
  FaRandom,
} from "react-icons/fa";

export const StyledControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 18px 0 8px 0;
`;
export const ProgressContain = styled.div`
  width: 80%;
  & input {
    width: 100%;
    -webkit-appearance: none;
    height: 10px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    cursor: pointer;
  }
`;
export const ProgressBar = styled.input``;

export const ControlBtn = styled.div`
  display: inline-flex;
  justify-content: space-between;
`;
export const BtnRepeat = styled.div<{ isLooping: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.isLooping ? "blue" : "#666")};
  padding: 18px;
  font-size: 18px;
`;
export const RepeatIcon = styled(FaRedo)``;
export const BtnPrev = styled.div`
  cursor: pointer;
  color: #666;
  padding: 18px;
  font-size: 18px;
`;
export const PrevIcon = styled(FaStepBackward)``;

export const BtnTogglePlay = styled.div`
  cursor: pointer;
  color: #666;
  padding: 18px;
  font-size: 18px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
`;

export const PauseIcon = styled(FaPause)`
  display: "block";
`;
export const PlayIcon = styled(FaPlay)`
  display: "block";
`;

export const BtnNext = styled.div`
  cursor: pointer;
  color: #666;
  padding: 18px;
  font-size: 18px;
`;
export const NextIcon = styled(FaStepForward)``;

export const BtnRandom = styled.div<{ isRandom: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.isRandom ? "blue" : "#666")};
  padding: 18px;
  font-size: 18px;
`;
export const RandomIcon = styled(FaRandom)``;
export const BtnControlPlay = styled.div`
  cursor: pointer;
  color: #666;
  padding: 18px;
  font-size: 18px;
`;
