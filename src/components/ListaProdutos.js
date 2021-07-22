import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


export default function ListaProdutos() {

    const produtosString = localStorage.getItem('produto')
    const produtosObjeto = JSON.parse(produtosString)
    const produtos = []




    produtosObjeto.map(e => {
        produtos.push(
            `Nome : ${e.nome} ;  
            Tipo : ${e.tipo} ;   
            Referência : ${e.ref} ;   
            Quantidade : ${e.qte}  .`)
    })


    return (

        <div className="novocadastro lista">
            <h2>Lista de produtos</h2>
            {produtos.map(a => <p>{a}</p>)}
            <Link to="/" className="button voltar">Voltar para Início</Link>
        </div>
    )
}
