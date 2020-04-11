import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../loginForm/loginform.css";

class LogInForm extends React.Component{

    render(){
        return(
        <div>
            <form action="/login" method="post">
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" class="form-control" name="username" required></input>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" class="form-control" name="password" required></input>
                </div>
                <div className="row justify-content-center">    
                    <div className="col-6">
                        <button id="loginbtn" onSubmit={this.logInHandleClick} type="submit" class="btn btn-primary btn-md btn-block">Play</button>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}

export default LogInForm;
