document.addEventListener("DOMContentLoaded", () => {
  const jsonFile = "json/menu.json"; // Load the default (Chinese) JSON file

  fetch(jsonFile)
    .then((response) => response.json())
    .then((data) => {
      // Load event header
      const eventHeader = document.getElementById("event-header");
      eventHeader.innerHTML = `<h2>${data.event_header.header}</h2>`;

      // Load cocktail menu
      const cocktailMenu = document.getElementById("cocktail-menu");
      cocktailMenu.innerHTML = ""; // Clear previous content
      data.cocktails.forEach((cocktail) => {
        const cocktailDiv = document.createElement("div");
        cocktailDiv.className = "cocktail";
        cocktailDiv.innerHTML = `
          <div class="cocktail-content">
            <h2 class="cocktail-name">${cocktail.name}</h2>
            <p class="cocktail-ingredients">${cocktail.ingredients}</p>
          </div>
        `;
        cocktailMenu.appendChild(cocktailDiv);
      });

      // Load event details
      const eventDetails = document.querySelector(".event-details");
      eventDetails.innerHTML = `
                <h4>${data.rules.event_rules.title}</h4>
        <ol>
          ${data.rules.event_rules.rules
            .map((rule) => `<li>${rule}</li>`)
            .join("")}
        </ol>
      `;
    })
    .catch((error) => console.error("Error loading content:", error));
});
