const nome = document.getElementById('nome')
const servico = document.getElementById('server')
const data = document.getElementById('data')
const horario = document.getElementById('horario')
const btn_agendar = document.getElementById('btn-agendar')
const nav = document.querySelector('nav')
const btn_menu = document.getElementById('btn-menu')
const msgerro = document.getElementById('msgerro')
const msgsucesso = document.getElementById('msgsucesso')

btn_menu.addEventListener('click',btn_ativo)
btn_agendar.addEventListener('click',agendar)

function mostrarErro(mensagem){
    msgerro.innerText = (mensagem)
    msgerro.style.display = 'block'

    setTimeout(function(){
        msgerro.style.display = 'none';
    },4000);
}


function mensagemsucesso(mensagemsucedida){
    msgsucesso.innerText = (mensagemsucedida)
    msgsucesso.style.display = 'block'

    setTimeout(function(){
        msgsucesso.style.display = 'none';

    },4000);
}
    
function agendar(e){
    e.preventDefault();

        if(nome.value == '' || data.value == '' || horario.value == ''){
            mostrarErro('por favor , preencha todos os campos!');
            return;
        }
        else{
        const partes = data.value.split('-')
        const databr = `${partes[2]}/${partes[1]}/${partes[0]}`

        mensagemsucesso(`${nome.value} voce agendou dia ${databr} no horario ${horario.value} com o serviço de ${servico.value}`);

        const salvarlocal ={
            nome: nome.value,
            servico: servico.value,
            data: data.value,
            horario: horario.value
        };
        
        const agendamentos = JSON.parse(localStorage.getItem('salvaagendamento')) || [];

        agendamentos.push(salvarlocal)

        localStorage.setItem('salvaagendamento', JSON.stringify(agendamentos));
        
        setTimeout(function(){

        const numero = '5511942640015'
        const mensagem = `MEU NOME E ${nome.value} EU QUERO AGENDAR ${databr} NO HORARIO ${horario.value} COM O SERVIÇO DE ${servico.value}`
        const mensagemMaiuscula = mensagem.toUpperCase()
        
        const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagemMaiuscula)}`

        console.log(link)
        window.open(link, '_blank')
        
        limpar()

        },1000);
    
        }
  
}

function limpar(){
    nome.value = ''
    data.value = ''
    horario.value = ''
}

function btn_ativo(){
    nav.classList.toggle('ativo')
}