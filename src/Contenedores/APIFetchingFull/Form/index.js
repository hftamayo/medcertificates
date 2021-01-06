import axios from 'axios';
import React, { useContext } from 'react';
import { UsersContext } from '../Contenedor';
import FormLayout from './FormLayout';

const tokenPersistencia = 
'cf8e9a6efb3418150327848372fd4a16ee1798b68f142e4a694d8465462dce84';

function Form() {
    const {
        usuarios: [, setUsuarios],
        current: [current],
    } = useContext(UsersContext);

    const isAddMode = !current.id;

    /* funcion para agregar registro */

     const postDatosFrmUsuarios = async (mascaraEstatus) => {
        const response = 
        await axios.post('https://gorest.co.in/public-api/users', 
        mascaraEstatus, 
        {
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                Authorization: `Bearer ${tokenPersistencia}`,
            },
        });
        console.log('resultado POST ', response.data.data);
        setUsuarios((currentList) => {
            return [...currentList, response.data.data]
        });
    };

    /* funcion para actualizar registro */
    const putDatosFrmUsuarios = async (payload) => {
        const response = await axios.put(
          `https://gorest.co.in/public-api/users/${current.id}`,
          payload,
          {
            headers: {
              Accept: 'application/json',
              'Content-type': 'application/json',
              Authorization: `Bearer ${tokenPersistencia}`,
            },
          }
        );
        console.log('resultado PUT', response.data.data);
        setUsuarios(function (currentList) {
          return currentList.map((usuarios) => {
            if ( usuarios.id === response.data.data.id) {
              return {
                ...usuarios,
                ...response.data.data,
              };
            }
            return usuarios;
          });
        });
      };

    /*almacena los valores que se digitaron en el formulario*/
    const onSubmit = (valoresfrm) => {
        {/*uso de spread property */}
        const mascaraEstatus = {
            ...valoresfrm,
            status: valoresfrm.status ? 'Active': 'Inactive'
        };
        console.log({ valoresfrm, mascaraEstatus, isAddMode });

        if (isAddMode){
            postDatosFrmUsuarios(mascaraEstatus);
        } else {
            putDatosFrmUsuarios(mascaraEstatus);
        }
    };

    return (
        <div className="frmbox">
            {/*constante onSubmit sera enviado a FormLayout*/}
            <FormLayout 
            onSubmit={onSubmit} 
            key={current.id}
            currentValues={current}
            />
        </div>
    );
}

export default Form