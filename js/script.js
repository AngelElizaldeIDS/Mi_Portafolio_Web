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

