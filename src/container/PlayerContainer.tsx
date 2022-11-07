import React, { useState, useEffect, useRef } from "react";
import Player from "../component/player/Player";

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
const initialSongs = [
  {
    name: "Sing me to sleep",
    author: "Alan Walker",
    url: "https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3",
    id: 0,
    links: {
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576",
        },
        {
          url: "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a",
        },
      ],
    },
  },

  {
    name: "On & On (feat. Daniel Levi) [NCS Release]",
    author: "Cartoon",
    url: "https://cdn.discordapp.com/attachments/775740994595323954/775741549177995264/Cartoon_-_On___On_feat._Daniel_Levi_NCS_ReleaseMP3_160K.mp3",
    id: 1,
    links: {
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5eb65d82d90b55b4dd3cbb2efd2",
        },
        {
          url: "https://i.scdn.co/image/ab67616d0000b273d2aaf635815c265aa1ecdecc",
        },
      ],
    },
  },
];

const PlayerContainer: React.FC = () => {
  const initialValue = JSON.parse(JSON.stringify(initialSongs));

  const [songs, setSongs] = useState<SongModel[]>(initialValue);
  const [currentSong, setCurrentSong] = useState<SongModel>(initialValue[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isRandom, setIsRandom] = useState<boolean>(false);
  const [progressValue, setProgressValue] = useState<number>(0);

  const songRef = useRef<undefined | HTMLAudioElement>();

  // handle when current song is changed
  useEffect(() => {
    songRef.current = new Audio(currentSong.url);
    if (!songRef.current) return;
    if (!isPlaying) {
      songRef.current?.pause();
      return;
    }
    songRef.current?.play();
  }, [currentSong, isPlaying]);

  // handle click play button
  useEffect(() => {
    if (!isPlaying) {
      songRef.current?.pause();
      return;
    }
    songRef.current?.play();
  }, [isPlaying]);

  // handle auto next song
  useEffect(() => {
    if (!songRef.current) return;
    songRef.current.addEventListener("ended", () => {
      if (!isRandom) {
        handleClickNext();
        return;
      }
      const nextSong = songs[Math.floor(Math.random() * songs.length)];
      setCurrentSong(nextSong);
    });
    return () => {
      songRef.current?.removeEventListener("ended", () => {
        return;
      });
    };
  });

  // handle render progress bar value
  useEffect(() => {
    if (!songRef.current) return;
    songRef.current.addEventListener("timeupdate", () => {
      if (!songRef.current) return 0;
      const timePercentage = Math.floor(
        (songRef.current.currentTime / songRef.current.duration) * 100
      );
      if (!timePercentage) return;
      setProgressValue(timePercentage);
    });
  });

  // handle click another song
  const handleclickSong = (id: number) => {
    const song = songs.find((song) => song.id === id);
    if (!song) return;
    songRef.current?.pause();
    setCurrentSong(song);
    setIsPlaying(true);
  };

  // handle click Next button
  const handleClickNext = () => {
    const nextSong = songs.find((song) => song.id === currentSong.id + 1);
    if (!nextSong) {
      songRef.current?.pause();
      setCurrentSong(initialValue[0]);
      return;
    }
    songRef.current?.pause();
    setCurrentSong(nextSong);
    setIsPlaying(true);
  };

  // handle click Prev button
  const handleClickPrev = () => {
    const prevSong = songs.find((song) => song.id === currentSong.id - 1);
    if (!prevSong) {
      songRef.current?.pause();
      setCurrentSong(initialValue[initialValue.length - 1]);
      return;
    }
    songRef.current?.pause();
    setCurrentSong(prevSong);
    setIsPlaying(true);
  };

  // handle click loop button
  const handleClickLoop = () => {
    if (!songRef.current) return;
    if (!songRef.current.loop) {
      return (songRef.current.loop = true);
    }
    songRef.current.loop = false;
  };

  // handle click random song
  const handleClickRandom = () => {
    if (!songRef.current) return;
    setIsRandom(!isRandom);
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
      songs={songs}
      currentSong={currentSong}
      handleclickSong={handleclickSong}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      onClickNext={handleClickNext}
      onClickPrev={handleClickPrev}
      onClickLoop={handleClickLoop}
      onClickRandom={handleClickRandom}
      progressValue={progressValue}
      setProgressValue={setProgressValue}
      onSeekSong={handleSeekSong}
    />
  );
};

export default PlayerContainer;
