import axios from 'axios';
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router';
import '../css/Auth.css'
import AppContext from './AppContext';

export default function Register() {
    const {dispatch} = useContext(AppContext);
    
    const [userInput, setUserInput] = useState({ name: '', email: '', password: '' });
    const [errorMessages, setErrorMessages] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const option = {
                method: 'POST',
                url: '/api/v1/auth/register',
                data: userInput
            }
            const res = await axios(option);
            const { token, userName } = res.data.data
            localStorage.setItem('token', token);
            dispatch({ type: 'CURRENT_USER', payload: { userName } });
            navigate('/');
        } catch (error) {
            setErrorMessages(error.response.data.message);
        }
    }
    
    return (
        <section className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>Register New Account</h2>
                {errorMessages && (Array.isArray(errorMessages) 
                    ? errorMessages.map((errorMessage, index) => (<div key={index} className="error-message">Error: {errorMessage}</div>))
                    : (<div className="error-message">Error: {errorMessages}</div>)
                )}
                <input type="text" name="name" placeholder="Name" id="" value={userInput.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" id="" value={userInput.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" id="" value={userInput.password} onChange={handleChange} />
                <button className="btn" type="submit">Register</button>
            </form>
        </section>
    )
}
