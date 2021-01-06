import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

function SearchProvider (props) {
    const [busqueda, setBusqueda] = useState('');

        return(
            <SearchContext.Provider value={[busqueda, setBusqueda]}>
                {props.children}
            </SearchContext.Provider>
        );
}

export default SearchProvider;