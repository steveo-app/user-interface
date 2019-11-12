import React, { useContext } from 'react';
import './App.css';
import { Route, Switch, __RouterContext, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import Home from './components/Home';
import Register from './components/Register';
import MainMenu from './components/MainMenu';
import NewGame from './components/NewGame';
import Holes from './components/Holes';

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
            <Route exact path="/game" component={NewGame} />
            <Route exact path="/holes" component={Holes} />
          </Switch>
        </animated.div>
        ))} 
    </div>
  );
}

export default App;
