import React from "react";
import styled from "styled-components";
import { ReactComponent as PlaylistIcon } from "../../../images/player/playlist_ico.svg"

const NextSongInfoWrapper = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  align-items: center;
`;

const StyledPlaylistIcon = styled(PlaylistIcon)`
  margin-left: 46px;
  display: block;
`;

const NextSongWrapper = styled.div`
  margin-left: 44px;
`;

const NextSongLabel = styled.div`
  font-size: 18px;
  font-family: "Gilroy Light";
  line-height: 13px;
  color: ${({theme}) => theme.colors.lightViolet};
`;

const NextSongTitle = styled.div`
  margin-top: 12px;
  line-height: 15px;
  color: ${({theme}) => theme.colors.darkGray};
  font-size: 20px;
`;

const NextSongDurationStyles = styled.div`
  color: ${({theme}) => theme.colors.lightViolet};
  font-size: 24px;
  font-family: "Gilroy Light";
  flex-grow: 1;
  line-height: 18px;
  text-align: right;
  padding-right: 64px;
`;

const NextSongDuration = ({duration}) => {
  const minutes = Math.floor(duration / 60);
  const seconds = String(duration % 60).padStart(2, '0');

  return <NextSongDurationStyles>{minutes}:{seconds}</NextSongDurationStyles>
};


const nextSongInfo = ({nextSong}) => (
  <NextSongInfoWrapper>
    <StyledPlaylistIcon width="36px" />
    <NextSongWrapper>
      <NextSongLabel>NEXT</NextSongLabel>
      <NextSongTitle>{ nextSong.title }</NextSongTitle>
    </NextSongWrapper>
    <NextSongDuration duration={nextSong.durationInSeconds} />
  </NextSongInfoWrapper>
);

export default nextSongInfo;
