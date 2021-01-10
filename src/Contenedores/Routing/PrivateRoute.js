import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect, Route } from 'react-router-dom';

/* Crea una ruta privada, donde si el usuario esta autenticado, muestra el link seleccionado */
function PrivateRoute({children, ...rest}) {
    const {isAuthenticated, isLoading} = useAuth0()

    return (
        <Route {...rest}>
            {
                /* Si no esta cargando y el usuario ya se autentico, mostrara la ruta, de otra forma manda a la pagina Home*/
                !isLoading && isAuthenticated ?
                (children)
                :
                (<Redirect to = {{pathname: '/'}}/>)
            }
        </Route>
    )
}

export default PrivateRoute
