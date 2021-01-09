import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Workers from '../Workers';
import Medcerts from '../Medcerts';
import Menu from './Menu';

function Routing() {
    return (
        <Switch>
            <Route exact path="/workers">
            <Workers />
            </Route>
            
            <Route path="/medcerts">
                <Medcerts />
            </Route>
        </Switch>
    );
}

export default Routing; 
