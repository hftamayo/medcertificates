import React, { useState } from 'react'
import Buscar from './Buscar';
import SearchProvider from './Context';
import Lista from './Lista'


function Busquedausuarios() {
    return (
        <div>
            <p>Lista de usuarios</p>
            <SearchProvider>
                <Buscar />
                <Lista />
            </SearchProvider>
        </div>
    );
}

export default Busquedausuarios
