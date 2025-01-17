// employeeActions.js
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

export const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee,
});

export const editEmployee = (employee) => ({
  type: EDIT_EMPLOYEE,
  payload: employee,
});

export const deleteEmployee = (employeeId) => ({
  type: DELETE_EMPLOYEE,
  payload: employeeId,
});
