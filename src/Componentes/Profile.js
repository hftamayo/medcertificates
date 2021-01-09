import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function Profile() {
    const { user, isLoading} = useAuth0();

    return (
    <div className="mainBody">
        {!isLoading  ?
            (<div>
                <img src={user.picture} alt={user.name} />
                <h2>Nombre de usuario: {user.name}</h2>
                <h3>Correo: {user.email}</h3>
            </div>)
        :
            <div><h2>Loading...</h2></div>
        }
    </div>
    )
}
export default Profile
