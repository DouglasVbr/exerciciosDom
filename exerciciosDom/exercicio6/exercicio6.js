let count = 0; // Declara e inicializa a variável count com o valor 0
function incrementar(){
    count++; // Incrementa o valor da variável count
    document.getElementById("counter").innerText = count; // Atualiza o texto do elemento com id "counter" para refletir o novo valor de count
}