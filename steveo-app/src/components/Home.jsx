import React from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';

function Home(props) {

  const toRegister = event => {
    event.preventDefault();

    props.history.push('/register')
  }

  return (
    <AbsoluteWrapper>
      <div className="App">
        <h1 className="logo">LOGO HERE</h1>
        <div className="buttons">
          <button onClick={toRegister} className="regbutton">Register</button>
          <button className="loginbutton">Login</button>
        </div>
      </div>
    </AbsoluteWrapper>
  );
}

export default Home;
