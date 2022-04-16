const baseUrl = "http://localhost:3000/lanches";

async function findAllLanches() {
  const response = await fetch(`${baseUrl}/lista-lanches`);

  const lanches = await response.json();
};

findAllLanches();
