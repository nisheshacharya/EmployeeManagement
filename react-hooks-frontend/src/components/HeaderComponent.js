import React from 'react'
import "../App.css";

const HeaderComponent = () => {
    return (
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <h1>Employee Management</h1>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/employees">Employees</a></li>
              <li><a href="/departments">Departments</a></li>
              <li><a href="/reports">Reports</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
export default HeaderComponent
