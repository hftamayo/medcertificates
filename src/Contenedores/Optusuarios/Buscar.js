import React, {useContext, useState} from 'react'
import { SearchContext } from './Context';

function Buscar() {
    const [busqueda, setBusqueda] = useContext(SearchContext);
    return (
        <div>
            <input type="text" onChange={(event) => 
            setBusqueda(event.target.value)} />
        </div>
    );
}

export default Buscar
