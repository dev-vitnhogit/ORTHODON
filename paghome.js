const nome = document.getElementById('nome')
const servico = document.getElementById('server')
const data = document.getElementById('data')
const horario = document.getElementById('horario')
const btn_agendar = document.getElementById('btn-agendar')
const nav = document.querySelector('nav')
const btn_menu = document.getElementById('btn-menu')

btn_menu.addEventListener('click',btn_ativo)
btn_agendar.addEventListener('click',agendar)
    
function agendar(){

        if(nome.value == '' || data.value == '' || horario.value == ''){
            alert('invalido')
            return;
        }

        const partes = data.value.split('-')
        const databr = `${partes[2]}/${partes[1]}/${partes[0]}`

        alert(`${nome.value} voce agendou dia ${databr} no horario ${horario.value} com o serviço de ${servico.value}`)

        const numero = '5511942640015'
        const mensagem = `MEU NOME E ${nome.value} EU QUERO AGENDAR ${databr} NO HORARIO ${horario.value} COM O SERVIÇO DE ${servico.value}`
        const mensagemMaiuscula = mensagem.toUpperCase()
        const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagemMaiuscula)}`

        console.log(link)
        window.open(link, '_blank')
}

function btn_ativo(){
    nav.classList.toggle('ativo')
}