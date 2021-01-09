import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Workers from '../Workers';
import Medcerts from '../Medcerts';
import Vermedcerts from '../Vermedcerts';
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

            <Route path="/vermedcerts">
                <Vermedcerts />
            </Route>

        </Switch>
    );
}

export default Routing; 
