import React, { Component } from 'react';
import logo from './../Assets/admin_soccer.png';

class Header extends Component {
    render() {
        return (
    
            <div className="jumbotron">
                <div className="container text-center ">
                    <img src={logo} alt=""/>
                </div>
                <div className="container text-center ">
                <h1 className="display-4">React App Manage User</h1>
                {/* <p className="lead">json data</p> */}
                <hr className="my-2" />
                </div>
            </div>
        );
    }
}

export default Header;