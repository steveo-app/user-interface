import React from 'react';
import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import Home from './components/Home';
import Register from './components/Register';
import MainMenu from './components/MainMenu';
import NewGame from './components/NewGame';
import Holes from './components/Holes';
import Players from './components/Players';
import Game from './components/Game';
import EndGame from './components/EndGame';

function App() {
  
  let location = useLocation();

  let transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return (
    <div>
        {transitions.map(({ item: location, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/mainmenu" component={MainMenu} />
            <Route exact path="/newgame" component={NewGame} />
            <Route exact path="/holes" component={Holes} />
            <Route exact path="/players" component={Players} />
            <Route exact path="/game/:id" component={Game} />
            <Route exact path="/endgame" component={EndGame} />
          </Switch>
        </animated.div>
        ))} 
    </div>
  );
}

export default App;
