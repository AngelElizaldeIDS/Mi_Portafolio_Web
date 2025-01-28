document.addEventListener("DOMContentLoaded", () => {
  // Selecciona las barras de progreso
  const progressBars = document.querySelectorAll(".progress");

  progressBars.forEach((bar) => {
    const percentage = bar.getAttribute("data-percentage");
    bar.style.width = percentage + "%";
  });

  // Menú hamburguesa toggle
  const menuBtn = document.getElementById("menu-btn");
  const menuResponsive = document.getElementById("menu__responsive");

  menuBtn.addEventListener("click", () => {
    menuResponsive.classList.toggle("show");
  });

  // Desplazamiento suave
  const menuLinks = document.querySelectorAll("#menu__responsive a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Evita el comportamiento predeterminado
      const targetId = link.getAttribute("href").substring(1); // Obtiene el ID sin '#'
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        menuResponsive.classList.remove("show"); // Cierra el menú en móviles
      }
    });
  });
});
