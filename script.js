let cab = document.getElementById('cabecalho');
let header = document.createElement('header');
header.innerHTML = 'Minha Lista de Tarefas';
header.setAttribute('id', 'header');
cab.appendChild(header);

let par = document.createElement('p');
par.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';;
par.id = 'funcionamento';
header.appendChild(par);

let ent = document.getElementById('entrada');
let input = document.createElement('input');
input.id = 'texto-tarefa';
ent.appendChild(input);

let list = document.getElementById('list');
let item = document.createElement('ol');
item.id = 'lista-tarefas';
list.appendChild(item);

let btn = document.createElement('button');
btn.id = 'criar-tarefa';
btn.textContent = 'Clique aqui';
ent.appendChild(btn); 

let btnDel = document.createElement('button');
btnDel.id = 'apaga-tudo';
btnDel.textContent = 'Apagar Itens';
btn.appendChild(btnDel);

function tarBtn(){
    let btn = document.getElementById('criar-tarefa');
    btn.addEventListener('click' , tarefas )
}

function tarefas(){
    let tasks = document.getElementById('texto-tarefa').value;
    if (tasks !== '') {
    let addIt = document.createElement('li');
    item.appendChild(addIt).innerText = tasks;
    clear();    
}
}

//list.addEventListener('click', clickedList);

// function clickedList(){
//     let liItem = document.getElementsByTagName('li')
//     for(let i = 0; i < liItem.length; i += 1){
//        let t = liItem[i].style.backgroundColor = 'rgb(128, 128, 128)';
//        if(t.sybackgroundColor == 'rgb(128, 128, 128'){
//        }
//     }
// }


function createNewTask() {
    const newTaskBtn = document.getElementById('criar-tarefa');
    const tasksList = document.getElementById('lista-tarefas');
    const taskText = document.getElementById('texto-tarefa');
    newTaskBtn.addEventListener('click', () => {
      const newTask = document.createElement('li');
      newTask.innerText = taskText.value;
      tasksList.appendChild(newTask);
      newTask.addEventListener('click', (event) => {
        const allLis = document.getElementsByTagName('li');
        for (let i = 0; i < allLis.length; i += 1) {
          allLis[i].style.backgroundColor = 'white';
        }
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      });
      taskText.value = '';
    });
  }
  createNewTask();

function clear() {
    document.getElementById('texto-tarefa').value = '';
}

btnDel.addEventListener('click', Deletar);
function Deletar(){
        item.innerHTML = "";
}
tarefas();
tarBtn();
//clickedList();
Deletar();
//selection();
      
