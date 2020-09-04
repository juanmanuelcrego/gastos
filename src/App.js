import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Saldo from "./components/Saldo";
import FormGastos from "./components/FormGastos"
import ListadoGastos from "./components/ListadoGastos"
import Control from './components/Control'

function App() {

  // State dinero
  const [dinero, setDinero] = useState(0)
  const [resto, setResto] = useState(0)

  const [gastos, setGastos] = useState([])

  // State para el useEffect
  const [gasto, setGasto] = useState({})

  // State para crear los gastos
  const [crearGasto, setCrearGasto] = useState(false)

  // useEffect para actualizar el restante
  useEffect(()=> {
    if(crearGasto) {
      setGastos([
        ...gastos,
        gasto
      ])

      // resta del presupuesto actual
      const dineroRestante = resto - gasto.monto
      // Le paso el calculo de la resta al state de dinero
      setResto(dineroRestante)

      // reseteo
      setCrearGasto(false)
    }
  }, [gasto])



  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
          <Control 
            dinero = {dinero}
            resto = {resto}
          />
            <Saldo 
              setDinero={setDinero}
              setResto={setResto}
            />
          </Col>
          <Col>
          <FormGastos
            nuevoGasto = {setGasto}
            setCrearGasto = {setCrearGasto}
          />
          </Col>
        </Row>
        <Row>
          <Col>
          <ListadoGastos
           gastos = {gastos}
          />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
