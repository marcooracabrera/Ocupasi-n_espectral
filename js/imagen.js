// Función para abrir el modal con la imagen correspondiente
function abrirModal(banda) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");

    if (bandas[banda] && bandas[banda].length > 0) {
        modalImg.src = bandas[banda][0].img;
        modalImg.alt = bandas[banda][0].desc;
        modal.style.display = "block"; // Muestra el modal
    }
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
