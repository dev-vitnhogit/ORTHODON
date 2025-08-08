
const nome = document.getElementById('nome')
const senha = document.getElementById('senha')
const btnCadastrar = document.getElementById('btn-cadastrar')

btnCadastrar.addEventListener('click',cadastrar)

function cadastrar(){
    if(nome.value === '' || senha.value === ''){
        msgErro();
    }
    else{
        msgSucesso();
    }

    const dadosCadastro ={
        nome:nome.value,
        senha:senha.value
    };

    localStorage.setItem('usuarios',JSON.stringify(dadosCadastro));

};

function msgErro(){

    const msgerro = document.getElementById('msg-erro')
    msgerro.style.display = 'block'
};

function msgSucesso(){

    const msgsucesso = document.getElementById('msg-sucesso')
     const textosucesso = document.createElement('p')
    textosucesso.innerHTML = `parabens ${nome.value} voce se cadastrou`

    msgsucesso.appendChild(textosucesso);
    msgsucesso.style.display = 'block';
   
};