var enlaces = document.querySelectorAll('.scroll');

enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function(e) {
        // Evitar que el enlace se comporte como predeterminado
        e.preventDefault();

        // Obtener el destino del enlace
        var destino = this.getAttribute('href');

        // Hacer el desplazamiento suave a ese destino
        document.querySelector(destino).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function mostrarModal() {
    $('#mi-modal').modal('show');
    print("Modal mostrar")
}