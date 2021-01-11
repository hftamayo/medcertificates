import React from 'react';
/*import { HashRouter, Route, Switch } from "react-router-dom";*/
import { Route, Switch } from "react-router-dom";
import Workers from '../Workers';
import Medcerts from '../Medcerts';
import Vermedcerts from '../Vermedcerts';
import PrivateRoute from './PrivateRoute';
/*import Profile from '../../Componentes/Profile';*/
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
            
            <PrivateRoute path="/medcerts/:idEmp/:fnEmp">
                <Medcerts />
            </PrivateRoute>
            
            <PrivateRoute path="/vermedcerts">
                <Vermedcerts />
            </PrivateRoute>
        </Switch>
    );
}

export default Routing; 
