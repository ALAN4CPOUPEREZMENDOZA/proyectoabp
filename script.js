document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  window.addEventListener('scroll', function() {
    document.querySelectorAll('section').forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        section.style.opacity = '1';
        section.style.animationPlayState = 'running';
      }
    });
  });
  // JavaScript para manejar la galería y acciones de botones
document.addEventListener('DOMContentLoaded', function() {
  const galeria = document.querySelector('.galeria');
  const btnSeleccionado = document.querySelector('.btn-seleccionado');

  // Datos simulados de alimentos para cada categoría
  const alimentos = {
      desayuno: [
          { nombre: 'Avena con frutas', imagen: 'img/avena.jpg' },
          { nombre: 'Yogur con granola', imagen: 'img/yogur.jpg' },
          { nombre: 'Tostadas integrales', imagen: 'img/tostadas.jpg' }
      ],
      comida: [
          { nombre: 'Ensalada verde', imagen: 'img/ensalada.jpg' },
          { nombre: 'Pechuga de pollo a la plancha', imagen: 'img/pollo.jpg' },
          { nombre: 'Arroz integral con verduras', imagen: 'img/arroz.jpg' }
      ],
      cena: [
          { nombre: 'Sopa de verduras', imagen: 'img/sopa.jpg' },
          { nombre: 'Pescado al horno', imagen: 'img/pescado.jpg' },
          { nombre: 'Quinoa con vegetales', imagen: 'img/quinoa.jpg' }
      ]
  };

  // Función para mostrar alimentos según la categoría seleccionada
  function mostrarAlimentos(categoria) {
      galeria.innerHTML = '';
      alimentos[categoria].forEach(alimento => {
          const itemHTML = `
              <div class="item">
                  <img src="${alimento.imagen}" alt="${alimento.nombre}">
                  <p>${alimento.nombre}</p>
              </div>
          `;
          galeria.innerHTML += itemHTML;
      });

      // Animar las imágenes al cargar
      const items = galeria.querySelectorAll('.item');
      items.forEach((item, index) => {
          setTimeout(() => {
              item.querySelector('img').style.opacity = '1';
          }, index * 200);
      });
  }

  // Manejar clics en botones de categoría
  const btnCategorias = document.querySelectorAll('.btn-categoria');
  btnCategorias.forEach(btn => {
      btn.addEventListener('click', () => {
          const categoria = btn.getAttribute('data-categoria');
          mostrarAlimentos(categoria);
      });
  });

  // Acción al hacer clic en el botón de seleccionar alimentos
  btnSeleccionado.addEventListener('click', () => {
      // Aquí puedes redirigir o realizar alguna acción adicional
      alert('¡Alimentos seleccionados! Redirigiendo...');
      // Ejemplo de redirección a otra página
      window.location.href = 'otra-pagina.html';
  });
});
