var nome = [];
function handleToDo() {
    var input = document.querySelector('#tarefa');
    if (input.value !== "") {
        var lista = document.querySelector('ul');
        var li = document.createElement('li');
        var div = document.createElement('div');
        var card = document.createElement('article');
        var texto = document.createTextNode(input.value);
        li.appendChild(card);
        card.appendChild(texto);
        card.appendChild(div);
        lista.appendChild(li);
        nome.push(input.value);
    }
    input.value = "";
    console.log(nome);
}
function editToDo() {
    for (var i = 0; i <= nome.length; i++) {
        console.log(nome[i]);
    }
}
