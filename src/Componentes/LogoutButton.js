import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Button, Box} from 'grommet';
const LogoutButton = () => {

    const { isAuthenticated, logout, user } = useAuth0();
    return (
        isAuthenticated ?
            (
                <Box direction="row"  gap="small">
                    <Avatar src = {user.picture} title = {user.name} size = 'medium'/>
                    <Button className="logButton" onClick={() => logout({returnTo: window.location.origin})}>LogOut</Button>
                </Box>
            )
        :
            null
    )
}

export default LogoutButton
