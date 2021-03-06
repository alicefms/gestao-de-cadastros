import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Produto {
    constructor(nome, tipo, ref, qte) {
        this.nome = nome;
        this.tipo = tipo;
        this.ref = ref;
        this.qte = qte
    }
}


function SalvarProduto(e) {

    e.preventDefault()
    let nome = document.getElementById("tipo").value;
    let tipo = document.getElementById("tipo").value;
    let ref = document.getElementById("ref").value;
    let qte = document.getElementById("qte").value;
    const novoProduto = new Produto(nome, tipo, ref, qte)

    let produtosCadastrados = []
    const produtosAntigos = localStorage.getItem('produto')

    if (!produtosAntigos) {
        produtosCadastrados.push(novoProduto)
        localStorage.setItem('produto', JSON.stringify(produtosCadastrados))
    } else {
        produtosCadastrados = JSON.parse(produtosAntigos)
        produtosCadastrados.push(novoProduto)
        localStorage.setItem('produto', JSON.stringify(produtosCadastrados))

    }


    alert('Produto Cadastrado com sucesso!')


}

export default function CadProduto() {
    return (

        <div className="novocadastro">
            <h2>Cadastro de novo produto</h2>
            <form>
                <label>Produto</label>
                <input type="text" id="nome" placeholder="nome do produto" />

                <label>Tipo</label>
                <input type="text" placeholder="tipo do produto" id="tipo" />

                <label>Referência</label>
                <input type="number" id="ref" placeholder="código de referência" />


                <label>Quantidade</label>
                <input type="number" id="qte" placeholder="quantidade no estoque" />
                <input type="submit" className="button" value="Cadastrar" onClick={SalvarProduto} />

            </form>

            <Link to="/" className="button voltar" >Voltar para Início</Link>
        </div>
    )
}