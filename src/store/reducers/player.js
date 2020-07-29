import { ActionTypes } from '../actions/player'
import { defaultPlayerState } from "../player";
import { findCurrentSongIndex, findNextSongIndex, findPreviousSongIndex, markRandomSongAsCurrent } from "../../helpers/playerHelper";
import { mockPlayingSong, playAnotherSongIfForced } from "../../components/player/playerLogic"

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
      const toggledMusicIsPlaying = !state.musicIsPlaying;

      const mockedMusic = mockPlayingSong(toggledMusicIsPlaying, state);

      return {...state, musicIsPlaying: toggledMusicIsPlaying, mockedMusic};

    case ActionTypes.UPDATE_PROGRESS:
      return {...state, progressInSeconds: action.newProgress};

    case ActionTypes.PLAY_RANDOM_SONG:
      const playlistWithRandomSongPlayed = markRandomSongAsCurrent(state.playlist);

      return {...state, playlist: playlistWithRandomSongPlayed, progressInSeconds: 0};

    case ActionTypes.SWITCH_SHUFFLE:
      return {...state, isShuffle: !state.isShuffle, isRepeat: false};

    case ActionTypes.SWITCH_REPEAT:
      return {...state, isRepeat: !state.isRepeat, isShuffle: false};

    case ActionTypes.PLAY_NEXT_SONG:
      const playlistWithNextSongPlaying = markNextSongAsCurrent(state.playlist);

      return { ...state, playlist: playlistWithNextSongPlaying, progressInSeconds: 0 };

    case ActionTypes.PLAY_PREVIOUS_SONG:
      const playlistWithPreviousSongPlaying = markPreviousSongAsCurrent(state.playlist);

      return { ...state, playlist: playlistWithPreviousSongPlaying, progressInSeconds: 0 };

    default:
      return state
  }
};

export default playerActions

