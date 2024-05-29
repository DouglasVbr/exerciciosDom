function addItem(){
    const ul = document.getElementById("itemLista");// Obtém a lista não ordenada (ul) com id "itemLista"
    const li = document.createElement("li");// Cria um novo elemento de lista (li)
    li.appendChild(document.createTextNode("Novo Item")); // Cria um nó de texto com o conteúdo "Novo Item" e o adiciona ao li
    ul.appendChild(li);// Adiciona o novo elemento de lista (li) à lista não ordenada (ul)
}