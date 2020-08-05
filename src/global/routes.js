import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Login from '../pages/login';
import SignUp from '../pages/signup';
import Dashboard from '../pages/dashboard';
import Home from '../pages/home';
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute';

import '../styles/routes.css'

export const Routes = () => {
    return (
        <BrowserRouter>
            <div className="header">
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                {/* <NavLink exact activeClassName="active" to="/signup">SignUp</NavLink> */}
                <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Acesso sem token)</small>
                <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Acesso com token)</small>
            </div>
            <div className="content">
                <Switch>
                <Route exact path="/" component={Home} />
                <PublicRoute path="/login" component={Login} />
                <PublicRoute path="/signup" component={SignUp} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}