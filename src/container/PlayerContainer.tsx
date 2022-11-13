import React, {  useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Player from "../component/player/Player";
import { populateSongs, setCurrentSong } from "../features/songsSlice";
import {
  setIsLooping,
  setIsPlaying,
  setIsRandom,
  setProgressValue,
} from "../features/actionsSlice";
import { RootState } from "../store";

export interface SongModel {
  name: string;
  author: string;
  url: string;
  id: number;
  links: {
    images: [
      {
        url: string;
      },
      {
        url: string;
      }
    ];
  };
}

const PlayerContainer: React.FC = () => {
  const dispatch = useDispatch();

  const songState = useSelector((state: RootState) => state.songs);
  const songRef = useRef<undefined | HTMLAudioElement>();
  const cdThumbRef = useRef<HTMLImageElement | null>(null);

  const { currentSong, listSongs } = songState;

  const isRandom = useSelector((state: RootState) => state.actions.isRandom);
  const isLooping = useSelector((state: RootState) => state.actions.isLooping);
  const isPlaying = useSelector((state: RootState) => state.actions.isPlaying);
  
  const progressValue = useSelector(
    (state: RootState) => state.actions.progressValue
  );
  useEffect(() => {
    dispatch(populateSongs());
  }, []);

  // handle rotate CD thumb
  useEffect(() => {
    if (!cdThumbRef.current) return;
    // create animated for CD thumb
    const CD = cdThumbRef.current.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000,
      iterations: Infinity,
    });
    // if the song is not playing
    if (isPlaying === false) {
      CD.pause();
      return;
    }
    // if the song is playing
    CD.play();
    return () => {
      CD.pause();
    };
  }, [isPlaying]);

  // handle when current song is changed
  useEffect(() => {
    // create a new audio
    songRef.current = new Audio(currentSong.url);
    if (!songRef.current) return;
    // if set playing becomes false -> pause it
    if (!isPlaying) {
      songRef.current.pause();
      return;
    }
    songRef.current.play();
  }, [currentSong]);

  // handle click play button
  useEffect(() => {
    if (!songRef.current) return;
    // if set playing becomes false -> pause song
    if (isPlaying === false) {
      songRef.current.pause();
      return;
    }
    // if set playing becomes true -> play
    songRef.current.play();
  }, [isPlaying]);

  // handle auto next song
  useEffect(() => {
    if (!songRef.current) return;
    // when the audio ends, if there has no random setting -> next song
    songRef.current.addEventListener("ended", () => {
      if (!isRandom) {
        handleClickNext();
        return;
      }
      // when the audio ends, if there has random setting -> random song
      const nextSong = listSongs[Math.floor(Math.random() * listSongs.length)];
      dispatch(setCurrentSong(nextSong));
    });
    // remove event when unmount
    return () => {
      songRef.current?.removeEventListener("ended", () => {
        return;
      });
    };
  });

  // handle render progress bar value
  useEffect(() => {
    if (!songRef.current) return;
    // add event time update when the audio is playing -> set it
    // to progress bar value
    songRef.current.addEventListener("timeupdate", () => {
      if (!songRef.current) return 0;
      const timePercentage = Math.floor(
        (songRef.current.currentTime / songRef.current.duration) * 100
      );
      if (!timePercentage) return;
      dispatch(setProgressValue(timePercentage));
    });
    // remove progress bar event when unmount
    return () => {
      songRef.current?.removeEventListener("timeupdate", () => {
        return;
      });
    };
  });

  // handle click another song
  const handleclickSong = (id: number) => {
    const song = listSongs.find((song) => song.id === id);
    if (!song) return;
    // if there has previous song existing -> pause it!
    songRef.current?.pause();
    // set current song to the new song, then play it
    dispatch(setCurrentSong(song));
    dispatch(setIsPlaying(true));
    dispatch(setProgressValue(0));
  };

  // handle click Next button
  const handleClickNext = () => {
    const nextSong = listSongs.find((song) => song.id === currentSong.id + 1);
    // if there has no song existing -> pause previous song then set
    // next song is the first song
    if (!nextSong) {
      songRef.current?.pause();
      dispatch(setCurrentSong(listSongs[0]));
      return;
    }
    songRef.current?.pause();
    dispatch(setCurrentSong(nextSong));
    dispatch(setIsPlaying(true));
  };

  // handle click Prev button
  const handleClickPrev = () => {
    const prevSong = listSongs.find((song) => song.id === currentSong.id - 1);
    if (!prevSong) {
      songRef.current?.pause();
      dispatch(setCurrentSong(listSongs[listSongs.length - 1]));
      return;
    }
    songRef.current?.pause();
    dispatch(setCurrentSong(prevSong));
    dispatch(setIsPlaying(true));
  };

  // handle click loop button
  const handleClickLoop = () => {
    if (!songRef.current) return;
    if (!songRef.current.loop) {
      dispatch(setIsLooping(true));
      dispatch(setIsRandom(false));
      return (songRef.current.loop = true);
    }
    dispatch(setIsLooping(false));
    songRef.current.loop = false;
  };

  // handle click random song
  const handleClickRandom = () => {
    if (!songRef.current) return;
    if (isRandom === true) {
      dispatch(setIsRandom(false));
      return;
    }
    dispatch(setIsRandom(true));
    dispatch(setIsLooping(false));
  };

  // handle seek song
  const handleSeekSong = (value: number) => {
    if (!songRef.current) return;
    songRef.current.currentTime = Math.floor(
      (value * songRef.current.duration) / 100
    );
  };

  return (
    <Player
      songs={listSongs}
      currentSong={currentSong}
      handleclickSong={handleclickSong}
      isPlaying={isPlaying}
      setIsPlaying={(value: boolean) => dispatch(setIsPlaying(value))}
      onClickNext={handleClickNext}
      onClickPrev={handleClickPrev}
      onClickLoop={handleClickLoop}
      onClickRandom={handleClickRandom}
      progressValue={progressValue}
      setProgressValue={(value: number) => dispatch(setProgressValue(value))}
      onSeekSong={handleSeekSong}
      cdThumbRef={cdThumbRef}
      isLooping={isLooping}
      isRandom={isRandom}
    />
  );
};

export default PlayerContainer;
