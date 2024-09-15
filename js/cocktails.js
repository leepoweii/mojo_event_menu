document.addEventListener("DOMContentLoaded", () => {
  const loadContent = (lang) => {
    const jsonFile =
      lang === "zh" ? "json/cocktails_zh.json" : "json/cocktails_en.json";

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
            <div class="cocktail-image">
              <img src="img/${cocktail.photo}" alt="${cocktail.name}">
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
          <h4>${data.rules.disclaimer.title}</h4>
          <ul>
            ${data.rules.disclaimer.content
              .map((item) => `<li>${item}</li>`)
              .join("")}
          </ul>
        `;
      })
      .catch((error) => console.error("Error loading content:", error));
  };

  // Load the initial content in Chinese
  loadContent("zh");

  // Language switch functionality
  document
    .getElementById("lang-en")
    .addEventListener("click", () => loadContent("en"));
  document
    .getElementById("lang-zh")
    .addEventListener("click", () => loadContent("zh"));
});
