import React from 'react';
import Footer from './Footer';
import '../style/style.css';
import '../style/sign.css';
import NavBar from "./NavBar";
import {Link} from "react-router-dom";

const SignPage = () => {
    const navLinks = [
        { label: 'Log-In', url: '/login' }
    ];
    return (
        <>
            <NavBar links={navLinks} />

            <main className="container-fluid vh-100 d-flex align-items-center justify-content-center main-container">
                <div className="container text-center login-block">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <h1 className="register-text base-text">REGISTER</h1>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name" className="base-text fs-3 fw-light">Name Surname</label>
                                    <input type="text" id="name" name="name" className="form-control base-text" required />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="base-text fs-3 fw-light">e-Mail</label>
                                    <input type="email" id="email" name="email" className="form-control base-text" required />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="gender" className="base-text fs-3 fw-light">Gender</label>
                                    <select id="gender" name="gender" className="form-select " required>
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="non-binary">Non-Binary</option>
                                        <option value="genderqueer">Genderqueer</option>
                                        <option value="agender">Agender</option>
                                        <option value="bigender">Bigender</option>
                                        <option value="demiboy">Demiboy</option>
                                        <option value="demigirl">Demigirl</option>
                                        <option value="genderfluid">Genderfluid</option>
                                        <option value="two-spirit">Two-Spirit</option>
                                        <option value="androgyne">Androgyne</option>
                                        <option value="neutrois">Neutrois</option>
                                        <option value="pangender">Pangender</option>
                                        <option value="third gender">Third Gender</option>
                                        <option value="cisgender">Cisgender</option>
                                        <option value="transgender">Transgender</option>
                                        <option value="questioning">Questioning</option>
                                        <option value="fluidflux">Fluidflux</option>
                                        <option value="intgender">Intergender</option>
                                        <option value="multigender">Multigender</option>
                                        <option value="omnigender">Omnigender</option>
                                        <option value="quingender">Quingender</option>
                                        <option value="xenogender">Xenogender</option>
                                        <option value="gender nonconforming">Gender Nonconforming</option>
                                        <option value="gender questioning">Gender Questioning</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="date" className="base-text fs-3 fw-light">Date of Birth</label>
                                    <input type="date" id="date" name="dateOfBirth" className="form-control"/>
                                </div>

                                <Link to="/"><button type="submit" className="btn btn-outline-success">
                                    Register
                                </button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default SignPage;
