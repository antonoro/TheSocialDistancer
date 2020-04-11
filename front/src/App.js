import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainlogo from './logo_emptybackground.png';
import './App.css';
import UserLogIn from './LogIn';
import TopHeader from './topheader/topheader.js';
import GamePanel from './gamepanel/gamepanel.js';
import "typeface-dosis";



function Welcome() {
  
  const [user, setUser] = useState(null);

  const logintag = 'Log in';
  const logouttag = 'Log out';
  const playtagheader = 'Play';
  
  useEffect( () => {
    console.log("getUser");
    fetch("/getUser")
    .then(res => res.json())
    .then(user => setUser(user));
  }, []);

  return (
    <div className="App">
      <header className="Top-header">
        {!user ?
          <TopHeader logname={logintag} nameuser={playtagheader} />
        :
          <TopHeader logname={logouttag} nameuser={`Welcome, ${user.username}`} loggedin='true' />
        }
      </header>
      
      <body>
        <div className="container-fluid">  
          {!user ? 
          <div>
            <div className="row justify-content-center">  
              <div className="App-header">
                <img src={mainlogo} className="App-logo" alt="logo" />
                <h1>Welcome to The Social Distancer!</h1>
                <h2>A game where you make a difference and save lives</h2> 
              </div>
            </div>
            <div className="row justify-content-center">  
                <UserLogIn />
            </div>
          </div>   
          : <div className="row justify-content-center">
              <GamePanel />
            </div>
          }
            
        </div>  
      </body>
    </div>
    
  );
}

export default Welcome;
