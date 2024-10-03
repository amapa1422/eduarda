window.onload = () => {
    const img = document.getElementById('interactive-img');
    const audio = document.getElementById('audio');
    const dialogBox = document.getElementById('dialog-box');
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');

    // Reproduz o áudio ao passar o mouse
    img.addEventListener('mouseover', () => {
        audio.play();
    });

    img.addEventListener('touchstart', () => {
        audio.play();
    });


    // Ao clicar na imagem, exibe a caixa de diálogo
    img.addEventListener('click', () => {
        dialogBox.classList.remove('hidden');
    });

    // Botão "Sim" redireciona para o WhatsApp
    yesButton.addEventListener('click', () => {
        window.location.href = 'https://wa.me/4499291777?text=Olá, sou Danilo! Gostaria de conhecer nosso produto?';
    });

    // Botão "Não" muda de lugar ao ser clicado
    noButton.addEventListener('click', (event) => {
        const randomX = Math.floor(Math.random() *  400) + 'px';
        const randomY = Math.floor(Math.random() * 400) + 'px';

        noButton.style.position = 'absolute';
        noButton.style.left = randomX;
        noButton.style.top = randomY;
    });
};
