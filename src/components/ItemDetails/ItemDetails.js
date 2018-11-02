import React, {Component } from 'react';

import { Row, Col ,Button, Collapse, Well, Media } from 'react-bootstrap';

export default class ItemDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      open:false,
    };
  }
  render() {
    return (
      <div>
        <Button
          className = "item-details-button"
          bsStyle="link"
          onClick={() => this.setState({open: !this.state.open})}>
          {this.state.open === false ? `See` : `Hide `} item details
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Media>
                <Media.Left>
                  <img
                    width={100}
                    height={100}
                    alt="thumbnail"
                    src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Random-512.png"
                  />
                </Media.Left>
                <Media.Body>
                  <p>Random title</p>
                  <Row classname = "show=grid">
                    <Col md={6}>
                      <strong>{`$${this.props.price}`}</strong>
                      <br/>
                      <strong className ="price-strike">
                        {`$${this.props.price}`}
                      </strong>
                    </Col>
                    <Col md={6}> Qty: 1 </Col>
                  </Row>
                </Media.Body>
              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}