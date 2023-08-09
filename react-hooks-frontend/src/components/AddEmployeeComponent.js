import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import "../App.css"

const AddEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [department, setDepartment] = useState('');
    const history = useHistory();
    const { id } = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = { firstName, lastName, emailId, department };

        if (id) {
            EmployeeService.updateEmployee(id, employee).then(() => {
                history.push('/employees');
            }).catch(error => {
                console.log(error);
            });
        } else {
            EmployeeService.createEmployee(employee).then(() => {
                history.push('/employees');
            }).catch(error => {
                console.log(error);
            });
        }
    };

    useEffect(() => {
        if (id) {
            EmployeeService.getEmployeeById(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmailId(response.data.emailId);
                setDepartment(response.data.department);
            }).catch(error => {
                console.log(error);
            });
        }
    }, [id]);

    const title = () => {
        return id ? <h2 className="text-center my-4">Update Employee</h2> : <h2 className="text-center my-4">Add Employee</h2>;
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg">
                        <div className="card-header bg-primary text-white">
                            {title()}
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-3">
                                    <label className="form-label">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label className="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label className="form-label">Department</label>
                                    <input
                                        type="text"
                                        placeholder="Enter department"
                                        name="department"
                                        className="form-control"
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label className="form-label">Email Id</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email Id"
                                        name="emailId"
                                        className="form-control"
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)}
                                    />
                                </div>

                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
                                    <Link to="/employees" className="btn btn-danger">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEmployeeComponent;
