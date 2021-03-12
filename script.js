// capturar o texto do input e adicionar o texto do input ao item
const getList = document.querySelector('#lista-tarefas'); // capturar a lista ordenada

// adiciona e muda a classe do background
function changeClass(event) {
  const getClassBg = document.querySelectorAll('li'); // capturar todos os elementos com a classe
  for (let c = 0; c < getClassBg.length; c += 1) { // passar por todos os elementos
    getClassBg[c].classList.remove('backgroundItens'); // remove a classe dos elementos que à contém
  }
  event.target.classList.add('backgroundItens'); // adiciona a classe ao elemento clicado
}

function taskCompleted(event) {
  event.target.classList.toggle('completed'); // adiciona e remove a classe ao elemento clicado
}

function addTask() {
  const getText = document.getElementById('texto-tarefa'); // captura o texto no input
  const createItem = document.createElement('li'); // criar o item
  getList.appendChild(createItem); // adiciona o item a lista
  createItem.innerHTML = getText.value; // item recebe o texto do input
  getText.value = ''; // apaga o conteudo do input
  createItem.addEventListener('click', changeClass); // adicionar um evento de clique, que muda o bg, no item criado
  createItem.addEventListener('dblclick', taskCompleted); // adiciona um evento de dblclick, que adiciona e remove o risco na atividade.
}

// adicionar um evento click ao botão
function btnClick() {
  const getBtn = document.querySelector('#criar-tarefa');
  getBtn.addEventListener('click', addTask);
}

function clearAll() {
  document.getElementById('lista-tarefas').innerHTML = ''; // captura as tarefas
};

function btnClearAll() {
  const btnClear = document.querySelector('#apaga-tudo'); // captura o botão
  btnClear.addEventListener('click', clearAll);
}

window.onload = function () {
  btnClick();
  btnClearAll();
};
