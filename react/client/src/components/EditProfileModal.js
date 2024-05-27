import React from 'react';

const EditProfileModal = ({ userData, handleChange, handleSave, handleCancel }) => {
    return (
        <form className="bg-white p-4 shadow-sm rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gender:</label>
                <input
                    type="text"
                    id="gender"
                    name="gender"
                    value={userData.gender}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="dateOfBirth" className="form-label">Date of Birth:</label>
                <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={userData.dateOfBirth}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="d-grid gap-2">
                <button type="button" onClick={handleSave} className="btn btn-success">Save</button>
                <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
            </div>
        </form>
    );
};

export default EditProfileModal;
