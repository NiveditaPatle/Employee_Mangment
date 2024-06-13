// AddEmployee.js

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/actions/employeeActions'; // Import addEmployee action
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation

const AddEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook from React Router

  const initialEmployeeState = {
    EmployeeId: '', // You may generate a unique ID, or handle this in the reducer
    EmpName: '',
    Department: '',
    Salary: '',
    PhoneNumber: '',
    EmailId: '',
    Address: '',
    State: '',
  };

  const [newEmployee, setNewEmployee] = useState(initialEmployeeState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(newEmployee)); // Dispatch action to add new employee
    setNewEmployee(initialEmployeeState); // Reset form after adding employee
    navigate('/employees'); // Navigate to EmployeeList component
  };

  return (
    <div className="addEmployeeContainer">
      <h2 className="addEmployeeTitle">Add Employee</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="employeeId">
          <Form.Label className="formLabel">Employee ID</Form.Label>
          <Form.Control
            type="text"
            name="EmployeeId"
            value={newEmployee.EmployeeId}
            onChange={handleChange}
            className="formControl"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="empName">
          <Form.Label className="formLabel">Employee Name</Form.Label>
          <Form.Control
            type="text"
            name="EmpName"
            value={newEmployee.EmpName}
            onChange={handleChange}
            className="formControl"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="department">
          <Form.Label className="formLabel">Department</Form.Label>
          <Form.Control
            type="text"
            name="Department"
            value={newEmployee.Department}
            onChange={handleChange}
            className="formControl"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="salary">
          <Form.Label className="formLabel">Salary</Form.Label>
          <Form.Control
            type="text"
            name="Salary"
            value={newEmployee.Salary}
            onChange={handleChange}
            className="formControl"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label className="formLabel">Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="PhoneNumber"
            value={newEmployee.PhoneNumber}
            onChange={handleChange}
            className="formControl"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="emailId">
          <Form.Label className="formLabel">Email ID</Form.Label>
          <Form.Control
            type="email"
            name="EmailId"
            value={newEmployee.EmailId}
            onChange={handleChange}
            className="formControl"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label className="formLabel">Address</Form.Label>
          <Form.Control
            type="text"
            name="Address"
            value={newEmployee.Address}
            onChange={handleChange}
            className="formControl"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="state">
          <Form.Label className="formLabel">State</Form.Label>
          <Form.Control
            type="text"
            name="State"
            value={newEmployee.State}
            onChange={handleChange}
            className="formControl"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submitButton">
          Add Employee
        </Button>
      </Form>
    </div>
  );
};

export default AddEmployee;
