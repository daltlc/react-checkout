import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import SubTotal from './components/Subtotal/Subtotal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total:100,
    };
  }
  render() {
    return (
      <div className="container">
        <Grid className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
        </Grid>
      </div>
    );
  }
}

export default App;
