import React from 'react';
import { Link } from 'react-router-dom';
import '../style/style.css'

const NavBar = ({ links }) => {
    return (
        <header className="navbar navbar-expand-lg header-footer">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {links.map((link, index) => (
                            <li className="nav-item" key={index}>
                                <Link className="nav-link" to={link.url}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
