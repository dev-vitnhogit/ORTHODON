window.onload = function(){

     const main = document.getElementsByTagName('main')[0]

    function mostrarAgendamento(){
          const dados = JSON.parse(localStorage.getItem('salvaagendamento'));

    localStorage.getItem('salvaagendamento')

    dados.forEach(item => {
    const div = document.createElement('div');
    div.style.cssText = ' background-color: red;width: 50%;height: 100px;border: 1px solid black;border-radius: 10px;padding: 5px;margin-top:10px;'

    div.innerHTML =`
                <p>Nome: ${item.nome}</p>
                <p>Serviço: ${item.servico}</p>
                <p>Data: ${item.data}</p>
                <p>Horario: ${item.horario}</p>
                ` 
    main.appendChild(div);

     });

    }
     mostrarAgendamento()

      window.addEventListener('storage', function(event){
        if(event.key === 'salvaagendamento')
            mostrarAgendamento()
        });

}

