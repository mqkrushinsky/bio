import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Music from './components/Music';
import Writing from './components/Writing';
import Art from './components/Art';
import Programming from './components/Programming';
import Contact from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="App-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/music" component={Music} />
            <Route path="/writing" component={Writing} />
            <Route path="/art" component={Art} />
            <Route path="/programming" component={Programming} />
            <Route path="/contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
