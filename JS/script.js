

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const cepInput = document.getElementById("cep");

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



