import { mockData } from "./mockData.js";

const body = document.querySelector("body");
const cards = document.querySelector(".cards");

// Change points button
const button = document.querySelector(".button");
const pointAdded = document.querySelector(".form__field");
const selectedTeam = document.querySelector(".select-team");

const sortedMockData = mockData.sort((a, b) =>
  a.points < b.points ? 1 : b.points < a.points ? -1 : 0
);

const createDrivers = sortedMockData.forEach((driver, index) => {
  const { firstName, lastName, number, team, points, image, country, hex } =
    driver;
  let newDriver = document.createElement("div");
  newDriver.innerHTML = `<div class="driver-card">
<div class="driver-stats">
  <div class="rank">${index + 1}</div>
  <div class="driver-points">
  ${points} <span class="backg-blk points">PTS</span>
  </div>
</div>
<div class="driver-info">
  <div class="driver-name">
    <span class="first-name">${firstName.toUpperCase()}</span>
    <span class="last-name">${lastName.toUpperCase()}</span>
  </div>
  <div class="driver-country">
    <img class="country-image" src="/country/${country}.jpg" alt="" />
  </div>
</div>
<div class="driver-team">${team}</div>
<div class="driver-appearance">
  <div style="" class="driver-number ${team.toLowerCase()}">${number}</div>
  <div class="driver-photo">
    <img
      class="driver-image"
      src="${image}"
      alt=""
    />
  </div>
</div>
<div class="flip-card-back">
  <p class="info-card">Some Informations</p>
</div>
</div>`;

  cards.appendChild(newDriver);
});

let pointsToAdd;
let teamToAddPoints;
const teams = document.body.querySelectorAll(".driver-team");

button.addEventListener("click", function () {
  pointsToAdd = Number(pointAdded.value);
  teamToAddPoints = selectedTeam.value;
  if (teamToAddPoints !== "Select team:") {
  } else {
    alert("Please select a team!");
  }
  const driversToAddPoints = sortedMockData.forEach((driver, index) => {
    if (driver.team == teamToAddPoints) {
      let driverPoints =
        teams[index].parentElement.querySelector(".driver-points").firstChild
          .textContent;
      let sumOfPoints = Number(driverPoints) + pointsToAdd;
      return (teams[index].parentElement.querySelector(
        ".driver-points"
      ).firstChild.textContent = sumOfPoints);
    }
  });
});
