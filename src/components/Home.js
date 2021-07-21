import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';


export default function Home() {


    return (

        <div className="novocadastro">
            <h2>Escolha qual ação deseja: </h2>

            <Link to="/cad-cliente" className="button">Cadastrar Cliente</Link>
            <Link to="/cad-produto" className="button">Cadastrar Produto</Link>

        </div>
    )
}