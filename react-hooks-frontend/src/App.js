import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/LoginComponent';
import Signup from './components/SignupComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import PrivateRoute from './components/PrivateRoute';
import HeaderComponent from './components/HeaderComponent';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
          <HeaderComponent/>
            <div className="container">
              
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <PrivateRoute path="/employees" component={ListEmployeeComponent} />
                    <PrivateRoute path="/add-employee" component={AddEmployeeComponent} />
                </Switch>
                
            </div>
            <Footer/>
        </Router>
    );
}

export default App;
