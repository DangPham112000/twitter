import React from 'react'
import '../css/Auth.css'

export default function Register() {
    return (
        <section className="auth-container">
            <form action="" className="auth-form">
                <h2>Register New Account</h2>
                <div className="error-message">Error: Your Password is not correct</div>
                <input type="text" name="name" placeholder="Name" id="" required />
                <input type="email" name="email" placeholder="Email" id="" required />
                <input type="password" name="password" placeholder="Password" id="" required />
                <button className="btn" type="submit">Register</button>
            </form>
        </section>
    )
}
