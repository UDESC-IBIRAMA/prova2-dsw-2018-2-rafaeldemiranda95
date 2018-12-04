import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Componente_Relogio extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
}

class Relogio extends Component {
  render() {
    return (
   <div>

  <h2> {new Date().toLocaleTimeString()}</h2>

   


     
      </div>
    );
  }
}

export default Relogio;






