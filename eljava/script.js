 // Obtener referencias a los elementos del DOM
 const menuCheckbox = document.querySelector('.menu-checkbox');
 const sideMenu = document.querySelector('.side-menu');
 const overlay = document.querySelector('.overlay');

 // Agregar un event listener al cambio de estado del checkbox
 menuCheckbox.addEventListener('change', function () {
     if (this.checked) {
         // Mostrar el side-menu
         sideMenu.style.transform = 'translateX(0)';
         overlay.style.display = 'block'; // Mostrar el overlay
         document.body.style.overflow = 'hidden'; // Bloquear desplazamiento de la página
     } else {
         // Ocultar el side-menu
         sideMenu.style.transform = 'translateX(-100%)';
         overlay.style.display = 'none'; // Mostrar el overlay
         document.body.style.overflow = 'auto'; // Restaurar desplazamiento de la página
     }
 });




 // SUBMENU EN EL SIDE
 // Obtener todos los elementos con la clase 'has-submenu'
 const submenuItems = document.querySelectorAll('.has-submenu');

 // Agregar un event listener a cada elemento
 submenuItems.forEach(item => {
     // Obtener el submenu asociado a cada elemento
     const submenu = item.querySelector('.submenu');

     // Agregar un event listener al clic
     item.addEventListener('click', () => {
         // Toggle de la clase 'submenu-visible' para mostrar u ocultar el submenu
         submenu.classList.toggle('submenu-visible');
     });

     // Agregar un event listener a las opciones del submenu
     const submenuOptions = submenu.querySelectorAll('li');
     submenuOptions.forEach(option => {
         option.addEventListener('click', () => {
             // Remover la clase 'active' de todas las opciones del submenu
             submenuOptions.forEach(opt => opt.classList.remove('active'));
             // Agregar la clase 'active' a la opción seleccionada
             option.classList.add('active');
         });
     });
 });

 // ESTO ES PARA EL SUBMENU PERO MAS PRO
 // // Obtener todos los elementos con la clase 'has-submenu'
 // const submenuItems = document.querySelectorAll('.has-submenu');

 // // Agregar un event listener a cada elemento
 // submenuItems.forEach(item => {
 //   // Obtener el submenu asociado a cada elemento
 //   const submenu = item.querySelector('.submenu');

 //   // Agregar un event listener al clic en el elemento principal
 //   item.addEventListener('click', () => {
 //     // Toggle de la clase 'submenu-visible' para mostrar u ocultar el submenu
 //     submenu.classList.toggle('submenu-visible');
 //   });

 //   // Obtener todas las opciones del submenu
 //   const submenuOptions = submenu.querySelectorAll('li');
 //   submenuOptions.forEach(option => {
 //     option.addEventListener('click', (event) => {
 //       // Evitar que el evento de clic se propague al elemento principal
 //       event.stopPropagation();
 //       // Remover la clase 'active' de todas las opciones del submenu
 //       submenuOptions.forEach(opt => opt.classList.remove('active'));
 //       // Agregar la clase 'active' a la opción seleccionada
 //       option.classList.add('active');
 //     });
 //   });
 // });

 // // Agregar un event listener para cerrar el submenu al hacer clic en cualquier parte del documento
 // document.addEventListener('click', (event) => {
 //   // Verificar si el clic se realizó fuera de los submenus
 //   const isOutsideSubmenu = !event.target.closest('.has-submenu');
 //   if (isOutsideSubmenu) {
 //     // Ocultar todos los submenus
 //     submenuItems.forEach(item => {
 //       const submenu = item.querySelector('.submenu');
 //       submenu.classList.remove('submenu-visible');
 //     });
 //   }
 // });




 // ESTA PARTE ES PARA EL  BUSCADOR
 function toggleClearButton() {
     var input = document.getElementById('search-input');
     var clearButton = document.getElementById('clear-button');

     if (input.value.trim() !== '') {
         clearButton.style.visibility = 'visible';
     } else {
         clearButton.style.visibility = 'hidden';
     }
 }

 function clearSearch() {
     var input = document.getElementById('search-input');
     input.value = '';
     toggleClearButton();
 }
// FIN  BUSCADOR


// PARA ABRIR EL BUSCADOR
 // Obtener referencias a los elementos del DOM
    const menuSearch = document.querySelector('.menu-search');
    const sideSearch = document.querySelector('.side-search');
    

    // Agregar un event listener al cambio de estado del checkbox
    menuSearch.addEventListener('change', function () {
        if (this.checked) {
            // Mostrar el side-menu
            sideSearch.style.transform = 'translateX(0)';
            
             document.body.style.overflow = 'hidden'; // Bloquear desplazamiento de la página
        } else {
            // Ocultar el side-menu
            sideSearch.style.transform = 'translateX(100%)';

             document.body.style.overflow = 'auto'; // Restaurar desplazamiento de la página
        }
    });

