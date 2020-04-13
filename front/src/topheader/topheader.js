import React from 'react';
import mainlogo from '../logo_emptybackground.png';
import "../topheader/topheader.css";
import "bootstrap/js/src/collapse.js";

class TopHeader extends React.Component{

    constructor(props){
        super();
        this.state = {
            collapsed: true,
        };
    }

    toggleNavBar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render(){
        const collapse = this.state.collapsed;
        const classOne = collapse ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapse ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <img id="toplogo" src={mainlogo} alt="Main logo"></img>
                        <a className="navbar-brand" href="/">The Social Distancer</a>
                        <button onClick={this.toggleNavBar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`${classOne}`} id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    { (!this.props.loggedin) ? 
                                        <form action="/login" method="post"> 
                                            <input type="hidden" className="form-control" name="username" value="guest"required></input>
                                            <input type="hidden" className="form-control" name="password" value="guest1" required></input>
                                        </form>
                                        
                                    : 
                                        <a className="nav-link disabled">{this.props.nameuser}</a>
                                    }
                                </li>
                                <li className="nav-item">
                                    <a class="nav-link" href="https://antonoro.github.io">About the author</a>
                                </li>
                                <li className="nav-item">
                                    <a class="nav-link  active" href="/logout">{this.props.logname}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}


export default TopHeader;