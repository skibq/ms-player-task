import React from "react"
import styled from "styled-components"

const ProgressBarWrapper = styled.div`
  width: 80%;
  height: 5px;
  position: relative;
`;
const VerticalLine = styled.div`
  height: 1px;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: calc(50% - 0.5px);
  background-color: ${({theme}) => theme.colors.mintGreen};
  &:before {
    content: ' ';
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.mintGreen};
    position: absolute;
    top: calc(50% - 2.5px);
    left: 0;
  }
  &:after {
    content: ' ';
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.mintGreen};
    position: absolute;
    top: calc(50% - 2.5px);
    right: 0;
  }
`;
const Progress = styled.div`
  height: 5px;
  border-radius: 5px;
  width: ${({progressInPercents}) => `${progressInPercents}`}%;
  background-color: ${({theme}) => theme.colors.mintGreen};
`;
const ProgressLabel = styled.span`
  color: ${({theme}) => theme.colors.gray};
  line-height: 14px;
`;
const ProgressWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ProgressTime = ({progressInSeconds}) => {
  const minutes = Math.floor(progressInSeconds / 60);
  const seconds = String(progressInSeconds % 60).padStart(2, '0');

  return <ProgressLabel>{minutes}:{seconds}</ProgressLabel>
};

const SongDuration = ({currentSongDuration}) => {
  const minutes = Math.floor(currentSongDuration / 60);
  const seconds = String(currentSongDuration % 60).padStart(2, '0');

  return <ProgressLabel>{minutes}:{seconds}</ProgressLabel>
};

const ProgressBar = ({progressInPercents, currentSongDuration, progressInSeconds}) => (
  <ProgressWrapper>
    <ProgressTime progressInSeconds={progressInSeconds} />
    <ProgressBarWrapper>
      <VerticalLine/>
      <Progress progressInPercents={progressInPercents}/>
    </ProgressBarWrapper>
    <SongDuration currentSongDuration={currentSongDuration} />
  </ProgressWrapper>
);

export default ProgressBar
