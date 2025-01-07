document.addEventListener("DOMContentLoaded", () => {
  const coffeeCounters = document.querySelectorAll(".stat-number");

  const startCoffeeCount = (entry, observer) => {
    if (entry.isIntersecting) {
      coffeeCounters.forEach((counter) => {
        const target = +counter.getAttribute("data-target"); 
        let current = 0;
        const increment = target / 200; // Ajusta la velocidad del conteo

        const updateCoffeeCount = () => {
          if (current < target) {
            current += increment;
            counter.innerText = Math.ceil(current); // Actualiza el valor mostrado
            setTimeout(updateCoffeeCount, 20); // Tiempo entre actualizaciones
          } else {
            counter.innerText = target; // Asegura que el contador llegue exactamente al valor objetivo
          }
        };
        updateCoffeeCount();
      });
      observer.disconnect(); // Detiene el observador una vez animado
    }
  };

  const coffeeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => startCoffeeCount(entry, observer));
  });

  coffeeObserver.observe(document.querySelector("#caucel-stats"));
});