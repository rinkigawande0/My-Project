import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Contact Info */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: 0112cs201089@gmail.com</p>
          <p>Phone: +91 7489160833</p>
          <p>Address: Bhopal, MP, India</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 ShopNow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
