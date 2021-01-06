import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { UsersContext } from '../Contenedor';
import Fila from './Fila';
import styled from 'styled-components';

const ButtonAdd = styled.button
    `color: white;
    background-color: blue;

    &:hover{
        color: yellow;
        background-color: black; 
    }
`;

function List() {
    {/*deprecado por uso del context para refrescar toda la vista
    const [usuarios, setUsuarios] = useState([]);
    UsersContext lo obtengo de Contenedor.js
    */}
    const {
        usuarios: [usuarios, setUsuarios],
        current: [, setCurrent],
    } = useContext(UsersContext);
    const [pagina, setPagina] = useState(65);

    const fetchUsuarios = useCallback(
        async () => {
            const { data } = 
            await 
            axios.get(`https://gorest.co.in/public-api/users?page=${pagina}`
            );
            console.log({ data });
            setUsuarios(data.data);
        }, [pagina, setUsuarios]);

    useEffect(() => {
        fetchUsuarios();
    }, [fetchUsuarios]);

    return (
        <div className="frmbox">
            <input type="number" className="paginacionctl" value={pagina} onChange={(event) => 
                setPagina(event.target.value)} />
                <ButtonAdd type="button" onClick={() => setCurrent({})}>
                    +Agregar
                </ButtonAdd>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Genero</th>
                        <th>Status</th>   
                        <th>Actions</th>                                                                                             
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => {
                        return <Fila usuario={usuario} 
                        key={usuario.id.toString()} />
                    })}
                    
                </tbody>
            </table>
            
        </div>
    )
}

export default List
