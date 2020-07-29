import React,{useContext} from 'react';
import './App.css';
import Player from './components/Player'
import {themeContext} from './theme'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
//redux
import rootReducer from './redux/index'

const store = createStore(rootReducer)

function App(props) {
  const theme = useContext(themeContext)
  return (
      <div className="App" style = {{maxWidth:theme.width,margin:"auto"}}>
        <Provider store={store}>
          <Player/>
        </Provider>
      </div>  
  );
}

export default App;
