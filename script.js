// inserindo o primeiro parágrafo 
let title = document.getElementById('title')
let firstParagraph = document.createElement('p')
title.appendChild(firstParagraph)
firstParagraph.id = 'funcionamento'
firstParagraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo'

// inserindo o campo para preenchimento
let form = document.getElementById('form')
let inputItem = document.createElement('input')
form.appendChild(inputItem)
inputItem.id = 'texto-tarefa'
inputItem.type = 'text'

// inserindo uma lista ordenada
let toDoList = document.createElement('ol')
form.appendChild(toDoList)
toDoList.id = 'lista-tarefas'

// inserindo um botão para gerar a tarefa (que adicione a tarefa de forma ordenada a apague o valor inserido no input logo em seguida)
let toDoListBtn = document.createElement('button')
document.body.appendChild(toDoListBtn)
toDoListBtn.id = 'criar-tarefa'
toDoListBtn.innerHTML = "Adicionar tarefa"

toDoListBtn.addEventListener('click', generateItem)

function generateItem () {
      let item = document.createElement('li');
      item.classList.add('item');
      item.innerText = inputItem.value
      toDoList.appendChild(item);
      inputItem.value = '';
}

// Alterando a cor de fundo do item da lista quando clicado

toDoList.addEventListener('click', changeBckgColor)

function changeBckgColor (event) {
    let selected = document.querySelector('.changeColor')
    if (selected) {
        selected.classList.remove('changeColor')
    }
    event.target.classList.add('changeColor')
}


