let planets = [
    { name: "Меркурий", size: 4879, distance: 57.9, image: "planet/Меркурий.jpg" },
    { name: "Венера", size: 12104, distance: 108.2, image: "planet/Венера.jpg" },
    { name: "Земля", size: 12742, distance: 149.6, image: "planet/Земля.jpg" },
    { name: "Марс", size: 6779, distance: 227.9, image: "planet/Марс.jpg" },
    { name: "Юпитер", size: 139820, distance: 778.3, image: "planet/Юпитер.jpg" }
];

const planetContainer = document.getElementById("planetContainer");
const toggleTheme = document.getElementById("toggleTheme");
const filterLarge = document.getElementById("filterLarge");
const resetFilter = document.getElementById("resetFilter");
const searchPlanet = document.getElementById("searchPlanet");
const searchInput = document.getElementById("searchInput");
const addPlanet = document.getElementById("addPlanet");
const randomQuote = document.getElementById("randomQuote");
const quoteText = document.getElementById("quote");
const sortByDistance = document.getElementById("sortByDistance");
const totalPlanets = document.getElementById("totalPlanets");

const quotes = [
    "Космос бесконечен, как наши мечты.",
    "Мы — всего лишь пыль на крыльях Вселенной.",
    "Космос — это не граница, а приглашение к исследованиям.",
    "Вселенная — это огромная книга, которую нам только предстоит прочитать."
];

function displayPlanets(planetsArray) {
    planetContainer.innerHTML = "";
    planetsArray.forEach(planet => {
        let planetDiv = document.createElement("div");
        planetDiv.classList.add("planet-card");
        planetDiv.innerHTML = `
            <img src="${planet.image}" alt="${planet.name}">
            <h3>${planet.name}</h3>
            <p>Размер: ${planet.size} км</p>
            <p>Расстояние: ${planet.distance} млн км</p>
        `;
        planetContainer.appendChild(planetDiv);
    });

    totalPlanets.textContent = `Общее число планет: ${planetsArray.length}`;
}

displayPlanets(planets);

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
});

filterLarge.addEventListener("click", () => {
    let largePlanets = planets.filter(planet => planet.size > 10000);
    displayPlanets(largePlanets);
});

resetFilter.addEventListener("click", () => {
    displayPlanets(planets);
});

searchPlanet.addEventListener("click", () => {
    let searchTerm = searchInput.value.toLowerCase();
    let found = planets.find(planet => planet.name.toLowerCase() === searchTerm);
    if (found) {
        displayPlanets([found]);
    } else {
        alert("Планета не найдена!");
    }
});

addPlanet.addEventListener("click", () => {
    let name = prompt("Введите название планеты:");
    let size = parseInt(prompt("Введите размер планеты (км):"));
    let distance = parseFloat(prompt("Введите расстояние от Солнца (млн км):"));
    let image = prompt("Введите ссылку на изображение:");

    if (name && size && distance && image) {
        planets.push({ name, size, distance, image });
        displayPlanets(planets);
    } else {
        alert("Некорректные данные!");
    }
});

randomQuote.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
});

sortByDistance.addEventListener("click", () => {
    let nearest = [...planets].sort((a, b) => a.distance - b.distance)[0];
    displayPlanets([nearest]);
});
