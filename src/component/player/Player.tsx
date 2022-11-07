import React from "react";
import Header from "../header/Header";
import Control from "../control/Control";
import PlayList from "../playlist/PlayList";
import { StyledPlayer } from "./Player.styled";
import { SongModel } from "../../container/PlayerContainer";

function Player({
  songs,
  currentSong,
  handleclickSong,
  isPlaying,
  setIsPlaying,
  onClickNext,
  onClickPrev,
  onClickLoop,
  onClickRandom,
  progressValue,
  setProgressValue,
  onSeekSong,
}: {
  songs: SongModel[];
  currentSong: SongModel;
  handleclickSong: (id: number) => void;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  onClickNext: () => void;
  onClickPrev: () => void;
  onClickLoop: () => void;
  onClickRandom: () => void;
  progressValue: number;
  setProgressValue: React.Dispatch<React.SetStateAction<number>>;
  onSeekSong: (value: number) => void;
}) {
  return (
    <StyledPlayer>
      <Header currentSong={currentSong} />
      <Control
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        onClickNext={onClickNext}
        onClickPrev={onClickPrev}
        onClickLoop={onClickLoop}
        onClickRandom={onClickRandom}
        progressValue={progressValue}
        setProgressValue={setProgressValue}
        onSeekSong={onSeekSong}
      />
      <PlayList handleClickSong={handleclickSong} songs={songs} />
    </StyledPlayer>
  );
}

export default Player;
