import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Adore You", duration: "3:24" },
    { title: "Cherry", duration: "3:22" },
    { title: "Lights Up", duration: "2:20" },
    { title: "Watermelon Sugar", duration: "3:23" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
