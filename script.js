function getList() {
    let getButton = document.querySelector('#criar-tarefa');
    let getOl = document.querySelector('#lista-tarefas');
    let getInput = document.querySelector('#texto-tarefa');
    let changeClass = document.querySelector('ol');
        getButton.addEventListener('click', function() {
            let creationLi = document.createElement('li')
            getOl.appendChild(creationLi).innerHTML = getInput.value
            getInput.value = '';
    })
    changeClass.addEventListener('click', function(evt) {
        let selected = document.querySelector('.selected')
        // Fiz uma pesquisa sobre a utilização das propriedades do ClassList no:
        // https://www.w3schools.com/jsref/prop_element_classlist.asp
        if(selected != null){
            document.querySelector('.selected').classList.remove('selected');
        } else {
            evt.target.classList.add('selected')
        }
    })
}
getList()