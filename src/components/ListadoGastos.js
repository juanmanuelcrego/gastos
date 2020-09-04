import React, {Fragment} from 'react'
import Gasto from './Gasto'
const ListadoGastos = ({gastos}) => (
        <Fragment>
        <h2>Gastos</h2>
            {gastos.map(gasto=> (
<Gasto 
    key={gasto.id}
    gasto={gasto}
/>
            ))}
        </Fragment>
    )

export default ListadoGastos