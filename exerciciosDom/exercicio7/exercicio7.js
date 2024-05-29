function addALista() {
    const text = document.getElementById("inputText").value;// Obtém o texto do campo de entrada
    
    if (text.trim() !== "") { // Verifica se o texto não está vazio
        const li = document.createElement("li");// Cria um novo elemento de lista (li)

        li.appendChild(document.createTextNode(text));// Adiciona o texto como conteúdo do novo elemento li
        document.getElementById("list").appendChild(li);// Adiciona o novo elemento li à lista com id "list"
        document.getElementById("inputText").value = ""; // Limpa o campo de entrada
    } else {
        alert("Por favor, insira um texto."); // Alerta se o campo estiver vazio
    }
}

// adiciona evento para enviar a mensagem ao pressionar enter 
document.getElementById("inputText").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // previne o comportamento padrão (se necessário)
        addALista();// Chama a função addALista() para adicionar o item à lista
    } 
    } );