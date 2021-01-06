import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactQueryExample from '../ReactQueryExample';

class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1000,
      text: 'hola',
    };
  }

  componentDidMount() {
    console.log('Renderice');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Actualice');
  }

  componentWillUnmount() {
    console.log('Voy a ser destruido');
  }

  render() {
    return (
      <div>
        <p>Hola soy una clase</p>
        <p>{this.state.value * 5}</p>
        <p>{this.state.text.toUpperCase()}</p>
        <button onClick={() => this.setState({ value: 10000 })}>+</button>

        <ReactQueryExample />
      </div>
    );
  }
}

Lifecycle.propTypes = {};

export default Lifecycle;
