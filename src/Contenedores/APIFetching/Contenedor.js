import React, { createContext, useState } from 'react';

export const UsersContext = createContext();

function UsersProvider (props) {
    const [usuarios, setUsuarios] = useState([]);

    return(
        <UsersContext.Provider 
        value={[usuarios, setUsuarios]} >
        {props.children}
    </UsersContext.Provider>
    );
}

export default UsersProvider;
