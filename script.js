var button1 = document.querySelector("#botao1");
var button2 = document.querySelector("#botao2");
var button3 = document.querySelector("#botao3");
var imagem = document.querySelector("#imagem-prin");

button1.onclick = () => {
    imagem.setAttribute("src", "Fontaine.jpg")

    titulo.textContent = "Fontaine"
    subtitulo.textContent = "O país das águas"
    texto.textContent = "Uma reigão tomada por águas que escondem segredos e mistérios ainda não descobertos, um gigantesco oceano para ser explorado com inimigos únicos e uma excelente forma de se aventurar nas águas.";
    
}

button2.onclick = () => {
    imagem.setAttribute("src", "Sumeru.jpg")

    titulo.textContent = "Sumeru";
    subtitulo.textContent = "A dualidade"
    texto.textContent = "Dividida entre uma fauna densa que cobre toda sua região e um deserto que abriga os mais misteriosos perigos, entre suas cavernas esuas dunas. Sumeru é uma região rica em cavernas, desfiladeiros e desafios únicos.";

}

button3.onclick = () => {
    imagem.setAttribute("src", "Inazuma.jpg")

    titulo.textContent = "Inazuma";
    subtitulo.textContent = "O país da eternidade";
    texto.textContent = "Governado pela sua Shogun desde sua criação, Inazuma preza pela ordem acima de tudo, uma região repleta de lindas paisagens e desafios mortais. Samurais e bruxas dividem o espaço da região, com suas lendas e mitos."
}

var titulo = document.querySelector("h1")
var subtitulo = document.querySelector("h2")
var texto = document.querySelector("p")