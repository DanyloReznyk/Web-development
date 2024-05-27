import React from 'react';

const JobDetail = ({ job, onBackClick }) => {
    if (!job) {
        return <p>No job details available.</p>;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="text-center">
                        <img
                            src="https://ora.ai/api/og?title=JOB"
                            alt="Job Image"
                            className="img-fluid rounded-circle my-3"
                            width={280}
                            height={200}
                        />
                        <h1 className="display-4">{job.title}</h1>
                    </div>
                    <h3>{job.company} - {job.location}</h3>
                    <h4>{job.salary}</h4>
                    <p>{job.description}</p>
                    <button className="btn btn-outline-success" onClick={onBackClick}>
                        Back to Listings
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;
