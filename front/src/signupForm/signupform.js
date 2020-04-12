import React from 'react';
import "../signupForm/signupform.css";

class SignUpForm extends React.Component{

    state = {
        username:'',
        email:'',
        newpassword:'',
        confirmpassword:''
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        const { newpassword, confirmpassword } = this.state;
        if (newpassword !== confirmpassword) {  
            event.preventDefault();
            alert("Passwords don't match");
            this.setState({confirmpassword: ''});
            this.render();
        }
        else if(newpassword === ''){
            event.preventDefault();
            alert("Passwords can't be blank");
            this.render();
        }
        else{

        }
    }

    render(){
        return(
        <form action="/register" method="post">
            <div className="form-group">
                <label>Username:</label>
                <input type="text" class="form-control" name="username" onChange={this.handleInputChange} value={this.state.username} required></input>
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" class="form-control" name="email" onChange={this.handleInputChange} value={this.state.email} required></input>
            </div>
            
            <div className="form-group">
                <label>Password:</label>
                <input type="password" class="form-control" name="newpassword" onChange={this.handleInputChange} value={this.state.newpassword} required></input>
            </div>
            <div className="form-group">
                <label>Confirm password:</label>
                <input type="password" class="form-control" name="confirmpassword" onChange={this.handleInputChange} value={this.state.confirmpassword} required></input>
            </div>
            <div className="row justify-content-center">    
                <div className="col-6">
                    <button id="loginbtn" onClick={this.handleSubmit} type="submit" class="btn btn-primary btn-md btn-block">Register</button>
                </div>
            </div>
        </form>
        )
    }
}

export default SignUpForm;
