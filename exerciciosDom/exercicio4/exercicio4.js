function  reparar (change) {
    const img = document.getElementById("imagem");// Obtém o elemento da imagem com id "imagem"
    const currentWidth = img.width;// Obtém a largura atual da imagem
    img.width = currentWidth + change;// Define a nova largura da imagem somando a largura atual com a mudança especificada
}