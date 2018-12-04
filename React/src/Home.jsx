import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
   <div>
            <Link to="/relogio"><p>Clique aqui para ir para Relógio</p></Link>
            <Link to="/formulario"><p>Clique aqui para ir para o Formulário</p></Link>

    </div>
    );
  }
}

export default Home;


