import { StyledControl } from "./Control.styled";
import {
  BtnRepeat,
  BtnPrev,
  BtnNext,
  BtnRandom,
  RepeatIcon,
  PrevIcon,
  PauseIcon,
  PlayIcon,
  NextIcon,
  RandomIcon,
  ProgressContain,
  ControlBtn,
  BtnControlPlay,
} from "./Control.styled";
import { SongModel } from "../../container/PlayerContainer";

const Control: React.FC<{
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  onClickNext: () => void;
  onClickPrev: () => void;
  
}> = ({ isPlaying, setIsPlaying, onClickNext, onClickPrev }) => {
  return (
    <StyledControl>
      <ControlBtn>
        <BtnRepeat>
          <RepeatIcon />
        </BtnRepeat>
        <BtnPrev onClick={()=> onClickPrev()}>
          <PrevIcon />
        </BtnPrev>
        <BtnControlPlay onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </BtnControlPlay>
        <BtnNext onClick={() => onClickNext()}>
          <NextIcon />
        </BtnNext>
        <BtnRandom>
          <RandomIcon />
        </BtnRandom>
      </ControlBtn>
      <ProgressContain>
        <input
          id="progress"
          type="range"
          // value="0"
          step="1"
          min="0"
          max="100"
        />
        <audio id="audio" src=""></audio>
      </ProgressContain>
    </StyledControl>
  );
};
export default Control;
