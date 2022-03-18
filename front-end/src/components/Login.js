import React, { useContext, useState } from 'react'
import '../css/Auth.css'
import AppContext from './AppContext'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Login() {
    const { dispatch } = useContext(AppContext);
    const [userInput, setUserInput] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();


    const handleChange = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const option = {
                method: 'post',
                url: '/api/v1/auth/login',
                data: userInput
            }
            const response = await axios(option);
            const {token, userName} = response.data.data;
            localStorage.setItem('token', token);
            dispatch({type: 'CURRENT_USER', payload: {userName}});
            navigate('/');
        } catch (error) {
            setErrorMessage(error.response.data.message);            
        }
    }
    
    return (
        <section className="auth-container">
            <form onSubmit={handleSubmit} className="auth-form">
                <h2>Enter Your Account</h2>
                {errorMessage && (
                    <div className="error-message">Error: {errorMessage}</div>
                )}
                <input type="email" name="email" placeholder="Email" required value={userInput.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" required value={userInput.password} onChange={handleChange} />
                <button className="btn" type="submit">Login</button>
            </form>
        </section>
    )
}
