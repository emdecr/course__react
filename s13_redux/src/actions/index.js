// Actions creator – must return an action
export const selectSong = song => {
  // Return an action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};

// Named export
// Note the 'export' in front of the const
