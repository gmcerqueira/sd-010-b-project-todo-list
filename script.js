function criaTarefa () {
    let entrada = document.getElementById('texto-tarefa');
    if(entrada.value == ""){
        alert('Insira uma tarefa!');
    } else {
        criaLi(entrada.value);
        entrada.value = "";
    }
    mudaCorItem();
}

function criaLi (valor) {
    let ul = document.getElementById('lista-tarefas');

    let elementoLi = document.createElement('li');
    elementoLi.innerText = valor;
    elementoLi.className = 'item';
    ul.append(elementoLi);
    elementoLi.addEventListener('dblclick', function(evento){
        toggleClasseCompleted(evento.target);
    });
    
// Com ajuda de uma pessoa desenvolvedora
//     cria.addEventListener('click', function(evt){
//         console.log('ooi')
//         evt.target.style.backgroundColor = 'rgb(128, 128, 128)';
//     });
}

function mudaCorItem () {
    let pegaLi = document.querySelectorAll('.item');

    for (i =0; i < pegaLi.length; i += 1){
        pegaLi[i].addEventListener('click', function(evt){
            evt.target.style.backgroundColor = 'rgb(128, 128, 128)';
        });
    }
}
mudaCorItem();

// o toggle verifica se existe um classe específica dentro do classList, se existir ele irá remove-la, senão irá adiciona-la.
function toggleClasseCompleted (elemento) {
    elemento.classList.toggle('completed');
}
