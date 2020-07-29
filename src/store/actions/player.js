export const ActionTypes = {
    TOGGLE_MUSIC: 'PLAY_MUSIC',
    PLAY_NEXT_SONG: 'PLAY_NEXT_SONG',
    PLAY_PREVIOUS_SONG: 'PLAY_PREVIOUS_SONG',
    SWITCH_SHUFFLE: 'SWITCH_SHUFFLE',
    SWITCH_REPEAT: 'SWITCH_REPEAT',
    UPDATE_PROGRESS: 'UPDATE_PROGRESS',
    PLAY_RANDOM_SONG: 'PLAY_RANDOM_SONG',
};

export const toggleMusic = () => ({
  type: ActionTypes.TOGGLE_MUSIC,
});

export const playNextSong = () => ({
  type: ActionTypes.PLAY_NEXT_SONG,
});

export const playPreviousSong = () => ({
  type: ActionTypes.PLAY_PREVIOUS_SONG,
});

export const switchShuffle = () => ({
  type: ActionTypes.SWITCH_SHUFFLE,
});

export const switchRepeat = () => ({
  type: ActionTypes.SWITCH_REPEAT,
});

export const playRandomSong = () => ({
  type: ActionTypes.PLAY_RANDOM_SONG
});

export const updateProgress = (newProgress) => ({
  type: ActionTypes.UPDATE_PROGRESS,
  newProgress,
});
