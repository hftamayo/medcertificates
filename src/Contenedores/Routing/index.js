import React from 'react';
import { Route, Switch } from "react-router-dom";
import Workers from '../Workers';
import PrivateRoute from './PrivateRoute';
import Profile from '../../Componentes/Profile';
import Home from '../../Componentes/Home';

function Routing() {
    return (
        <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <PrivateRoute path="/workers">
            <Workers />
            </PrivateRoute>
            <PrivateRoute path="/medcertificates">
                
            </PrivateRoute>
            <PrivateRoute path="/profile">
            <Profile />
            </PrivateRoute>
        </Switch>
    );
}

export default Routing; 
