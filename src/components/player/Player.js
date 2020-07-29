import React from "react"
import styled from "styled-components"
import PlayerHeader from "./header/Header"
import backgroundImage from "../../images/player/bg_image.jpg"
import SongsSliderContainer from "./songs-slider/SongsSliderContainer"
import ActionButtons from "./action-buttons/ActionButtons"
import SongInfo from "./song-info/SongInfo"
import ProgressBarContainer from "./progress-bar/ProgressBarContainer"
import waveformImage from '../../images/player/waveform.png'
import NextSongInfoContainer from "./next-song-info/NextSongInfoContainer"

const StyledPlayer = styled.div`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: ${ (props) => props.theme.colors.darkViolet };
  max-width: 576px;
  margin: 0 auto;
`;
const BackgroundContainer = styled.div`
  position: absolute;
  opacity: 0.1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
const BackgroundImage = styled.img`
  filter: grayscale(100%);
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Gradient = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-image: linear-gradient(to top, ${ (props) => props.theme.colors.darkViolet }, rgba(0, 0, 0, 0));
`;
const WaveFormImage = styled.img`
  display: block;
`;

const Waveform = () => <WaveFormImage src={waveformImage} alt="Waveform"/>

const Player = ({playerState}) => {
  return(
    <StyledPlayer>
      <BackgroundContainer>
        <BackgroundImage src={backgroundImage} alt=""/>
        <Gradient />
      </BackgroundContainer>
      <PlayerHeader albumTitle={playerState.currentSong.album}/>
      <SongsSliderContainer />
      <SongInfo title={playerState.currentSong.title} artist={playerState.currentSong.artist} />
      <ActionButtons/>
      <ProgressBarContainer />
      <Waveform />
      <NextSongInfoContainer />
    </StyledPlayer>
  );
};

export default Player;
