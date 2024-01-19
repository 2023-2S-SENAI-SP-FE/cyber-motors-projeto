document.addEventListener('click', event => {

    if (event.target.classList.contains('coracao')) {

<<<<<<< HEAD
        let iconeAntes = "img/icone-coracao-branco.svg"
=======
        let iconeAntes = "img/coracao-pecas.png"
>>>>>>> 2735d3946219833339c67c509488ad4eefc901d7
        let iconeDepois = "img/icone-coracao-cheio.svg"

        if (event.target.src.includes(iconeAntes)) {
            event.target.src = iconeDepois
        } else {
            event.target.src = iconeAntes
        }
    }
})