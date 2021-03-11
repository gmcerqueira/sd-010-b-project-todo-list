const createBtn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const caixaTexto = document.getElementById('texto-tarefa');
const listItem = document.querySelectorAll(".listItem");
createBtn.innerHTML = 'Criar tarefa';
function clickCreateList () {
  const listItem = document.createElement('li');
  listItem.className = 'listItem';
  listItem.innerHTML = caixaTexto.value;
  taskList.appendChild(listItem);
  caixaTexto.value = ''; 
}
createBtn.addEventListener('click', clickCreateList);
taskList.addEventListener('click', function (event) {
  const select = document.getElementsByClassName('selecionada');
  if (select.length !== 0) {
    select[0].classList.remove('selecionada');
    event.target.classList.add('selecionada');
  }
  if (select.length === 0 ) {
    event.target.classList.add('selecionada');
  }
})
taskList.addEventListener('dblclick', function (event) {
  const completed = document.getElementsByClassName('completed');
  if (!event.target.classList.contains('completed')) {
    event.target.classList.add('completed');
  }
  else if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  }
}
)