

document.addEventListener("DOMContentLoaded", () => {
    
        // Mostrar la segunda pantalla (logo + "estamos calculando...")
    setTimeout(() => {
        document.getElementById("espera01").style.display = "none";
        document.getElementById("espera02").style.display = "block";
    }, 3000);

    // Simula una demora (como si el Arduino estuviera midiendo)
    setTimeout(() => {
      
      document.getElementById("espera02").style.display = "none";
      document.querySelector(".container").style.display = "block";
    }, 5500);
  });
  
  