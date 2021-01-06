import axios from 'axios';
import React, { useContext } from 'react';
import { UsersContext } from '../Contenedor';
import FormLayout from './FormLayout';

const tokenPersistencia = 
'cf8e9a6efb3418150327848372fd4a16ee1798b68f142e4a694d8465462dce84';

function Form() {
    const [usuarios, setUsuarios] = useContext(UsersContext);

    const postDatosFrmUsuarios = async (mascaraEstatus) => {
        const response = 
        await axios.post('https://gorest.co.in/public-api/users', 
        mascaraEstatus, 
        {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${tokenPersistencia}`,
            },
        });
        console.log({ response });
        setUsuarios((currentList) => {
            return [...currentList, response.data.data]
        })
    };

    /*almacena los valores que se digitaron en el formulario*/
    const onSubmit = (valoresfrm) => {
        {/*uso de spread property */}
        const mascaraEstatus = {
            ...valoresfrm,
            status: valoresfrm.status ? 'Active': 'Inactive'
        };
        console.log({ mascaraEstatus });

        postDatosFrmUsuarios(mascaraEstatus);
      
    };

    return (
        <div className="frmbox">
            {/*constante onSubmit sera enviado a FormLayout*/}
            <FormLayout onSubmit={onSubmit}/>
        </div>
    );
}

export default Form