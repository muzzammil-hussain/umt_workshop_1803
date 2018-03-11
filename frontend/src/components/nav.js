import React from 'react';
import {Link} from 'react-router-dom'

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img src={process.env.PUBLIC_URL + '/img/arbisoft.png'} width="85" alt=""/>
            </Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;