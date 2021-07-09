const btnCompartir = document.querySelector('.boton-compartir');
const redes = document.querySelector('.autor__redes');

btnCompartir.addEventListener('click', () => {
    btnCompartir.classList.toggle('activo');
    redes.classList.toggle('activo');
})