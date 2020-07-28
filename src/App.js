import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";
import PlayerContainer from './components/player/PlayerContainer';
import store from './store'
import colors from "./colors"
import './App.css';


function App() {
  return (
    <Provider store={store} className="App">
      <ThemeProvider theme={{colors}}>
        <PlayerContainer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
