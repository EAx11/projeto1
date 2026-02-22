// Selecionamos o botão e dizemos ao TS que ele é um HTMLButtonElement
const meuBotao = document.getElementById('btn-enviar') as HTMLButtonElement;

// Agora o TS sabe que 'meuBotao' tem propriedades de botão
if (meuBotao) {
    meuBotao.innerText = "Clique aqui!";
    
    meuBotao.addEventListener('click', (event: MouseEvent) => {
        console.log("Botão clicado em:", event.clientX);
        alert("Olá do TypeScript!");
    });
}
