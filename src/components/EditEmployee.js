// EditEmployee.js
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editEmployee } from '../redux/actions/employeeActions';

const EditEmployee = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector(state => state.employee.employees);

  const initialEmployeeState = {
    EmployeeId: '',
    EmpName: '',
    Department: '',
    Salary: '',
    PhoneNumber: '',
    EmailId: '',
    Address: '',
    State: '',
  };

  const [editedEmployee, setEditedEmployee] = useState(initialEmployeeState);

  useEffect(() => {
    const employee = employees.find(emp => emp.EmployeeId === parseInt(id));
    if (employee) {
      setEditedEmployee(employee);
    }
  }, [employees, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee({ ...editedEmployee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editEmployee(editedEmployee));
    // No need to update localStorage here since it's managed by employeeReducer
    navigate('/');
  };

  return (
    <div className="addEmployeeContainer">
      <h2 className="addEmployeeTitle">Edit Employee</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="employeeId">
          <Form.Label className="formLabel">Employee ID</Form.Label>
          <Form.Control
            type="text"
            name="EmployeeId"
            value={editedEmployee.EmployeeId}
            onChange={handleChange}
            className="formControl"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="empName">
          <Form.Label className="formLabel">Employee Name</Form.Label>
          <Form.Control
            type="text"
            name="EmpName"
            value={editedEmployee.EmpName}
            onChange={handleChange}
            className="formControl"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="department">
          <Form.Label className="formLabel">Department</Form.Label>
          <Form.Control
            type="text"
            name="Department"
            value={editedEmployee.Department}
            onChange={handleChange}
            className="formControl"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="salary">
          <Form.Label className="formLabel">Salary</Form.Label>
          <Form.Control
            type="text"
            name="Salary"
            value={editedEmployee.Salary}
            onChange={handleChange}
            className="formControl"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label className="formLabel">Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="PhoneNumber"
            value={editedEmployee.PhoneNumber}
            onChange={handleChange}
            className="formControl"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="emailId">
          <Form.Label className="formLabel">Email ID</Form.Label>
          <Form.Control
            type="email"
            name="EmailId"
            value={editedEmployee.EmailId}
            onChange={handleChange}
            className="formControl"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label className="formLabel">Address</Form.Label>
          <Form.Control
            type="text"
            name="Address"
            value={editedEmployee.Address}
            onChange={handleChange}
            className="formControl"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="state">
          <Form.Label className="formLabel">State</Form.Label>
          <Form.Control
            type="text"
            name="State"
            value={editedEmployee.State}
            onChange={handleChange}
            className="formControl"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default EditEmployee;
