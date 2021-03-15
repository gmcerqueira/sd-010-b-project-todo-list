let li = document.getElementsByClassName('lista')
let lista = document.getElementById('lista-tarefas')

let input = document.createElement('input')
input.id = 'texto-tarefa'
input.type = 'text'
input.value = ''
document.body.appendChild(input)

let botao = document.createElement('button')
botao.innerHTML = 'Add'
botao.id = 'criar-tarefa'
document.body.appendChild(botao)


let listaOrdenada = document.createElement('ol')
listaOrdenada.id = 'lista-tarefas'
document.body.appendChild(listaOrdenada)

botao.addEventListener('click', addlist)



//functions 

function addlist (){
    if (input.value === ''){
        alert('Você tem que digitar algo')
    } else {
        let createli = document.createElement('li')
        createli.className = 'lista'
        createli.innerHTML = document.getElementById('texto-tarefa').value;
        listaOrdenada.appendChild(createli)
        input.value = ''
    }
}

function selectItem (e){
    apagarClass()
    if (e.target.tagName == 'LI'){
        e.target.classList.add('selected')
    }
} 

function apagarClass(){
    let listaItens = listaOrdenada.childNodes;
    for (let i = 0; i < listaItens.length; i += 1){
        listaItens[i].classList.remove('selected')
    }
}

listaOrdenada.addEventListener('click', selectItem)