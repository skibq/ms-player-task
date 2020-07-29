import React from "react"
import { connect } from "react-redux"
import { switchToNextSong } from "../../../../store/actions/player";
import NextSongButton from "./NextSongButton"

const NextSongButtonContainer = ({onNextSongClick}) => {
  return <NextSongButton onNextSongClick={onNextSongClick}/>
};

const mapDispatchToProps = dispatch => {
  return {
    onNextSongClick: () => {
      dispatch(switchToNextSong())
    }
  }
};

export default connect(null, mapDispatchToProps)(NextSongButtonContainer);
