import { findCurrentSong } from "../../helpers/playerHelper";
import store from "../../store";
import {updateProgress, playRandomSong, playNextSong, playPreviousSong} from "../../store/actions/player";

export const playNextSuitableSong = () => {
  const playerState = store.getState().player;

  if(playAnotherSongIfForced(playerState)) {
    return;
  }

  store.dispatch(playNextSong())
};

export const playPreviousSuitableSong = () => {
  const playerState = store.getState().player;

  if(playAnotherSongIfForced(playerState)) {
    return;
  }

  store.dispatch(playPreviousSong())
};

// returns true if we are forced to play other song
export const playAnotherSongIfForced = (playerState) => {
  if (playerState.isRepeat) {
    store.dispatch(updateProgress(0));
    return true
  } else if (playerState.isShuffle) {
    store.dispatch(playRandomSong());
    return true
  }
  return false
};

const playerMainLoop = () => {
  return setInterval(() => {
    const playerState = store.getState().player;
    const currentSong = findCurrentSong(playerState.playlist);
    const currentSongIsFinish = playerState.progressInSeconds >= currentSong.durationInSeconds;

    if (currentSongIsFinish) {
      if (playAnotherSongIfForced(playerState)) {
        return
      }
      store.dispatch(playNextSong())
      return
    }

    store.dispatch(updateProgress(playerState.progressInSeconds + 1))
  }, 1000);
};

export const mockPlayingSong = (musicIsPlaying, playerState) => {
  if(!musicIsPlaying) {
    clearInterval(playerState.mockedMusic); //stop playing music
    return;
  }

  return playerMainLoop()
};
