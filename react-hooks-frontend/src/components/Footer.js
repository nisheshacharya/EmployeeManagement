import React from 'react';
import "../App.css";

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section about">
            <h3>Employee Management System</h3>
            <p>Manage your workforce efficiently and effortlessly. Our system allows you to track employee records, monitor performance, and streamline HR processes.</p>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/employees">Employees</a></li>
              <li><a href="/departments">Departments</a></li>
              <li><a href="/reports">Reports</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: support@employeemanagement.com</p>
            <p>Phone: +1 800 123 4567</p>
            <div className="socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Employee Management System | All Rights Reserved</p>
        </div>
      </footer>
    );
  };
export default Footer;
