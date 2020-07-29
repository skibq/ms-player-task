import React from "react"
import { connect } from "react-redux"
import ShuffleButton from "./ShuffleButton";
import { switchShuffle } from "../../../../store/actions/player";

const ShuffleButtonContainer = ({isShuffle, onShuffleButtonClick}) => (
  <ShuffleButton isShuffle={isShuffle} onShuffleButtonClick={onShuffleButtonClick} />
);

const mapStateToProps = ({player}) => ({
  isShuffle: player.isShuffle
});

const mapDispatchToProps = dispatch => ({
  onShuffleButtonClick: () => dispatch(switchShuffle())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShuffleButtonContainer)
