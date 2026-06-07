// One script handles both the homepage list and the detail page.
// We look at the URL path to decide what to render.

const app = document.getElementById("app");

// Render the homepage: a title and a grid of food cards.
function renderList(foods) {
  const cards = foods
    .map(
      (food) => `
      <article class="card">
        <img src="${food.image}" alt="${food.name}" />
        <h3>${food.name}</h3>
        <p>
          <span class="badge">${food.price}</span>
          <span class="badge">${food.difficulty}</span>
        </p>
        <p>${food.description}</p>
        <a href="/foods/${food.id}" role="button">View recipe</a>
      </article>
    `
    )
    .join("");

  app.innerHTML = `
    <hgroup>
      <h1>Vietnamese Food Guide for College Students</h1>
      <p>Simple Vietnamese meals you can make or buy cheaply on a student budget.</p>
    </hgroup>
    <div class="grid-cards">${cards}</div>
  `;
}

// Render the detail page: show every field of one food.
function renderDetail(food) {
  const ingredients = food.ingredients
    .map((item) => `<li>${item}</li>`)
    .join("");

  app.innerHTML = `
    <a href="/" role="button" class="secondary">&larr; Back to home</a>
    <article>
      <img class="detail-img" src="${food.image}" alt="${food.name}" />
      <h1>${food.name}</h1>
      <p>
        <span class="badge">${food.price}</span>
        <span class="badge">${food.difficulty}</span>
        <span class="badge">${food.prepTime}</span>
      </p>
      <p>${food.description}</p>

      <h3>Ingredients</h3>
      <ul>${ingredients}</ul>

      <h3>Student Tip</h3>
      <p>💡 ${food.studentTip}</p>
    </article>
  `;
}

// Get all foods for the homepage.
async function loadList() {
  const res = await fetch("/api/foods");
  const foods = await res.json();
  renderList(foods);
}

// Get one food for the detail page. Redirect to 404 if it doesn't exist.
async function loadDetail(id) {
  const res = await fetch(`/api/foods/${id}`);

  if (!res.ok) {
    window.location.href = "/404.html";
    return;
  }

  const food = await res.json();
  renderDetail(food);
}

// Simple router: decide what to show based on the URL path.
const path = window.location.pathname;

if (path.startsWith("/foods/")) {
  const id = path.split("/foods/")[1];
  loadDetail(id);
} else {
  loadList();
}
