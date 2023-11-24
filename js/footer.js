document.getElementById('email').addEventListener('focus', () => {
    document.getElementById('divEmail').classList.add('divEmailFocada')
})
document.getElementById('email').addEventListener('blur', () => {
    document.getElementById('divEmail').classList.remove('divEmailFocada')
})