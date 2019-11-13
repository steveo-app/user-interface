import React from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import piggy from '../img/pig.png';

function Home(props) {

  const toRegister = event => {
    event.preventDefault();

    props.history.push('/register')
  }

  document.body.style.backgroundColor = "#50C9CE";

  return (
    <AbsoluteWrapper>
      <div className="App">
        <img className="piggyLogo" src={piggy} />
        <div className="logoText">hogger</div>
        <div className="subText">Disc Golf Caddy</div>
        <div className="buttons">
          <button onClick={toRegister} className="regbutton">Register</button>
          <button className="loginbutton">Login</button>
        </div>
      </div>
    </AbsoluteWrapper>
  );
}

export default Home;
