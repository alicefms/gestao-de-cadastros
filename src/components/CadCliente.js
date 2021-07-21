import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export class Cliente {
    constructor(nome, email, telefone, endereco) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco
    }
}



function salvarCliente(e) {
    e.preventDefault()
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let endereco = document.getElementById("endereco").value;
    const novoCliente = new Cliente(nome, email, telefone, endereco)
    let clientesCadastrados = localStorage.getItem('cliente')
    if (clientesCadastrados)
        localStorage.setItem('cliente', clientesCadastrados.concat(JSON.stringify(novoCliente)))
    else localStorage.setItem('cliente', JSON.stringify(novoCliente))

    alert('Cliente Cadastrado com sucesso!')
}

export default function CadCliente() {
    return (

        <div className="novocadastro">
            <h2>Cadastro de novo cliente</h2>
            <form>
                <label>Nome do Cliente</label>
                <input type="text" id="nome" placeholder="nome do cliente" />

                <label>Email</label>
                <input type="text" id="email" placeholder="email do cliente" />

                <label>Telefone</label>
                <input type="number" id="telefone" placeholder="telefone do cliente" />

                <label>Endereço</label>
                <input type="text" id="endereco" placeholder="endereço do cliente" />



                <input type="submit" className="button" value="Cadastrar" onClick={salvarCliente} />

            </form>

            <Link to="/" className="button voltar">Voltar para Início</Link>
        </div>
    )
}