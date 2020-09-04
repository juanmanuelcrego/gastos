import React from 'react'

const Gasto = ({gasto}) => (
    <li>
        <p>{gasto.nombre}
        <span>$ {gasto.monto}</span>
        </p>
        
    </li>
)

export default Gasto