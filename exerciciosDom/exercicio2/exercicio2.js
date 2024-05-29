function displayText(){
    const inputField = document.getElementById("inputText");// Obtém o campo de texto com id "inputText"
    const text = inputField.value;// Obtém o valor (texto) do campo de texto
    document.getElementById("display").innerText = text; // Define o texto do parágrafo com id "display" para o valor do campo de texto
    inputField.value = ''; //limpa o  campo de texto
}

// adiciona evento para enviar a mensagem ao pressionar enter 
document.getElementById("inputText").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {// Verifica se a tecla pressionada é "Enter" 
        event.preventDefault(); // prevenir o comportamento padrão (se necessário)
        displayText();// Chama a função displayText() para exibir o texto
    }
});