import axios from 'axios';
import React, { useContext } from 'react';
import { UsersContext } from '../Contenedor';

const 
token = 'cf8e9a6efb3418150327848372fd4a16ee1798b68f142e4a694d8465462dce84';

function Fila({ usuario }) {

    const {
        usuarios: [, setUsuarios],
        current: [, setCurrent],
    } = useContext(UsersContext);

    const deleteUser = async () => {
        const response = await axios.delete(
            `https://gorest.co.in/public-api/users/${usuario.id}`,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
        );//fin de la funcion delete de Axios

        console.log('comando DELETE: ', response);
        setUsuarios(function (currentUsers){
            return currentUsers.filter((currentUser) => {
                return currentUser.id !== usuario.id;
            });
        });//fin de setUsers
    };//fin de deleteUser

    return (
        <tr>
            <td>
                {usuario.id}
            </td>
            <td>
                {usuario.name}
            </td>
            <td>
                {usuario.email}
            </td>
            <td>
                {usuario.gender}
            </td>
            <td>
                {usuario.status}
            </td>    
            <td>
                <button onClick={() => setCurrent(usuario)}>E</button>
                <button onClick={() => deleteUser()}>X</button>                

            </td>                                            
        </tr>
    )
}

export default Fila
