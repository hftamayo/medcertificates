import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { UsersContext } from '../Contenedor';
import Fila from './Fila';

function List() {
    {/*deprecado por uso del context para refrescar toda la vista
    const [usuarios, setUsuarios] = useState([]);
    UsersContext lo obtengo de Contenedor.js
    */}
    const [usuarios, setUsuarios] = useContext(UsersContext);
    const [pagina, setPagina] = useState(68);

    const fetchUsuarios = useCallback(
        async () => {
            const { data } = 
            await 
            axios.get(`https://gorest.co.in/public-api/users?page=${pagina}`
            );
            console.log({ data });
            setUsuarios(data.data);
        },
        [pagina, setUsuarios]
    );

    useEffect(() => {
        fetchUsuarios();
    }, [fetchUsuarios]);

    return (
        <div className="frmbox">
            <input type="number" value={pagina} onChange={(event) => 
                setPagina(event.target.value)} />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Genero</th>
                        <th>Status</th>                                                                                                
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
