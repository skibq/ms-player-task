export const ActionTypes = {
    PLAY_MUSIC: 'PLAY_MUSIC',
    STOP_MUSIC: 'STOP_MUSIC'
};

export const playMusic = () => ({
  type: ActionTypes.PLAY_MUSIC,
});

export const stopMusic = () => ({
  type: ActionTypes.STOP_MUSIC,
});
