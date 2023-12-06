document.addEventListener('click', event => {
    if(event.target.classList.contains('vazio')) {
        event.target.classList.toggle('favoritado');
    }
});

var iconeAntes = "./img/icone-coração-vazio.svg"
var iconeDepois = "./img/icone-coração-cheio.svg"

function trocar() {
    var favorito = document.getElementById(logo-coracao);

    if (favorito.src.includes(iconeAntes)) {
        favorito.src = iconeDepois;
    } else {
        favorito.src = iconeAntes;
    }
}