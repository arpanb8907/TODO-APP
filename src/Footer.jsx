import React from 'react';

// Make sure Font Awesome is properly imported
// Example: Add this in your index.html or install via npm and import in your project

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-2">
      <div className="container text-center">
        {/* App Info */}
        <p className="mb-1" style={{ fontSize: '0.8rem' }}>
          © 2024 To-Do List App. All rights reserved.
        </p>

        {/* Links and Actions */}
        <ul className="list-inline mb-0" style={{ fontSize: '0.8rem' }}>
          <li className="list-inline-item">
            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Privacy Policy</a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Terms of Service</a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Support</a>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="mt-2">
          <a href="#" className="text-white mx-1" style={{ fontSize: '18px' }}>
            <i className="fab fa-facebook"></i> {/* Facebook Icon */}
          </a>
          <a href="#" className="text-white mx-1" style={{ fontSize: '18px' }}>
            <i className="fab fa-twitter"></i> {/* Twitter Icon */}
          </a>
          <a href="#" className="text-white mx-1" style={{ fontSize: '18px' }}>
            <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
          </a>
        </div>
      </div>
    </footer>
  );
}
