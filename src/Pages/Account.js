import React, { useState } from 'react';
import axios from 'axios';

const Account = () => {
    const [formData, setFormData] = useState({ username: '', password: '', confirmPassword: '' });
    const [message, setMessage] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const { username, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/register', { username, password });
            setMessage(res.data.message);
        } catch (err) {
            setMessage(err.response?.data?.message || 'Registration failed');
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { username, password } = formData;

        try {
            const res = await axios.post('http://localhost:5000/login', { username, password });
            setIsAuthenticated(true); 
            setUser(res.data.user || {});
            setMessage(res.data.message);
        } catch (err) {
            setMessage(err.response?.data?.message || 'Login failed');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUser(null);
        setMessage('You have logged out successfully!');
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#1a202c',
        color: 'white',
    };

    const formStyle = {
        backgroundColor: '#2d3748',
        padding: '20px',
        borderRadius: '8px',
        width: '320px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginBottom: '16px',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '16px',
        backgroundColor: '#4a5568',
        border: '1px solid #2d3748',
        borderRadius: '6px',
        color: 'white',
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        borderRadius: '6px',
        backgroundColor: '#3182ce',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
    };

    const buttonHoverStyle = {
        ...buttonStyle,
        backgroundColor: '#2b6cb0',
    };

    const messageStyle = {
        textAlign: 'center',
        marginTop: '16px',
        color: 'red',
    };

    return (
        <div style={containerStyle}>
            {!isAuthenticated ? (
                <>
                    <div style={formStyle}>
                        <h2 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '20px' }}>Register</h2>
                        <form onSubmit={handleRegister}>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            />
                            <button type="submit" style={buttonStyle}>Register</button>
                        </form>
                    </div>

                    <div style={formStyle}>
                        <h2 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '20px' }}>Login</h2>
                        <form onSubmit={handleLogin}>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            />
                            <button type="submit" style={buttonStyle}>Login</button>
                        </form>
                    </div>
                </>
            ) : (
                <div style={formStyle}>
                    <h2 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '20px' }}>
                        Welcome
                    </h2>
                    <button onClick={handleLogout} style={buttonStyle}>Logout</button>
                </div>
            )}

            {message && <p style={messageStyle}>{message}</p>}
        </div>
    );
};

export default Account;
