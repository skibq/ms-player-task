import React from "react"
import { connect } from "react-redux"
import { switchToPreviousSong } from "../../../../store/actions/player";
import PreviousSongButton from "./PreviousSongButton"

const PreviousSongButtonContainer = ({onPreviousSongClick}) => {
  return <PreviousSongButton onPreviousSongClick={onPreviousSongClick}/>
};

const mapDispatchToProps = dispatch => {
  return {
    onPreviousSongClick: () => {
      dispatch(switchToPreviousSong())
    }
  }
};

export default connect(null, mapDispatchToProps)(PreviousSongButtonContainer);
