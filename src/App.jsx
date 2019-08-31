import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import NavBarContainer from './components/navBar';
import MovieContainer from './components/items';


const store = createStore(rootReducer);


class App extends React.Component{
render(){
  return (
    <Provider store={store}>
      <div className='App'>
        <NavBarContainer />
        <MovieContainer />
      </div>
    </Provider>
  );
}}

export default App;
