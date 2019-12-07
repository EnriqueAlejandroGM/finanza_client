import React, { Component } from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"


class Input extends Component {
  render() {
    return (
        <Row className="align-items-center mb-3">
            <Col xs={3}>
              <Form.Label>{this.props.label}</Form.Label>
            </Col>
            <Col xs={9}>
              <Form.Control name={this.props.name} onChange={this.props.onChange} as={this.props.as ? this.props.as : undefined} />
            </Col>
          </Row>
    )
  }
}

export default Input; 