import React, { useState } from 'react';
import '../Css/Footer.css';  
import { Link } from 'react-router-dom';

const Footer = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div className="footer">
      <div className="container">
        <section className="footer-top">
          <div className="social-icons">
            <a href="https://www.facebook.com/ITECHDIGITALFORENSICSINDIA/" target="_blank" rel="noopener noreferrer" className="icon">
              <i className="fa fa-facebook"></i> Facebook
            </a>
            <a href="https://twitter.com/ItechForensics" target="_blank" rel="noopener noreferrer" className="icon">
              <i className="fa fa-twitter"></i> Twitter
            </a>
            <a href="https://www.linkedin.com/company/itech-digital-forensics-pvt-ltd/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="icon">
              <i className="fa fa-linkedin"></i> Linkedin
            </a>
            <a href="https://www.instagram.com/itechforensics/" target="_blank" rel="noopener noreferrer" className="icon">
              <i className="fa fa-instagram"></i> Instagram
            </a>
            <a href="https://www.youtube.com/channel/UCj5-XB9Q3J6qcMp4nx-7_1w?view_as=subscriberhttps://www.instagram.com/itechforensics/" target="_blank" rel="noopener noreferrer" className="icon">
              <i className="fa fa-youtube"></i> Youtube
            </a>
          </div>
        </section>
        <section className="footer-links">
          <div className="footer-nav">
            <ul>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={dropdownOpen === 1}
                  onClick={() => toggleDropdown(1)}
                >
                  Company
                </a>
                <ul className={`dropdown-menu ${dropdownOpen === 1 ? "show" : ""}`} aria-labelledby="navbarDropdownMenuLink">
                  <li><Link to="/about-us" className="dropdown-item">About Us</Link></li>
                  <li><Link to="/careers" className="dropdown-item">Careers</Link></li>
                  <li><Link to="/contact" className="dropdown-item">Contact Us</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section className="footer-bottom">
          <p>© {new Date().getFullYear()} ITECH. All rights reserved.</p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
