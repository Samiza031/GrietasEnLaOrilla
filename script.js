document.getElementById('menu-toggle').addEventListener('click', function() {
    const sideMenu = document.getElementById('side-menu');
    const body = document.body;

    // Alternar la clase "open" para mostrar u ocultar el menú
    sideMenu.classList.toggle('open');
    
    // Alternar la clase "menu-open" para añadir fondo oscuro cuando el menú esté abierto
    body.classList.toggle('menu-open');
});

document.addEventListener('click', function(event) {
    const sideMenu = document.getElementById('side-menu');
    const menuToggle = document.getElementById('menu-toggle');
    
    // Si el menú está abierto y el clic no fue dentro del menú ni en el ícono de hamburguesa
    if (sideMenu.classList.contains('open') && !sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        sideMenu.classList.remove('open');
        document.body.classList.remove('menu-open'); // Remueve el fondo oscuro
    }
});

// Seleccionar todas las conchas
const conchas = document.querySelectorAll('.concha');

// Iterar sobre cada concha para añadir un evento de clic
conchas.forEach(concha => {
  concha.addEventListener('click', function() {
    const relato = this.querySelector('.relato');
    const img = this.querySelector('.conchas-img'); // Seleccionar la imagen de la concha

    // Alternar la clase "show" para mostrar u ocultar el relato
    relato.classList.toggle('show');
    
    // Alternar la clase "expand" para ajustar el tamaño del contenedor
    this.classList.toggle('expand');
    
    // Cambiar la imagen a la de una concha abierta
    if (relato.classList.contains('show')) {
      img.src = 'https://imgur.com/3F8RAk5.png'; 
    } else {
      img.src = 'https://i.imgur.com/fwVFfik.png'; 
    }
  });
});



