document.addEventListener('click', event => {

    if (event.target.classList.contains('coracao')) {

        let iconeAntes = "img/icone-coracao-branco.svg"
        let iconeDepois = "img/icone-coracao-cheio.svg"

        if (event.target.src.includes(iconeAntes)) {
            event.target.src = iconeDepois
        } else {
            event.target.src = iconeAntes
        }
    }
})

// document.addEventListener('click', event => {
//     let iconeAntes = "img/icone-coracao-vazio.svg"
//     let iconeDepois = "img/icone-coracao-cheio.svg"
//     let favorito = document.getElementById('logo-coracao');

//     if(event.target.classList.contains('coracao')) {
//         favorito.src = iconeAntes
//         event.target.toggle('iconeDepois');
//     } else {
//         favorito.src = iconeDepois
//         event.target.toggle('iconeAntes');
//     }
// });

// function trocar() {
//     let favorito = document.getElementById('logo-coracao');

//     if (favorito.src.includes(iconeAntes)) {
//         console.log('trocou');
//         favorito.src = iconeDepois;
//     } else {
//         favorito.src = iconeAntes;
//     }
