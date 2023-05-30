window.addEventListener('DOMContentLoaded', function() {
    // Obtener el contenedor de la tarjeta
    var cardContainer = document.getElementById('card-container');

    // Crear el elemento de tarjeta
    var cardElement = document.createElement('div');
    cardElement.classList.add('card');

    // Agregar el contenido de la tarjeta
    cardElement.innerHTML = `
        <h3 class="card-title">Título de la tarjeta</h3>
        <p class="card-content">Contenido de la tarjeta.</p>
    `;

    // Agregar la tarjeta al contenedor
    cardContainer.appendChild(cardElement);
});
