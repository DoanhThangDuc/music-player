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

const Control: React.FC<{
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  onClickNext: () => void;
  onClickPrev: () => void;
  onClickLoop: () => void;
  onClickRandom: () => void;
  progressValue: number;
  setProgressValue: React.Dispatch<React.SetStateAction<number>>;
  onSeekSong: (value: number) => void;
}> = ({
  isPlaying,
  setIsPlaying,
  onClickNext,
  onClickPrev,
  onClickLoop,
  onClickRandom,
  progressValue,
  setProgressValue,
  onSeekSong,
}) => {
  return (
    <StyledControl>
      <ControlBtn>
        <BtnRepeat onClick={() => onClickLoop()}>
          <RepeatIcon />
        </BtnRepeat>
        <BtnPrev onClick={() => onClickPrev()}>
          <PrevIcon />
        </BtnPrev>
        <BtnControlPlay onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </BtnControlPlay>
        <BtnNext onClick={() => onClickNext()}>
          <NextIcon />
        </BtnNext>
        <BtnRandom onClick={() => onClickRandom()}>
          <RandomIcon />
        </BtnRandom>
      </ControlBtn>
      <ProgressContain>
        <input
          id="progress"
          type="range"
          value={progressValue}
          step="1"
          min="0"
          max="100"
          onChange={(e) => onSeekSong(Number(e.target.value))}
        />
        <audio id="audio" src=""></audio>
      </ProgressContain>
    </StyledControl>
  );
};
export default Control;
