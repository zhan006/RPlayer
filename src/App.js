import React,{useContext} from 'react';
import './App.css';
import Player from './components/Player'
import {themeContext} from './theme'


function App(props) {
  const theme = useContext(themeContext)
  return (
      <div className="App" style = {{maxWidth:theme.width,margin:"auto"}}>
        <Player/>
      </div>  
  );
}

export default App;
