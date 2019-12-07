import React, { Component } from 'react'
import Card from "react-bootstrap/card"
import Row from "react-bootstrap/row"
import Col from "react-bootstrap/col"

class MovimientoCard extends Component{
  getIcon(categoria) {
    switch(categoria) {
      case 1: 
      return "fas fa-film";
      case 2: 
      return "fas fa-utensils";
      case 3:
      return "fas fa-car";
      default:
      return "";
    }
  }
  renderMonto() {
  if(this.props.ingreso) return <p className="text-success mb-0">{"$"}{this.props.movimiento.monto}</p>;
  return <p className="text-danger mb-0">{"-$"}{this.props.movimiento.monto}</p>;
  }

  render() {
    return(
      <Card className="p-2 mb-2 shadow-sm border-0 font-weight-bold">
        <Row className="align-items-center mr-0">
          <Col xs={2}>
            <i className={"fa-2x "+this.getIcon(this.props.movimiento.categoria)}></i>
          </Col>
          <Col xs={6}>
            {this.props.movimiento.nombre}
          </Col>
          <Col xs={3}>
            {this.renderMonto()}
          </Col>
          <Col xs={1} className="pl-0">
          <i className="fa fa-chevron-down"> </i>
          </Col>
        </Row>
      </Card>
    )
  }
}

export default MovimientoCard