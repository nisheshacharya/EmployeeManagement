import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import "../App.css";

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees();
    }, []);

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then(() => {
            getAllEmployees();
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="container mt-5, employeeList-container"  >
            <div className="row">
                <div className="col-lg-12">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2 className="text-center">Employee List</h2>
                        <Link to="/add-employee" className="btn btn-primary">Add Employee</Link>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Employee ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email ID</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee) => (
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <Link to={`/edit-employee/${employee.id}`} className="btn btn-info">Update</Link>
                                            <button
                                                className="btn btn-danger ms-2"
                                                onClick={() => deleteEmployee(employee.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ListEmployeeComponent;
