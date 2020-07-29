import React from "react"
import { connect } from "react-redux"
import { switchRepeat } from "../../../../store/actions/player";
import RepeatButton from "./RepeatButton";

const RepeatButtonContainer = ({onRepeatButtonClick, isRepeat}) => {
  return <RepeatButton onRepeatButtonClick={onRepeatButtonClick} isRepeat={isRepeat}/>
};

const mapStateToProps = ({player}) => ({
  isRepeat: player.isRepeat
});

const mapDispatchToProps = dispatch => ({
  onRepeatButtonClick: () => {
    dispatch(switchRepeat());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RepeatButtonContainer);
