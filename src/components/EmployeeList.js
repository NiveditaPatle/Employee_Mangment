// EmployeeList.js

import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import { Table, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee } from '../redux/actions/employeeActions';
// import { PDFDownloadLink, Document, Page, View, Text } from '@react-pdf/renderer';



const EmployeeList = () => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employee.employees);

  const columns = useMemo(
    () => [
      { Header: 'Employee ID', accessor: 'EmployeeId' },
      { Header: 'Employee Name', accessor: 'EmpName' },
      { Header: 'Department', accessor: 'Department' },
      { Header: 'Salary', accessor: 'Salary' },
      { Header: 'Phone Number', accessor: 'PhoneNumber' },
      { Header: 'Email ID', accessor: 'EmailId' },
      { Header: 'Address', accessor: 'Address' },
      { Header: 'State', accessor: 'State' },
      {
        Header: 'Edit',
        accessor: 'edit',
        Cell: ({ row }) => (
          <Button variant="info" as={Link} to={`/edit/${row.original.EmployeeId}`}>
            Edit
          </Button>
        ),
      },
      {
        Header: 'Delete',
        accessor: 'delete',
        Cell: ({ row }) => (
          <Button variant="danger" onClick={() => handleDelete(row.original.EmployeeId)}>
            Delete
          </Button>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
    gotoPage,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
  } = useTable(
    {
      columns,
      data: employees,
      initialState: { pageIndex: 0, pageSize: 5 }, // Initial pagination settings
    },
    useGlobalFilter,
    useSortBy,
    usePagination // Enable pagination functionality
  );

  const handleDelete = (employeeId) => {
    dispatch(deleteEmployee(employeeId)); // Dispatch deleteEmployee action with employeeId
  };

  return (
    <div className="employee-list">
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search by employee name..."
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </Form.Group>
      <Table striped bordered hover {...getTableProps()} responsive className="custom-table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* Pagination UI */}
      <div className="pagination">
        <Button variant="outline-secondary" onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </Button>{' '}
        <span>
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <Button variant="outline-secondary" onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </Button>{' '}
      </div>

      {/* <div className="pdf-download">
        <PDFDownloadLink document={<EmployeeListPDF employees={employees} />} fileName="employee_list.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
        </PDFDownloadLink>
      </div> */}
    </div>
  );
};

export default EmployeeList;
