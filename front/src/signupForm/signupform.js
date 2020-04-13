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
        event.preventDefault();
        
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
            fetch('/register', 
            {
                method: 'POST', 
                body: JSON.stringify({username: `${this.state.username}`,email: `${this.state.email}`, confirmpassword: `${this.state.confirmpassword}`}),
                headers: { 'Content-Type': 'application/json' },
            }).then(res => res.json())
            .then(valid => {
                if(!valid)
                {
                    console.log("Value of valid is", valid);
                    alert("Username or email is already registered. Choose different credentials.")
                    this.render();
                }
                else{
                    console.log("Value of valid is", valid);
                    alert("Account created. Please login.");
                    this.render();
                }

            });
        }
    }

    render(){
        return(
        <form id="#signupForm" onSubmit={this.handleSubmit}>
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
                    <button id="loginbtn" type="submit" class="btn btn-primary btn-md btn-block">Register</button>
                </div>
            </div>
        </form>
        )
    }
}

export default SignUpForm;
