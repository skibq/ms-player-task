import AlbumCover from "../images/player/unreleased_cover.png"

export const defaultPlayerState = {
  musicIsPlaying: false,
  isRepeat: false,
  isShuffle: false,
  playlist: [
    {
      title: "Self Conscious1",
      album: "Unreleased1",
      artist: "Kanye West1",
      image: AlbumCover
    },
    {
      title: "Self Conscious2",
      album: "Unreleased2",
      artist: "Kanye West2",
      image: AlbumCover,
      isCurrentSong: true
    },
    {
      title: "Self Conscious3",
      album: "Unreleased3",
      artist: "Kanye West3",
      image: AlbumCover
    },
    {
      title: "Self Conscious4",
      album: "Unreleased4",
      artist: "Kanye West4",
      image: AlbumCover
    }
  ]
};
