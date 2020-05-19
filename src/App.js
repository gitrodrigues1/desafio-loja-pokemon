import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Header from './components/header/header.component'
import Homepage from './pages/Homepage'
import Search from './pages/Search'
import Backpack from './pages/Backpack'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/search' component={Search}/>
        <Route exact path='/backpack' component={Backpack} />
      </Switch>
    </div>
  );
}

export default App;
