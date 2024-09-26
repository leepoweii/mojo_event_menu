document.addEventListener("DOMContentLoaded", () => {
  const jsonFile = "json/menu.json"; // Path to your JSON file

  fetch(jsonFile)
    .then((response) => response.json())
    .then((data) => {
      // Load Event Header
      const eventHeader = document.getElementById("event-header");
      eventHeader.innerHTML = `<h1>${data.event_header.header}</h1>`;

      // Load Cocktails
      const cocktailMenu = document.querySelector(".cocktails-list");
      data.categories.cocktails.forEach((cocktail) => {
        const cocktailDiv = document.createElement("div");
        cocktailDiv.className = "cocktail";
        cocktailDiv.innerHTML = `
          <h3 class="cocktail-name">${cocktail.name}</h3>
          <p class="cocktail-ingredients">${cocktail.ingredients}</p>
        `;
        cocktailMenu.appendChild(cocktailDiv);
      });

      // Load Mocktails
      const mocktailMenu = document.querySelector(".mocktails-list");
      data.categories.mocktails.forEach((mocktail) => {
        const mocktailDiv = document.createElement("div");
        mocktailDiv.className = "mocktail";
        mocktailDiv.innerHTML = `
          <h3 class="mocktail-name">${mocktail.name}</h3>
          <p class="mocktail-ingredients">${mocktail.ingredients}</p>
        `;
        mocktailMenu.appendChild(mocktailDiv);
      });
    })
    .catch((error) => console.error("Error loading menu:", error));
});
