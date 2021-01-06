import React from 'react'

function Fila({usuario}) {

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
        </tr>
    )
}

export default Fila
