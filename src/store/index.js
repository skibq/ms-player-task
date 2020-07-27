import { createStore } from 'redux'
import rootReducer from './reducers'

const initialState = {
  musicIsPlaying: false
};

const store = createStore(rootReducer, initialState);

export default store;
