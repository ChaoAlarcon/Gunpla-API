document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const button = document.getElementById("searchButton");
  const results = document.getElementById("results");

  let gunplas = [];

  fetch("http://localhost:3000/gunpla")
    .then(res => res.json())
    .then(data => {
      gunplas = data.data;
      mostrarResultados(gunplas);
    })
    .catch(error => {
      console.error("Error al conectar con la API:", error);
      results.innerHTML = "<p style='color:red;'>No se pudo conectar con la API.</p>";
    });

  function mostrarResultados(lista) {
    results.innerHTML = "";
    if (lista.length === 0) {
      results.innerHTML = "<p>No se encontraron resultados.</p>";
      return;
    }

    lista.forEach(item => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p><strong>Serie:</strong> ${item.series}</p>
        <p><strong>Altura:</strong> ${item.height} m</p>
        <p><strong>Fabricante:</strong> ${item.manufacturer}</p>
        <p><strong>Precio:</strong> ${item.price}</p>
        <p><strong>Lanzamiento:</strong> ${item.release}</p>
      `;
      results.appendChild(div);
    });
  }

  button.addEventListener("click", () => {
    const texto = input.value.toLowerCase();
    const filtrados = gunplas.filter(g => g.name.toLowerCase().includes(texto));
    mostrarResultados(filtrados);
  });

  input.addEventListener("input", () => {
    const texto = input.value.toLowerCase();
    const filtrados = gunplas.filter(g => g.name.toLowerCase().includes(texto));
    mostrarResultados(filtrados);
  });
});
