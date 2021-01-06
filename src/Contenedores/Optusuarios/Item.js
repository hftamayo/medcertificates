import React from 'react'

function Item({ listusuarios }) {
    return (
        <div className="Lista-usuario">
            <p>
                Usuario
            </p>
            <p>
                {listusuarios.codigo}
            </p>
            <p>
                {listusuarios.nombres}
            </p>
        </div>
    )
}

export default Item
