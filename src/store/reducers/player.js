import { ActionTypes } from '../actions/player'

const playerActions = (state, action) => {
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
