import React, { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import EditProfileModal from "./EditProfileModal";
import {Button} from "react-bootstrap";

const ProfilePage = () => {
    const initialUserData = {
        name: 'Vlad',
        email: '1.doe@example.com',
        gender: 'Male',
        dateOfBirth: '1990-01-01'
    };

    const [userData, setUserData] = useState(initialUserData);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleCancel = () => {
        setUserData(initialUserData);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    };

    const navLinks = [
        { label: 'Main', url: '/' },
        { label: 'What is it', url: '/what-is-it' },
        { label: 'Sign-Out', url: '/signin' },
    ];

    return (
        <>
            <NavBar links={navLinks} />
            <main className="container-fluid vh-100 d-flex align-items-center justify-content-center main-container">
                <section id="user-profile" className="mb-8">
                    <div className="flex items-center mb-4">
                        <div>
                            <h3 className="text-lg font-semibold base-text">User Profile</h3>
                        </div>
                    </div>
                    {isEditing ? (
                        <EditProfileModal
                            userData={userData}
                            handleChange={handleChange}
                            handleSave={handleSave}
                            handleCancel={handleCancel}
                        />
                    ) : (
                        <table className="table-auto w-full">
                            <tbody>
                            <tr>
                                <td className="px-4 py-2" style={{ color: 'white' }}>Name:</td>
                                <td className="px-4 py-2" style={{ color: 'white' }}>{userData.name}</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2" style={{ color: 'white' }}>Email:</td>
                                <td className="px-4 py-2" style={{ color: 'white' }}>{userData.email}</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2" style={{ color: 'white' }}>Gender:</td>
                                <td className="px-4 py-2" style={{ color: 'white' }}>{userData.gender}</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2" style={{ color: 'white' }}>Date of Birth:</td>
                                <td className="px-4 py-2" style={{ color: 'white' }}>{userData.dateOfBirth}</td>
                            </tr>
                            </tbody>
                        </table>
                    )}
                    {!isEditing && <Button className="btn btn-success" onClick={handleEdit}>Edit</Button>}
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ProfilePage;
