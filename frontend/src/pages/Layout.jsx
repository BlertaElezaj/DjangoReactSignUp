import React from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Your Company. All rights reserved. | <Link to="/privacy">Privacy Policy</Link></p>
      </footer>
    </div>
  );
}
