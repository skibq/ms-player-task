import React from "react";
import { connect } from 'react-redux'
import Player from "./Player"

const CollectionsContainer = ({ player }) => {
  return <Player playerState={player} />
};

const mapStateToProps = (state)=> ({
  player: state.player
});

const connector = connect(mapStateToProps);

export default connector(CollectionsContainer);
