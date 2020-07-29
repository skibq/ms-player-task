import React from "react"
import styled from "styled-components";

const Title = styled.h1`
  font-size: 36px;
  line-height: 28px;
  text-align: center;
  font-family: "Gilroy Extra Bold";
  color: ${({theme}) => theme.colors.white}
`;

const ArtistLabel = styled.h2`
  margin-bottom: 0;
  font-size: 18px;
  line-height: 14px;
  margin-top: 18px;
  font-family: "Gilroy Light";
  text-align: center; 
  color: ${({theme}) => theme.colors.lightViolet}
`;

const SongInfo = ({title, artist}) => {
  return(
    <div>
      <Title>{title}</Title>
      <ArtistLabel>{artist}</ArtistLabel>
    </div>
  )
};

export default SongInfo
