import {
  StyledSong,
  SongThumb,
  SongBody,
  SongOption,
  OptionIcon,
  SongComposor,
} from "./Song.styled";
import { SongModel } from "../../container/PlayerContainer";

interface SongProps {
  song: SongModel;
  handleClickSong: (id: number) => void;
}
const Song: React.FC<SongProps> = ({ song, handleClickSong }) => {
  const { images } = song.links;
  return (
    <StyledSong>
      <SongBody onClick={()=> handleClickSong(song.id)}>
        <audio src={song.url} />
        <SongThumb src={images.length > 0 ? images[0].url : ""} />
        <SongComposor>
          <h3>{song.name}</h3>
          <p>{song.author}</p>
        </SongComposor>
        <SongOption>
          <OptionIcon />
        </SongOption>
      </SongBody>
    </StyledSong>
  );
};
export default Song;
