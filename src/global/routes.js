import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Login from '../pages/login';
import SignUp from '../pages/signup';
import Dashboard from '../pages/dashboard';
import Home from '../pages/home';
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute';

import styled from 'styled-components';

const Header = styled.header`
    padding: 1rem;
    background-color: hsl(203, 57%, 27%);
`
const LinkNavegation = styled(NavLink)`
    color: #F3F0E1;
    text-decoration: none;
    margin-left: 20px;
    margin-right: 5px;
    padding: 10px;
    font-size: 1.143rem;

    &:hover {
        color: #f0cf77;
    }

    &.active {
        color: #f0cf77;
    }
`

const Content = styled.div`
    margin-top: 50px;
`

export const Routes = () => {
    return (
        <BrowserRouter>
            <Header>
                <LinkNavegation exact activeClassName="active" to="/">Home</LinkNavegation>
                {/* <LinkNavegation exact activeClassName="active" to="/signup">SignUp</LinkNavegation> */}
                <LinkNavegation activeClassName="active" to="/login">Login</LinkNavegation>
                <LinkNavegation activeClassName="active" to="/dashboard">Dashboard</LinkNavegation>
            </Header>
            <Content>
                <Switch>
                <Route exact path="/" component={Home} />
                <PublicRoute path="/login" component={Login} />
                <PublicRoute path="/signup" component={SignUp} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                </Switch>
            </Content>
        </BrowserRouter>
    )
}