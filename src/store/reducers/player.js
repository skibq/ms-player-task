import { ActionTypes } from '../actions/player'
import { defaultPlayerState } from "../player";
import { findCurrentSongIndex, findNextSongIndex, findPreviousSongIndex } from "../../helpers/playerHelper";

const markNextSongAsCurrent = (playlist) => {
  const currentSongIndex = findCurrentSongIndex(playlist);
  const nextSongIndex = findNextSongIndex(playlist, currentSongIndex);

  return playlist.map((song, songIndex) => ({
    ...song,
    isCurrentSong: songIndex === nextSongIndex
  }));
};

const markPreviousSongAsCurrent = (playlist) => {
  const currentSongIndex = findCurrentSongIndex(playlist);
  const previousSongIndex = findPreviousSongIndex(playlist, currentSongIndex);

  return playlist.map((song, songIndex) => ({
    ...song,
    isCurrentSong: songIndex === previousSongIndex
  }));
};

const playerActions = (state = defaultPlayerState, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_MUSIC:
      return {...state, musicIsPlaying: !state.musicIsPlaying};

    case ActionTypes.SWITCH_SHUFFLE:
      return {...state, isShuffle: !state.isShuffle};

    case ActionTypes.SWITCH_REPEAT:
      return {...state, isRepeat: !state.isRepeat};

    case ActionTypes.SWITCH_TO_NEXT_SONG:
      const playlistWithNextSongPlaying = markNextSongAsCurrent(state.playlist);

      return { ...state, playlist: playlistWithNextSongPlaying };

    case ActionTypes.SWITCH_TO_PREVIOUS_SONG:
      const playlistWithPreviousSongPlaying = markPreviousSongAsCurrent(state.playlist);

      return { ...state, playlist: playlistWithPreviousSongPlaying };

    default:
      return state
  }
};

export default playerActions

