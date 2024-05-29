function clicarBotao(){
var texto = document.getElementById("text"); // Obtém o elemento <p> com id "text"
if(texto.innerText === "ao infinito e além"){ // Verifica se o texto atual do parágrafo é "ao infinito e além"
    texto.innerText = "Botão clicado";// Se for, altera o texto do parágrafo para "Botão clicado"
}else{
    texto.innerText = "ao infinito e além";// Se não for, altera o texto do parágrafo de volta para "ao infinito e além"
}

}