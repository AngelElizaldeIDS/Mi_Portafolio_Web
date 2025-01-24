document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todas las barras de progreso
    const progressBars = document.querySelectorAll(".progress");
  
    progressBars.forEach((bar) => {
      // Obtiene el valor del porcentaje desde data-percentage
      const percentage = bar.getAttribute("data-percentage");
  
      // Asigna el ancho dinámicamente
      bar.style.width = percentage + "%";
    });
  });



  function descargarArchivo() {
    const link = document.createElement("a"); // Crear un elemento <a>
    link.href = "img/perfil.png"; // Ruta del archivo (puede ser PDF o JPG)
    link.download = "Mi_CV.pdf"; // Nombre del archivo al descargar
    link.click(); // Simula el clic en el enlace
  }