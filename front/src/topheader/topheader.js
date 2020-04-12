import React from 'react';
import mainlogo from '../logo_emptybackground.png';
import "../topheader/topheader.css";

class TopHeader extends React.Component{

    constructor(props){
        super();
    }

    render(){
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <img id="toplogo" src={mainlogo} alt="Main logo"></img>
                    <a class="navbar-brand" href="/">The Social Distancer</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse w-100 order-3" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                { (!this.props.loggedin) ? 
                                    <form action="/login" method="post">
                                        <input type="hidden" class="form-control" name="username" value="guest"required></input>
                                        <input type="hidden" class="form-control" name="password" value="guest1" required></input>
                                        <button type="submit" class="btn btn-outline-success">Play as Guest</button>
                                    </form>
                                    
                                : 
                                    <a class="nav-link disabled">{this.props.nameuser}</a>
                                }
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  active" href="/logout">{this.props.logname}</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}


export default TopHeader;