import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Workers from '../Workers';
import Menu from './Menu';

function Routing() {
    return (
        <Switch>
            <Route exact path="/workers">
            <Workers />
            </Route>
            
            {/*<Route path="/workers">
                <Workers />
    </Route>*/}                
        </Switch>
    );
}

export default Routing; 
