import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button} from 'grommet';
const LoginButton = () => {

    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
    return (
        !isAuthenticated && !isLoading ?
            (<Button className="logButton" onClick={() => loginWithRedirect()}>
                Log In
            </Button>)
        :
            null
    )
}

export default LoginButton
