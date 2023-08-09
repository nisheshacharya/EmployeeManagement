import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../services/AuthService';

// Protect routes using JWT token
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                const currentUser = AuthService.getCurrentUser();
                if (!currentUser) {
                    // If no user is logged in, redirect to login page
                    return <Redirect to="/login" />;
                }
                return <Component {...props} />;
            }}
        />
    );
};

export default PrivateRoute;
