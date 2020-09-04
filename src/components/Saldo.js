import React, {Fragment, useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import Error from './Error'

const Saldo = ({setDinero, setResto}) => {

    // State dinero
    const [presupuesto, setPresupuesto] = useState(0)

    // State error
    const [error, setError] = useState(false)

    // Funcion para cargar el presupuesto
    const cargarPresupuesto = e => {
        setPresupuesto(parseInt(e.target.value))
    }

    // Función submit del form
    const submitPresupuesto = e => {
        e.preventDefault()

        // Validacion
        if(presupuesto < 1 || isNaN(presupuesto)) {
             setError(true)
             return 
        }
        // Validacion Ok
        setError(false)
        setDinero(presupuesto)
        setResto(presupuesto)
    }

    return(
        <Fragment>
            <h6>Dinero disponible</h6>
            <Form
            onSubmit={submitPresupuesto}
            >
                <Form.Group>
                    <Form.Label>Presupuesto</Form.Label>
                    <Form.Control type='number' placeholder='Ingresa tu presupuesto' onChange={cargarPresupuesto}/>
                    <Form.Text className='text-muted'>
                        Acá tu dinero rinde más!
                    </Form.Text>
                </Form.Group>
                {error ? <Error alertaError='Colocá un monto superior a 0' /> : null}
                <Button block={true} variant='primary' type='submit'>Ingresar dinero</Button>
            </Form>
        </Fragment>
    )
}

export default Saldo