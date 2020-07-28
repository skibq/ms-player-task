import React from "react"
import styled from "styled-components"
import Index from "./header"
import backgroundImage from "../../images/player/bg_image.jpg"

const StyledPlayer = styled.div`
  height: 100vh;
  position: relative;
  background-color: ${ (props) => props.theme.colors.darkViolet };
`;

const BackgroundContainer = styled.div`
  position: absolute;
  opacity: 0.1;
`;

const BackgroundImage = styled.img`
  filter: grayscale(100%);
  max-width: 100%;
  width: 100%;
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

const Player = ({playerState}) => {
  return(
    <StyledPlayer>
      <BackgroundContainer>
        <BackgroundImage src={backgroundImage} alt=""/>
        <Gradient/>
      </BackgroundContainer>
      <Index albumTitle={playerState.currentSong.album}/>
    </StyledPlayer>
  );
};

export default Player;
