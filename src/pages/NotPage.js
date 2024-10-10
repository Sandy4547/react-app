import React from 'react';

function NotPage() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.message}>Page Not Found</p>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8d7da',
        color: '#721c24',
    },
    title: {
        fontSize: '72px',
        marginBottom: '10px',
    },
    message: {
        fontSize: '24px',
    },
};

export default NotPage;
