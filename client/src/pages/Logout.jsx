import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const LogoutButton = () => {
    const history = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post('/logout');
            // Clear JWT token from localStorage (or sessionStorage) if any
            localStorage.removeItem('token');
            // Redirect user to the login page
            history('/');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <button className ="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;
