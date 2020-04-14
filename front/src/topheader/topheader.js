import React from 'react';
import mainlogo from '../logo_emptybackground.png';
import "../topheader/topheader.css";
import "bootstrap/js/src/collapse.js";
import {Navbar, Nav, Container} from "react-bootstrap"

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
                <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
                    <Container>
                        <img id="toplogo" src={mainlogo} alt="Main logo"></img>
                        <Navbar.Brand href="/">The Social Distancer</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
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
                                    <Nav.Link href="https://antonoro.github.io">About the author</Nav.Link>
                                </li>
                                <li className="nav-item">
                                    <Nav.Link className="active" href="/logout">{this.props.logname}</Nav.Link>
                                </li>
                            </ul>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}


export default TopHeader;
