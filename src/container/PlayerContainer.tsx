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
    name: "Fade-NCS Release",
    author: "Alan Walker",
    url: "https://cdn.discordapp.com/attachments/775740994595323954/775741536591806484/Alan_Walker_-_Fade_NCS_ReleaseMP3_160K.mp3",
    id: 1,
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
    name: "She-NCS Release",
    author: "Andromedik",
    url: "https://cdn.discordapp.com/attachments/775740994595323954/775741544149549096/Andromedik_-_SHE_NCS_ReleaseMP3_160K.mp3",
    id: 2,
    links: {
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5eb37db62ee361f796bef5b49a6",
        },
        {
          url: "https://i.scdn.co/image/ab67616d0000b2737b8d8ca1a8e14506c8f35233",
        },
      ],
    },
  },
  {
    name: "About you-NCS Release",
    author: "Ascence",
    url: "https://cdn.discordapp.com/attachments/775740994595323954/775741547203002389/Ascence_-_About_You_NCS_ReleaseMP3_160K.mp3",
    id: 3,
    links: {
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5eb6e50f29c671af8aff68b321d",
        },
        {
          url: "https://i.scdn.co/image/ab67616d0000b27335ca35166aba974dd2dd29a2",
        },
      ],
    },
  },
  {
    name: "On & On (feat. Daniel Levi) [NCS Release]",
    author: "Cartoon",
    url: "https://cdn.discordapp.com/attachments/775740994595323954/775741549177995264/Cartoon_-_On___On_feat._Daniel_Levi_NCS_ReleaseMP3_160K.mp3",
    id: 4,
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
  {
    name: "Castle [NCS Release]",
    author: "Clarx & Harddope",
    url: "https://cdn.discordapp.com/attachments/775740994595323954/775741580619284540/Clarx___Harddope_-_Castle_NCS_ReleaseMP3_160K.mp3",
    id: 5,
    links: {
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5eb015af0621865cd5cd5046c2c",
        },
        {
          url: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
        },
      ],
    },
  },
  {
    name: "Invincible [NCS Release]",
    author: "DEAF KEV ",
    url: "https://cdn.discordapp.com/attachments/775740994595323954/775741667210035220/DEAF_KEV_-_Invincible_NCS_ReleaseMP3_160K.mp3",
    id: 6,
    links: {
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5eb33b1cf2b7b544840b727865b",
        },
        {
          url: "https://i.scdn.co/image/ab67616d0000b27362a57823eced1cb4fd93b2c1",
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
  const [isLooping, setIsLooping] = useState<boolean>(false);
  const [progressValue, setProgressValue] = useState<number>(0);

  const songRef = useRef<undefined | HTMLAudioElement>();
  const cdThumbRef = useRef<HTMLImageElement | null>(null);

  // handle rotate CD thumb
  useEffect(() => {
    if (!cdThumbRef.current) return;
    // create animated for CD thumb
    const CD = cdThumbRef.current.animate([{ transform: "rotate(360deg)" }], {
      duration: 15000,
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
      const nextSong = songs[Math.floor(Math.random() * songs.length)];
      setCurrentSong(nextSong);
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
      setProgressValue(timePercentage);
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
    const song = songs.find((song) => song.id === id);
    if (!song) return;
    // if there has previous song existing -> pause it!
    songRef.current?.pause();
    // set current song to the new song, then play it
    setCurrentSong(song);
    setIsPlaying(true);
    setProgressValue(0);
  };

  // handle click Next button
  const handleClickNext = () => {
    const nextSong = songs.find((song) => song.id === currentSong.id + 1);
    // if there has no song existing -> pause previous song then set
    // next song is the first song
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
      setIsLooping(true);
      setIsRandom(false);
      return (songRef.current.loop = true);
    }
    setIsLooping(false);
    songRef.current.loop = false;
  };

  // handle click random song
  const handleClickRandom = () => {
    if (!songRef.current) return;
    if (isRandom === true) {
      setIsRandom(false);
      return;
    }
    setIsRandom(true);
    setIsLooping(false);
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
      cdThumbRef={cdThumbRef}
      isLooping={isLooping}
      isRandom={isRandom}
    />
  );
};

export default PlayerContainer;
