/*modo do Javascript que ajuda a escrever um código mais limpo, ele impede que use variáveis sem as declarar antes e ,ais algumas outras regras.*/
'use strict';

//função que preenche usando os dados da API
const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
    document.getElementById('numero').focus();
}

//função que pega os dados da API e o trás em json
const pesquisarCep = async() => {
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    const endereco = await dados.json();

    if(endereco.hasOwnProperty('erro')){
        document.getElementById('rua').value = 'CEP não encontrado!';
    }else{
        preencherFormulario(endereco);
    }
}

//inicializador de pesquisa(faz as funções acima funcionarem)
document.getElementById('cep').addEventListener('focusout',pesquisarCep);