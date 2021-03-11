const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const textos = document.getElementById('texto-tarefa');

function creatElement() {
  button.addEventListener('click', () => {
    const newElement = document.createElement('li');
    newElement.innerText = textos.value;
    newElement.className = 'tasks';
    ol.appendChild(newElement);
    textos.value = '';
    textos.focus();
  });
}
//
//

creatElement();

const li = document.getElementsByClassName('tasks');

function changeLi() {
  for (let index = 0; index < li.length; index += 1) {
    ol.addEventListener('click', (event) => {
      li[index].classList.remove('listSelected');
      event.target.classList.add('listSelected');
    });
  }
}
button.addEventListener('click', changeLi);
//
function checkList() {
  for (let index = 0; index < li.length; index += 1) {
    ol.addEventListener('dblclick', (event) => {
      event.target.classList.toggle('completed');
    });
  }
}
button.addEventListener('click', checkList);
// 10
const reset = document.getElementById('apaga-tudo');
const listaTarefas = document.getElementById('lista-tarefas');
function removeTask() {
  for (let index = li.length; index >= 1; index -= 1) {
    listaTarefas.removeChild(li[0]);
  }
}
reset.addEventListener('click', removeTask);

// 11
const removerFinalizados = document.getElementById('remover-finalizados');
function removefinished() {
  const completed = document.getElementsByClassName('completed');
  for (let index = 0; index < li.length; index += 1) {
    listaTarefas.removeChild(completed[0]);
  }
}
removerFinalizados.addEventListener('click', removefinished);
