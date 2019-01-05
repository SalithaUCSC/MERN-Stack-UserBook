import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
    <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">MERN STACK APP</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link
                        className="nav-link" to="/">Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users">users
                    </Link>               
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/add">Add user
                    </Link>               
                </li>
                </ul>
            </div>
        </nav>
    </div>
    )
  }
}
export default Navbar;
