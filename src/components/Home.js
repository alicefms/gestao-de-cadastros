import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';


export default function Home() {


    return (

        <div className="buttons">
            <h2>Escolha qual ação deseja: </h2>

            <Link to="/cad-cliente" className="button">Cadastrar Cliente</Link>
            <Link to="/cad-produto" className="button">Cadastrar Produto</Link>
            <Link to="/lista-clientes" className="button">Listar Clientes</Link>
            <Link to="/lista-produtos" className="button">Listar Produtos</Link>

        </div>
    )
}