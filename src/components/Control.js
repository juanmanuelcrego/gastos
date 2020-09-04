import React, {Fragment} from 'react'

const Control = ({dinero, resto}) => {
    return(
        <Fragment>
            <div>
                Presupuesto: $ {dinero}
            </div>
            <div>
                Restante: $ {resto}
            </div>
        </Fragment>
    )
}

export default Control