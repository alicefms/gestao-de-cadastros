
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


export default function ListaClientes() {

    const clientesString = localStorage.getItem('cliente')
    const clientesObjeto = JSON.parse(clientesString)
    const clientes = []




    clientesObjeto.map(e => {
        clientes.push(
            `Nome : ${e.nome} ;  
            Email : ${e.email} ;   
            Telefone : ${e.telefone} ;   
            Endereço : ${e.endereco}  .`)
    })


    return (

        <div className="novocadastro lista">
            <h2>Lista de clientes</h2>
            {clientes.map(a => <p>{a}</p>)}
            <Link to="/" className="button voltar">Voltar para Início</Link>
        </div>
    )
}
