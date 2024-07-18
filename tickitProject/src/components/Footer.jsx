import React from 'react'
import logo from '../../tickit-high-resolution-logo-transparent.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
              <img src={logo} alt='Tickit Logo' className='footer-logo' />
            <div className="footer-section">
                <h4>Contact Us</h4>
                <p>Email: hr@tickit.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Wayne St, Gotham, New York</p>
            </div>
            <div className="footer-section">
                <h4>Follow Us</h4>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="footer-section">
                <h4>Quick Links</h4>
                <a href="/about">About Us</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
            </div>
            <div className="footer-bottom allrights">
                <p>&copy; {new Date().getFullYear()} tickit. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
