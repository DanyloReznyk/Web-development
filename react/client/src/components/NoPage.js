import React from 'react';

const NoPage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404 Not Found</h1>
            <p style={styles.text}>Sorry, the page you are looking for does not exist.</p>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        color: '#212529',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '20px',
    },
    text: {
        fontSize: '1rem',
    },
};

export default NoPage;
