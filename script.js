

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    alert("Mensagem enviada com sucesso!");
});


  // Alternar tema claro/escuro
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Alternar tema";
  document.body.prepend(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
  });
  
});



