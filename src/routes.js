import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CadProduto from './components/CadProduto';
import CadCliente from './components/CadCliente';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cad-cliente" component={CadCliente} />
                <Route path="/cad-produto" component={CadProduto} />
            </Switch>


        </BrowserRouter>
    )
}