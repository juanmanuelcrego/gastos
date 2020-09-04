import React, {Fragment, useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import Error from './Error'
import shortid from 'shortid'

const FormGastos = ({nuevoGasto, setCrearGasto}) => {

    const [nombre, setNombre] = useState('')
    const [monto, setMonto] = useState(0)
    const [error, setError] =useState(false)

    const agregarGasto = e => {
        e.preventDefault()

        // Validar
        if(monto < 1 || isNaN(monto) || nombre.trim() === '' ) {
            setError(true)
            return
        }

        setError(false)

        // crear gastos
        const gasto = {
            nombre,
            monto,
            id: shortid.generate()
        }

        // pasar gasto al componente principal
        nuevoGasto(gasto)
        setCrearGasto(true)

        // Resetear form
        setNombre('')
        setMonto(0)
    }

    return(
        <Fragment>
            <Form 
                onSubmit={agregarGasto}
            >
            <Form.Label>Agregar gasto</Form.Label>
                <Form.Group>
                    <Form.Control type='text' placeholder='¿En qué gastaste?' value={nombre} onChange={e => setNombre(e.target.value)} />
                </Form.Group>
            <Form.Label>Monto</Form.Label>
                <Form.Group>
                    <Form.Control type='number' placeholder='Ejemplo: $500' value={monto} onChange={e => setMonto( parseInt(e.target.value))} />
                </Form.Group>
                {error ? <Error alertaError='Todos los campos son obligatorios!' /> : null}
                <Button block={true} variant='primary' type='submit'>Agregar gasto</Button>
            </Form>
        </Fragment>
    )
}

export default FormGastos