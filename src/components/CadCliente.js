import React from 'react';

class Cliente {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone
    }
}



function salvarCliente(e) {
    e.preventDefault()
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    const novoCliente = new Cliente(nome, email, telefone)
    let clientesCadastrados = localStorage.getItem('cliente')

    localStorage.setItem('cliente', [clientesCadastrados, (JSON.stringify(novoCliente))]);

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
                <input type="submit" value="Cadastrar" onClick={salvarCliente} />

            </form>
        </div>
    )
}