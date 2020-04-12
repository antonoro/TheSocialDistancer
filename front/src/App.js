import React, { useState, useEffect } from 'react';
import mainlogo from './logo_emptybackground.png';
import UserLogIn from './LogIn';
import TopHeader from './topheader/topheader.js';
import GamePanel from './gamepanel/gamepanel.js';
import './App.css';

import "typeface-dosis";



class Welcome extends React.Component {
  
  constructor(props){
    super();
    this.state = {
      userState: null, 
    };
    
  }

  componentDidMount(){
    console.log("getUser");
    fetch("/getUser")
    .then(res => res.json())
    .then(user => this.setState({userState: user}));
  }

  
  
  render = () => {

    const logintag = 'Log in';
    const logouttag = 'Log out';
    console.log("Rendering Welcome");
    return (
      <div className="App">
        <header className="Top-header">
          {!this.state.userState ?
            <TopHeader logname={logintag}/>
          :
            <TopHeader logname={logouttag} nameuser={`Welcome, ${this.state.userState.username}`} loggedin='true' />
          }
        </header>
        
        <body>
          <div className="container-fluid">  
            {!this.state.userState ? 
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
}

export default Welcome;
