const nav = document.querySelector('nav')
const btn_menu = document.getElementById('btn-menu')

btn_menu.addEventListener('click',btn_ativo)

function btn_ativo(){
    nav.classList.toggle('ativo')
}