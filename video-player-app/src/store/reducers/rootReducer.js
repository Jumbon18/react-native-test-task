import {combineReducers} from 'redux';
import videoReducer from "./videos";
import pictureReducer from "./pictures";

export default combineReducers({
    video: videoReducer,
    picture: pictureReducer
});