import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './Sidebar.css'; // Import the CSS file for Sidebar

const Sidebar = () => {
  return (
    <Nav >
      <div >
        <Nav.Item lassName="sidebar-item">
          <Nav.Link as={Link} to="/employees" className="nav-link">Employee List</Nav.Link>
        </Nav.Item>
        <Nav.Item lassName="sidebar-item">
          <Nav.Link as={Link} to="/add" className="nav-link">Add Employee</Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default Sidebar;
