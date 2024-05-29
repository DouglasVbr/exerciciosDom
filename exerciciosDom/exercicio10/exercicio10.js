function reverseList(){
    const ul = document.getElementById("itemList");// Obtém a lista não ordenada com id "itemList"
    const items = Array.from(ul.children);// Obtém os itens da lista e os converte em um array
    ul.innerHTML = '';// Limpa o conteúdo da lista
    items.reverse().forEach(item => ul.appendChild(item));// Inverte a ordem dos itens e os adiciona de volta à lista
}