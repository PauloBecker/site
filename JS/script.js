

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const cepInput = document.getElementById("cep");
  const hamburguer = document.getElementById("hamburguer");
  const menu = document.querySelector(".menu");
  const overlay = document.getElementById("overlay");


  hamburguer.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");


    if (menu.classList.contains("active")) {
      hamburguer.textContent = "✖"; // muda para X
    } else {
      hamburguer.textContent = "☰"; // volta para hamburguer
    }
  });

  // Fecha o menu se clicar no overlay
  overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    hamburguer.textContent = "☰";
  });



  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    alert("Mensagem enviada com sucesso!");
});

    cepInput.addEventListener("blur", () => {
    const cep = cepInput.value.replace(/\D/g, ""); // remove caracteres não numéricos
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          if (!data.erro) {
            document.getElementById("rua").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("uf").value = data.uf;
          } else {
            alert("CEP não encontrado!");
          }
        })
        .catch(() => alert("Erro ao consultar o CEP."));
    } else {
      alert("CEP inválido. Digite 8 números.");
    }
  });


  // Alternar tema claro/escuro
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Alternar tema";
  document.body.prepend(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
  });
  
});



