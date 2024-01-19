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