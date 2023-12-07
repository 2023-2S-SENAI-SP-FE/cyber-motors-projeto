document.addEventListener('click', event => {
    let iconeAntes = "img/icone-coracao-vazio.svg"
    let iconeDepois = "img/icone-coracao-cheio.svg"

    if(event.target.classList.contains('iconeAntes')) {
        event.target.classList.toggle('iconeDepois');
    }
});

// function trocar() {
//     let favorito = document.getElementById('logo-coracao');

//     if (favorito.src.includes(iconeAntes)) {
//         console.log('trocou');
//         favorito.src = iconeDepois;
//     } else {
//         favorito.src = iconeAntes;
//     }
