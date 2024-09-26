import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import AuthService from '../services/AuthService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();

        AuthService.login(username, password).then(
            () => {
                history.push('/employees'); // Redirect to employees list
                window.location.reload(); // Refresh to apply route protections
            },
            error => {
                const errorMessage = 
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
                setErrorMessage(errorMessage);
            }
        );
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Login</h2>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <form onSubmit={handleLogin}>
                <div className="form-group mb-3">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className="btn btn-primary btn-block">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
};

export default Login;
