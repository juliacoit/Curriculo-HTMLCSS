function scrollToSection(id) {
    var element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function carregarPagina(nomeArquivo) {
  fetch('componentes/' + nomeArquivo)
    .then(res => {
      if (!res.ok) throw new Error("Erro ao carregar a página.");
      return res.text();
    })
    .then(html => {
      document.getElementById("container").innerHTML = html;
    })
    .catch(erro => {
      document.getElementById("container").innerHTML = "<p>Erro ao carregar conteúdo.</p>";
      console.error(erro);
    });
}
