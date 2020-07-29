export const findCurrentSong = (playlist) => {
  return playlist.find((song) => song.isCurrentSong);
};

export const findCurrentSongIndex = (playlist) => {
  return playlist.findIndex((song) => song.isCurrentSong);
};

export const findNextSongIndex = (playlist, currentSongIndex) => {
  const isLastSongFromPlaylist = playlist.length - 1 === currentSongIndex;

  if (isLastSongFromPlaylist)
    return 0;

  return currentSongIndex + 1;
};

export const findPreviousSongIndex = (playlist, currentSongIndex) => {
  const isFirstSongPlaying = currentSongIndex === 0;

  if (isFirstSongPlaying)
    return playlist.length - 1;

  return currentSongIndex - 1;
};
