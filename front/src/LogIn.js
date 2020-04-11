import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Btn.css';
import "typeface-montserrat-alternates";
import SignUpForm from "./signupForm/signupform.js";
import LogInForm from "./loginForm/loginform.js";

class UserLogIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            logInShowvalue: true,
            signUpShowvalue: false,
            showWishList: false,
        };
        this.signupForm = <SignUpForm/>;
        this.logInform = <LogInForm/>;
    }

    logInHandleClick = () => {

        this.setState(
            {
                logInvShowalue : !this.state.logInShowvalue    
            }
        );

    }

    signUpHandleClick = () => {

    
        this.setState(
            {
                signUpShowvalue : !this.state.signUpShowvalue, 
                logInShowvalue : !this.state.logInShowvalue
            }
        )
        

    }

    render(){
        
    
        return (
            <div className="Btn-header">
                <div>
                    {(this.state.logInShowvalue) ? this.logInform : ''}
                </div>
                <div className="row justify-content-center"> 
                    <div className="col-6">
                        <button id="signupbtn" onClick={this.signUpHandleClick} class="btn btn-secondary btn-md btn-block">{(this.state.signUpShowvalue) ? 'Back' : 'Sign Up'}</button>
                    </div>
                </div>
                <div>
                    {(this.state.signUpShowvalue) ? this.signupForm : ''}
                </div>
            </div>
        );
    
    }
}


export default UserLogIn;