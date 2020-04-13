import React, { useState, useEffect } from 'react';
import mainlogo from './logo_emptybackground.png';
import UserLogIn from './LogIn';
import TopHeader from './topheader/topheader.js';
import GamePanel from './gamepanel/gamepanel.js';
import "typeface-montserrat-alternates";
import './App.css';
import "typeface-dosis";
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';




class Welcome extends React.Component {
  
  constructor(props){
    super();
    this.state = {
      userState: null, 
    };
    
  }

  // get user state to know which display to render
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
                  <form action="/login" method="post"> 
                    <input type="hidden" className="form-control" name="username" value="guest"required></input>
                    <input type="hidden" className="form-control" name="password" value="guest1" required></input>
                    <button type="submit" className="btn btn-outline-success">Play as Guest</button>
                  </form> 
                </div>
              </div>
              <div className="row justify-content-center">  
                  <UserLogIn />
              </div>
            </div>   
            : <div className="row">
                <div className="col-2">
                  <div className="row justify-content-end top-buffer">
                    <h5 className="rotated">Active COVID-19 cases</h5>
                  </div>
                </div>
                <div className="col-8">
                  <GamePanel username={this.state.userState.username} />
                </div>
                <div className="col-2">
                </div>
              </div>
            }
              
          </div>  
        </body>
      </div> 
    );
  }
}

export default Welcome;
