function mudarcor(){
    var red = Math.random() * 256
    var green = Math.random(255) * 256
    var blue = Math.random(255) * 256
    var body = document.body
    body.style.background = `rgba(${red}, ${green}, ${blue})`
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Este é um parágrafo adicionado dinamicamente abaixo do botão.';
}