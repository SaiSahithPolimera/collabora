import React from 'react'
import '../Styles/Home.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/privacy">Privacy Policy</a>
            </div>
            <div className="footer-copyright">
                &copy; {new Date().getFullYear()} Collabora
            </div>
        </footer>
    )
}

export default Footer