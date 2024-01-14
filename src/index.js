let element = document.getElementById('card_01');
let element2 = document.getElementById('card_02');
let element3 = document.getElementById('github');
let element4 = document.getElementById('contact');


element.addEventListener("click", ()=>{
    window.open('https://github.com/Bing-David/Inventario-APP')
});

element2.addEventListener("click", ()=>{
    window.open('https://github.com/Bing-David/Keyboard-Test')
});


element3.addEventListener("click", ()=>{
    window.open('https://github.com/Bing-David')
});

element4.addEventListener("click", ()=>{
  window.open('mailto:david2003ytjd@gmail.com')

});



/*SCROLL*/
    document.addEventListener('DOMContentLoaded', function () {
        // Obtén tus botones por su id
        const proyectosBtn = document.getElementById('proyectosBtn');
        const experienciaBtn = document.getElementById('experienciaBtn');

        // Función para hacer scroll a la sección especificada
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Agrega eventos de clic a los botones
        proyectosBtn.addEventListener('click', function () {
            scrollToSection('py'); // El ID de la sección de proyectos
        });

        experienciaBtn.addEventListener('click', function () {
            scrollToSection('EXP-C'); // El ID de la sección de experiencia
        });
    });
/*SCROLL*/





// // Función para mostrar el modal
// function openModal() {
//     document.getElementById('resolutionModal').style.display = 'block';
//   }
  
//   // Función para cerrar el modal
//   function closeModal() {
//     document.getElementById('resolutionModal').style.display = 'none';
//   }
  
//   // Función para actualizar la resolución en el modal
//   function updateResolution() {
//     const resolutionText = document.getElementById('resolutionValue');
//     resolutionText.textContent = `${window.innerWidth} x ${window.innerHeight}`;
//   }
  
//   // Mostrar el modal al cargar la página
//   window.onload = function() {
//     openModal();
//     updateResolution();
//   };
  
//   // Actualizar la resolución cuando cambia el tamaño de la ventana
//   window.onresize = function() {
//     updateResolution();


{/* <div class="modal" id="resolutionModal">
<span class="close" onclick="closeModal()">&times;</span>
<p id="resolutionText"><span id="resolutionValue"></span></p>
</div> */}


//   };
  
