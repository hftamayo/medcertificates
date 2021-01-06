import React, { createContext, useState } from 'react';

export const UsersContext = createContext();

function UsersProvider (props) {
    const [usuarios, setUsuarios] = useState([]);
    const [current, setCurrent] = useState({});

    return(
        <UsersContext.Provider 
        value={{usuarios: [usuarios, setUsuarios], 
        current: [current, setCurrent] }} >
        {props.children}
    </UsersContext.Provider>
    );
}

export default UsersProvider;
