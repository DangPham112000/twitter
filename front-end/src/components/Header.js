import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css'

export default function Header() {
    return (
        <header className="header">
            <h1 className="logo"><Link to="/">twitter</Link></h1>
            <nav>
                <ul className="main-nav">
                    <li><Link to="login">Login</Link></li>
                    <li><Link to="register">Register</Link></li>
                    <li><spans href="#" className="user-name">Hello, Dang</spans></li>
                    <li><a href="#">Sign out</a></li>
                </ul>
            </nav>
        </header>
    )
}
