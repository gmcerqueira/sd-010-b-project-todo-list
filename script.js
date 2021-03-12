let input = document.getElementById('texto-tarefa');
let inputButton = document.getElementById('criar-tarefa')
let listTarefas = document.querySelector('#lista-tarefas')
let listItem = document.querySelector('#li')

  inputButton.addEventListener('click', function (){
    let userData = input.value
    let li = document.createElement('li')
    if (input.value === ""){
        alert ("You must rigth something")
    }else{
    
        li.innerHTML = userData     
        listTarefas.insertBefore(li,listTarefas.appendChild(li))
        input.value = "";   
    }    
    });
  

    listTarefas.addEventListener('dblclick',function(completed){
    const listTarefas = completed.target;
    if (listTarefas.style.textDecoration === 'line-through') {
        listTarefas.style.textDecoration = 'none';
        listTarefas.classList.remove('completed');
    } else {
        listTarefas.style.textDecoration = 'line-through';
        listTarefas.classList.add ('completed');
      }
    });


    clearDoneListButton = document.querySelector('#remover-finalizados')
    clearDoneListButton.addEventListener('click', () => {
        document.querySelectorAll('li').forEach(function (removerFinalizados) {
          if (removerFinalizados.classList.contains('completed')) {
            removerFinalizados.remove();
          }
        });
      });


 listTarefas.addEventListener('click',function (event){
  let arrListItem = document.querySelectorAll('li')
    for(let index = 0;index < arrListItem.length;index +=1){
      arrListItem[index].style.backgroundColor = 'white'
    } 
    event.target.style.backgroundColor ='rgb(128, 128, 128)'   
  })
 
 let clearListButton = document.getElementById('apaga-tudo');
 clearListButton.addEventListener('click',function (){
    let array=document.querySelectorAll('li')
    for(let index=0;index<array.length;index+=1){
        listTarefas.removeChild(array[index])
    }
  })

