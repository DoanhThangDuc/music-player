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
  isLooping: boolean;
  isRandom: boolean;
}> = ({
  isPlaying,
  setIsPlaying,
  onClickNext,
  onClickPrev,
  onClickLoop,
  onClickRandom,
  progressValue,
  onSeekSong,
  isLooping,
  isRandom,
}) => {
  return (
    <StyledControl>
      <ControlBtn>
        <BtnRepeat onClick={() => onClickLoop()} isLooping={isLooping}>
          <RepeatIcon />
        </BtnRepeat>
        <BtnPrev onClick={() => onClickPrev()} >
          <PrevIcon />
        </BtnPrev>
        <BtnControlPlay onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </BtnControlPlay>
        <BtnNext onClick={() => onClickNext()}>
          <NextIcon />
        </BtnNext>
        <BtnRandom onClick={() => onClickRandom()} isRandom={isRandom}>
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
