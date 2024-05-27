import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import RandomCat from "./RandomCat";

const WhatIsItPage = () => {
    const navLinks = [
        { label: 'Main', url: '/' },
        { label: 'Profile', url: '/profile' },
        { label: 'Sign-Out', url: '/signin' },
    ];
    return (
        <>
            <NavBar links={navLinks} />

            <main className="container-fluid vh-100 d-flex align-items-center justify-content-center main-container" >
                <section id="about" className="mb-8">
                    <div className="container mt-5">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-4">
                                <RandomCat/>
                            </div>
                            <map name="image-map">
                                <area shape="rect" coords="570,210,980,470" alt="work ua" href="https://www.work.ua/" />
                            </map>
                            <div className="col-md-6 mt-2 mb-md-0">
                                <h1 className="base-text">WHAT IS IT?</h1>
                                <p className="base-text">
                                    Looking for a job? Our website offers a safe and easy way to find employment. With our platform, you can browse through a wide range of job listings, apply to positions that match your skills and experience, and connect with reputable employers—all in a secure environment. Start your job search today and take the next step towards a rewarding career!

                                </p>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
            <Footer />
        </>
    );
};

export default WhatIsItPage;
