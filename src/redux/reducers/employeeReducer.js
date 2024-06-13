// employeeReducer.js
import { ADD_EMPLOYEE, EDIT_EMPLOYEE, DELETE_EMPLOYEE } from '../actions/employeeActions';
import { employees } from '../../employees';

// Load initial state from localStorage if available, fallback to default
const storedEmployees = JSON.parse(localStorage.getItem('employees'));
const initialState = {
  employees: storedEmployees || employees,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      const updatedEmployeesAdd = [...state.employees, action.payload];
      localStorage.setItem('employees', JSON.stringify(updatedEmployeesAdd));
      return {
        ...state,
        employees: updatedEmployeesAdd,
      };
    case EDIT_EMPLOYEE:
      const updatedEmployeesEdit = state.employees.map(emp =>
        emp.EmployeeId === action.payload.EmployeeId ? action.payload : emp
      );
      localStorage.setItem('employees', JSON.stringify(updatedEmployeesEdit));
      return {
        ...state,
        employees: updatedEmployeesEdit,
      };
    case DELETE_EMPLOYEE:
      const updatedEmployeesDelete = state.employees.filter(emp => emp.EmployeeId !== action.payload);
      localStorage.setItem('employees', JSON.stringify(updatedEmployeesDelete));
      return {
        ...state,
        employees: updatedEmployeesDelete,
      };
    default:
      return state;
  }
};

export default employeeReducer;
