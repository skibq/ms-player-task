export const ActionTypes = {
    TOGGLE_MUSIC: 'PLAY_MUSIC',
    SWITCH_TO_NEXT_SONG: 'SWITCH_TO_NEXT_SONG',
    SWITCH_TO_PREVIOUS_SONG: 'SWITCH_TO_PREVIOUS_SONG',
    SWITCH_SHUFFLE: 'SWITCH_SHUFFLE',
    SWITCH_REPEAT: 'SWITCH_REPEAT',
};

export const toggleMusic = () => ({
  type: ActionTypes.TOGGLE_MUSIC,
});

export const switchToNextSong = () => ({
  type: ActionTypes.SWITCH_TO_NEXT_SONG,
});

export const switchToPreviousSong = () => ({
  type: ActionTypes.SWITCH_TO_PREVIOUS_SONG,
});

export const switchShuffle = () => ({
  type: ActionTypes.SWITCH_SHUFFLE,
});

export const switchRepeat = () => ({
  type: ActionTypes.SWITCH_REPEAT,
});
