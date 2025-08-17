/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function randomFreelancer(NAMES, OCCUPATIONS, PRICE_RANGE) {
  const name = NAMES[(Math.random() * NAMES.length) | 0];
  const occupation = OCCUPATIONS[(Math.random() * OCCUPATIONS.length) | 0];
  const rate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;
  return { name, occupation, rate };
}

function averageRate(freelancers) {
  if (freelancers.length === 0) return 0;
  {
    const rateSum = freelancers.reduce(
      (accumlator, freelancer) => accumlator + freelancer.rate,
      0
    );
    return rateSum / freelancers.length;
  }
}

function freelancerRow(freelancer) {
  const tr = document.createElement("tr");

  ["name", "occupation", "rate"].forEach((key) => {
    const td = document.createElement("td");
    td.textContent = freelancer[key];
    tr.appendChild(td);
  });

  return tr;
}

function freelancerTable(freelancers) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  ["Name", "Occupation", "Rate"].forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  freelancers.forEach((freelancer) => {
    tbody.appendChild(freelancerRow(freelancer));
  });
  table.appendChild(tbody);

  return table;
}

function renderFreelancer() {
  const freelancers = Array.from({ length: NUM_FREELANCERS }, () =>
    randomFreelancer(NAMES, OCCUPATIONS, PRICE_RANGE)
  );
  const app = document.getElementById("app");
  app.innerHTML = "";

  const aveRate = document.createElement("h2");
  aveRate.textContent = `Average Rate: $ ${averageRate(freelancers).toFixed(
    2
  )}`;
  app.appendChild(aveRate);

  const table = freelancerTable(freelancers);
  app.appendChild(table);
}

renderFreelancer();
