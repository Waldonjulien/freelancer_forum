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
      (accumlator, freelancer) => accumlator + freelancer,
      0
    );
    return rateSum / freelancers.length;
  }
}

// function freelancerTable() {
//   const header = document.createElement("header");
//   const table = document.createElement("table");
// }
