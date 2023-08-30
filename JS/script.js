const inputName = document.getElementById("name");

inputName.focus();

const jobRole = document.getElementById("title");
const otherJobRole = document.getElementById("other-job-role");

otherJobRole.style.display = "none";

jobRole.addEventListener("change", (e) => {
  let targetValue = e.target.value;
  if (targetValue === "other") {
    otherJobRole.style.display = "block";
  } else {
    otherJobRole.style.display = "none";
  }
});

const design = document.getElementById("design");
const color = document.getElementById("color");
const colorOptions = color.children;
color.disabled = true;

design.addEventListener("change", (e) => {
  color.disabled = false;

  for (let i = 0; i < colorOptions.length; i++) {
    const targetValue = e.target.value;
    const itemAttribute = colorOptions[i].getAttribute("data-theme");

    if (targetValue === itemAttribute) {
      colorOptions[i].hidden = false;
      colorOptions[i].selected = true;
    } else {
      colorOptions[i].hidden = true;
      colorOptions[i].selected = false;
    }
  }
});

const activities = document.getElementById("activities");
const totalElement = document.getElementById("activities-cost");
let activitiesTotal = 0;

activities.addEventListener("change", (e) => {
  const activityCost = Number(e.target.getAttribute("data-cost"));

  if (e.target.checked === true) {
    activitiesTotal += activityCost;
  } else {
    activitiesTotal -= activityCost;
  }

  totalElement.innerHTML = `<p>Total: $${activitiesTotal}</p>`;
});

const payment = document.getElementById("payment");
const creditCard = document.getElementById("credit-card");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");

paypal.style.display = "none";
bitcoin.style.display = "none";

const secondChild = payment.children[1];
secondChild.setAttribute("selected", true);

payment.addEventListener("change", (e) => {
  if (e.target.value === "paypal") {
    paypal.style.display = "block";
    creditCard.style.display = "none";
    bitcoin.style.display = "none";
  } else if (e.target.value === "bitcoin") {
    paypal.style.display = "none";
    creditCard.style.display = "none";
    bitcoin.style.display = "block";
  } else {
    paypal.style.display = "none";
    creditCard.style.display = "block";
    bitcoin.style.display = "none";
  }
});
