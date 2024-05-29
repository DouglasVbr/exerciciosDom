// Armazena o HTML original da lista de itens
const originalItemHTML = document.getElementById("itemList").innerHTML;

// Função para remover todos os itens da lista
function removeItem (){
    document.getElementById("itemList").innerHTML = '';// Remove todos os elementos HTML dentro da lista
    document.getElementById("voltar").style.display = 'block'; // mostra o botao voltar (RESTAURAR)
}

// função para restaurar os itens originais 
function voltarLista(){
    document.getElementById("itemList").innerHTML = originalItemHTML;// Restaura o HTML original da lista
    document.getElementById("voltar").style.display = 'none'; // Esconde o botão "Restaurar"
}