import { ActionTypes } from '../actions/player'
import { defaultPlayerState } from "../player";

const playerActions = (state = defaultPlayerState, action) => {
  switch (action.type) {
    case ActionTypes.PLAY_MUSIC:
      return {...state, musicIsPlaying: true};
    case ActionTypes.STOP_MUSIC:
      return {...state, musicIsPlaying: false};

    default:
      return state
  }
};

export default playerActions

