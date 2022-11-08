import { SongModel } from "../../container/PlayerContainer";
import {
  StyledHeader,
  StyledCD,
  StyledCDThumb,
  HeaderContainer,
} from "./Header.styled";

const Header: React.FC<{
  currentSong: SongModel;
  cdThumbRef: React.MutableRefObject<HTMLImageElement | null>;
}> = ({ currentSong, cdThumbRef }) => {
  const images = currentSong.links.images;
  return (
    <HeaderContainer>
      <StyledHeader>
        <h4>Now playing:</h4>
        <h2>{currentSong.name}</h2>
      </StyledHeader>
      <StyledCD>
        <StyledCDThumb >
          <img src={images[0].url} alt="img" ref={cdThumbRef} />
        </StyledCDThumb>
      </StyledCD>
    </HeaderContainer>
  );
};
export default Header;
