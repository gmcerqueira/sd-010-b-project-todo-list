let button = document.getElementById('criar-tarefa');
let linha = document.createElement('li');
let lista = document.getElementById('lista-tarefas');
let input = document.getElementById('texto-tarefa');
let clickList = document.getElementsByClassName('li-style');
//criação do botão
button.addEventListener('click', function() {
    let linha = document.createElement('li');
    linha.className = 'li-style'
    lista.appendChild(linha);
    linha.innerText = input.value;
    input.value = ' ';
})
//colorir a linha que clicar
function linhaLista() {
  for (let i = 0; i < clickList.length; i += 1) {
    clickList[i].addEventListener('click', function() {
      if (clickList[i].className === 'cor-de-fundo') {
        clickList[i].classList.remove('cor-de-fundo')
      } else {
        event.target.classList.add('cor-de-fundo');
      }
    })
  }
}
