function updateParagraph(){
const checkbox = document.getElementById("checkbox");// Obtém a checkbox
const status = checkbox.checked ? "checkbox marcada" : "checkbox desmarcada";// Verifica se a checkbox está marcada e define o status com base nisso
document.getElementById("status").innerText = status;// Atualiza o texto do elemento com id "status" para refletir o status da checkbox
}