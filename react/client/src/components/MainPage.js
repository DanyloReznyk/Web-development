import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/style.css';
import '../style/main.css';
import Footer from "./Footer";
import NavBar from "./NavBar";
import JobDetail from './JobDetail';

const MainPage = () => {
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedJob, setSelectedJob] = useState(null);
    const jobsPerPage = 3;

    useEffect(() => {
        axios.get('http://localhost:5000/jobs')
            .then(response => {
                setJobs(response.data.jobs);
            })
            .catch(error => {
                console.error("There was an error fetching the job listings!", error);
            });
    }, []);

    const totalPages = Math.ceil(jobs.length / jobsPerPage);

    const handlePrevClick = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 0));
    };

    const handleNextClick = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages - 1));
    };

    const displayJobs = jobs.slice(currentPage * jobsPerPage, (currentPage + 1) * jobsPerPage);

    const navLinks = [
        { label: 'What is it', url: '/what-is-it' },
        { label: 'Profile', url: '/profile' },
        { label: 'Sign-Out', url: '/signin' },

    ];

    const handleJobClick = (job) => {
        setSelectedJob(job);
    };

    const handleBackClick = () => {
        setSelectedJob(null);
    };

    return (
        <>
            <NavBar links={navLinks} />
            <main className="container-fluid vh-100 d-flex align-items-center justify-content-center main-container">
                {selectedJob ? (
                    <JobDetail job={selectedJob} onBackClick={handleBackClick} />
                ) : (
                    <div className="row">
                        {/*<div className="main-name">Vacancies</div>*/}
                        <div className="col-md-6 offset-md-3">
                            <div id="vacancies-list" className="row row-cols-1 row-cols-md-3 g-6 p-8">
                                {displayJobs.length > 0 ? (
                                    displayJobs.map((job, index) => (
                                        <div key={index} className="col mb-4">
                                            <div className="card h-100" onClick={() => handleJobClick(job)}>
                                                <div className="card-body">
                                                    <h5 className="card-title">{job.title}</h5>
                                                    <p className="card-text">{job.company} - {job.location}</p>
                                                    <p className="card-text">{job.salary}</p>
                                                    <p className="card-text">{job.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="d-flex ">
                                        <div className="flex-grow-1 text-center">
                                            <h3 className="container">No job listings available.</h3>
                                            <img
                                                src="https://th.bing.com/th/id/OIP.u3pvqseMHwkHgfJ8rmz_bAHaHa?rs=1&pid=ImgDetMain"
                                                alt="no job"
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="text-center mt-3">
                                <button
                                    id="prevBtn"
                                    className="btn btn-outline-success"
                                    onClick={handlePrevClick}
                                    disabled={currentPage === 0}
                                    style={{ display: totalPages > 1 ? 'inline-block' : 'none', marginRight: '10px' }}
                                >
                                    Previous
                                </button>
                                <button
                                    id="nextBtn"
                                    className="btn btn-outline-success"
                                    onClick={handleNextClick}
                                    disabled={currentPage === totalPages - 1}
                                    style={{ display: totalPages > 1 ? 'inline-block' : 'none' }}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
};

export default MainPage;
