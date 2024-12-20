
function mostrarBoasVindas() {
   
    const nome = document.getElementById("nome").value;


   
    if (nome) {
        document.getElementById("mensagem").textContent = `Olá, ${nome}! Seja bem-vindo(a) ao nosso site!`;
        document.getElementById("mensagem").style.opacity = "1";
    } else {
        document.getElementById("mensagem").textContent = 'Por favor, digite seu nome!';
        document.getElementById("mensagem").style.opacity = "1";
    }
}


function gerarFogosDeArtificio() {
    const container = document.getElementById("fireworks");
   
   
    for (let i = 0; i < 5; i++) {
        let fogo = document.createElement("div");
        fogo.classList.add("firework");
       
       
        fogo.style.left = `${Math.random() * 100}%`;
        fogo.style.top = `${Math.random() * 100}%`;
       
        container.appendChild(fogo);
       
       
        setTimeout(() => {
            fogo.remove();
        }, 1000);
    }
}