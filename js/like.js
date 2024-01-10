document.addEventListener('click', event => {

    if (event.target.classList.contains('slider')) {

        let iconeAntes = classList.contains("like")
        let iconeDepois = classList.contains("like2")

        if (event.target.src.includes(iconeAntes)) {
            event.target.src = iconeDepois
        } else {
            event.target.src = iconeAntes
        }
    }
})