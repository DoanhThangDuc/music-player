import React from "react";
import { StyledPlaylist } from "./PlayList.styled";
import Song from "../song/Song";
import { SongModel } from "../../container/PlayerContainer";

function PlayList({
  songs,
  handleClickSong,
}: {
  songs: SongModel[];
  handleClickSong: (id: number) => void;
}) {
  return (
    <StyledPlaylist>
      {songs.map((song) => {
        return (
          <Song key={song.id} song={song} handleClickSong={handleClickSong} />
        );
      })}
    </StyledPlaylist>
  );
}

export default PlayList;
