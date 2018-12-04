import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import App from './App';


export default class Rotas extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                  
                    
                </Switch>
            </div>
        );
    }
}