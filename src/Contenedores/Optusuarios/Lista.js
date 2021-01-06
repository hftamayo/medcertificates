import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from './Context';
import Item from './Item';

const LISTAUSUARIOS = [
    {codigo: 1, nombres: "Lionel"},
    {codigo: 2, nombres: "Mark"},
    {codigo: 3, nombres: "Jordi"},    
    {codigo: 4, nombres: "Ronald"},    
    {codigo: 5, nombres: "Ousmane"},    
    {codigo: 6, nombres: "Martin"},    
    {codigo: 7, nombres: "Sergi"},    
];

function Lista({}) {
    const [busqueda, setBusqueda] = useContext(SearchContext);
    const [usuarios, setUsuarios] = useState(LISTAUSUARIOS);

    useEffect(() => {
        const lstUsuariosFiltrados = LISTAUSUARIOS.filter(usuario => {
            return usuario.nombres.toLowerCase()
            .includes(busqueda.toLowerCase());
        });

        setUsuarios(lstUsuariosFiltrados);
        console.log('lista de usuarios filtrados', lstUsuariosFiltrados);


        return() => {
            console.log('se va a desmontar');
        }

    }, [busqueda])


    return (
        <div  className="Lista-usuarios">
            {
                usuarios.map((listusuarios) => {
                    return <Item listusuarios={listusuarios} 
                    key={listusuarios.codigo.toString()} />;
            })}
        </div>
    );
}

export default Lista
