document.addEventListener('click', event => {
    if(event.target.classList.contains('vazio')) {
        event.target.classList.toggle('favoritado');
    }
});