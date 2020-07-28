import { createStore } from 'redux'
import rootReducer from './reducers'
import { defaultPlayerState } from "./player";

const initialState = {
  player: defaultPlayerState
};

const store = createStore(rootReducer, initialState);

export default store;
