import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CadProduto from './components/CadProduto';
import CadCliente from './components/CadCliente';
import ListaClientes from './components/ListaClientes';
import ListaProdutos from './components/ListaProdutos';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cad-cliente" component={CadCliente} />
                <Route path="/cad-produto" component={CadProduto} />
                <Route path="/lista-clientes" component={ListaClientes} />
                <Route path="/lista-produtos" component={ListaProdutos} />

            </Switch>


        </BrowserRouter>
    )
}