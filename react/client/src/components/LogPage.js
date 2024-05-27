import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '.././style/log.css';
import '.././style/style.css';
import Footer from "./Footer";
import NavBar from "./NavBar";

const LoginForm = () => {
    const [uname, setUname] = useState('');
    const [psw, setPsw] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('your-login-endpoint', { uname, psw });
            console.log(response.data);
            // Handle successful login
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login failure
        }
    };
    const navLinks = [
        { label: 'Sign-Out', url: '/signin' }
    ];

    return (
        <>
            <NavBar links={navLinks} />

            <main className="container-fluid vh-100 d-flex align-items-center justify-content-center main-container">
            <div className="container text-center login-block">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <h1 className="welcome-text base-text">WELCOME</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Email / Username"
                                    name="uname"
                                    className="form-control base-text"
                                    value={uname}
                                    onChange={(e) => setUname(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="psw"
                                    className="form-control base-text"
                                    value={psw}
                                    onChange={(e) => setPsw(e.target.value)}
                                    required
                                />
                            </div>

                            <Link to="/"><button type="submit" className="btn btn-outline-success">
                                Login
                            </button></Link>
                        </form>

                        <h1 className="fw-bold info-text base-text">You don't have an account yet?</h1>
                        <Link to="/signin">
                            <h1 className="fw-bold fs-2 text-decoration-underline base-text">Get started</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
            <Footer/>
        </>
    );
};

export default LoginForm;
