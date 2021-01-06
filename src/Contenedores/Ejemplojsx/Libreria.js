import React, { useState } from 'react'

function Libreria() {
    const [value, setValue] = useState(true);
    return (
        <div>
            <p>Esta es una libreria</p>
            {value && <span>A es verdadero</span>}
            {!value && <span>A es falso</span>}

            <button type="button" onClick={event => 
            setValue(true)}>Verdadero</button>
            <button type="button" onClick={event => 
            setValue(false)}>Falso</button>            
        </div>
    );
}

export default Libreria
