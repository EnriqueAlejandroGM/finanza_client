import React, { Component } from 'react';
import Container from "react-bootstrap/Container"
import { getMovimientos, editMovimiento, setPropiedadMovimiento } from "../actions/movimientoActions"
import { connect } from "react-redux"
import MovimientoCard from "../components/movimientoCard"
import Spinner from "react-bootstrap/Spinner"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Input from "../components/input"

const idUsuario = 4;
const fecha_inicio = "2019-12-01"
const fecha_fin = "2019-12-31"

class Movimientos extends Component {

  constructor(props) {
    super(props)
    this.state = {
      form: false
    }
  }
  
  componentDidMount() {
    this.props.getMovimientos(idUsuario, fecha_inicio, fecha_fin)
  }

  renderMovimientos() {
    if(!this.props.movimientos) return <Spinner animation="border" variant="dark" />;
    if(!this.props.movimientos.lenght === 0) return <p> No hay movimientos para ese movimiento </p>
    return this.props.movimientos.map(movimiento => (<MovimientoCard key={movimiento.idMovimiento} movimiento={movimiento} />))
    }

  renderForm() {
      if(this.state.form && this.props.movimiento)
      return(
        <Form className='mt-4'>
          <Input label="Descripcion" value={this.props.descripcion} name="descripcion" type="text" onChange={e => this.props.setPropiedadMovimiento(e.target.name, e.target.value)} />
          <Input label="Monto" name="monto" value={this.props.monto} type="number" onChange={e => this.props.setPropiedadMovimiento(e.target.name, e.target.value)} />
          <Input label="Categoria" as="select" value={this.props.categoria} name="categoria" onChange={e => this.props.setPropiedadMovimiento(e.target.name, e.target.value)} />
          <Input label="Fecha" name="fecha"  type="date"  value={this.props.fecha}onChange={e => this.props.setPropiedadMovimiento(e.target.name, e.target.value)} />
          <Input label="Tipo" as="select" value={this.props.ingreso} name="ingreso" onChange={e => this.props.setPropiedadMovimiento(e.target.name, e.target.value)} />
          <Button onClick={() => {console.log(this.props.movimiento)}}> Subir </Button>
        </Form>
      )
  }

  render() {
    return(
      <Container fluid={true}>
        {this.renderMovimientos()}
        {this.renderForm()}
        <Button style={{ 
          position: "absolute",
          bottom: 10,
          width:"92%", 
          margin: "auto",
          display: "block" }}
          onClick= {() => {
            this.props.editMovimiento({idMovimiento: "nuevo", monto: "", categoria: "", ingreso: "", fecha: ""})
            this.setState({ form: !this.state.form })
            }}
          >
        Agregar Movimiento
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  movimientos: state.movimientos.movimientos,
  movimiento: state.movimientos.movimiento
});

export default connect(mapStateToProps, { getMovimientos, editMovimiento, setPropiedadMovimiento })(Movimientos);