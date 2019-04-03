import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'MJ116', duration: '3:02'},
        { title: 'Young Queenz', duration: '1:05'},
        { title: 'Den Vau', duration: '5:07'},
        { title: 'Nach', duration: '`10:09'}
    ]
};


const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});