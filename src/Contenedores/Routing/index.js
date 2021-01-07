import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import APIFetching from '../APIFetching';
import APIFetchingFull from '../APIFetchingFull';
import ReactQueryExample from '../ReactQueryExample';
import Workers from '../Workers';
import Contentful from '../Contentful';
import Saludo3, { Saludo1 } from '../Ejemplojsx';
import Busquedausuarios from '../Optusuarios';
import Menu from './Menu';

function Routing() {
    return (
        <Switch>
            <Route exact path="/">
                {/*<Saludo1 text="saludos desde menu y routing"/>*/}
            </Route>
            <Route path="/jsx">
                <Saludo3 />
            </Route>
            <Route path="/buscarusus">
                <Busquedausuarios />
            </Route>   
            <Route path="/api">
                <APIFetching />
            </Route>                 
            <Route path="/apiffull">
                <APIFetchingFull />
            </Route>    
            <Route path="/workers">
                <Workers />
            </Route>                
            <Route path="/rquery">
                <ReactQueryExample />
            </Route>                                     
            <Route path="/cf">
                <Contentful />
            </Route>                 
        </Switch>
    );
}

export default Routing;
