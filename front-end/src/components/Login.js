import React from 'react'
import '../css/Auth.css'

export default function Login() {
    return (
        <section className="auth-container">
            <form action="" className="auth-form">
                <h2>Enter Your Account</h2>
                <div className="error-message">Error: Your Password is not correct</div>
                <input type="email" name="email" placeholder="Email" id="" required />
                <input type="password" name="password" placeholder="Password" id="" required />
                <button className="btn" type="submit">Login</button>
            </form>
        </section>
    )
}
