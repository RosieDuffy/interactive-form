// Name Section - adding focus to 'Name' field //

const inputName = document.getElementById("name");

inputName.focus();

// Job Role Section - displaying 'Other Job Role' field only when it is selected from the dropdown menu //

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

// T-Shirt Section - allowing only available designs to be selected to correspond with users selection //

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

// Activities Section -keeps running total cost of activities selected by user //

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

// Payment Info Section - displaying correct form information when payment type is selected by user //

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
    paypal.hidden = false;
    creditCard.hidden = true;
    bitcoin.hidden = true;
  } else if (e.target.value === "bitcoin") {
    paypal.hidden = true;
    creditCard.hidden = true;
    bitcoin.hidden = false;
  } else {
    paypal.hidden = true;
    creditCard.hidden = false;
    bitcoin.hidden = true;
  }
});

// Form Validation//

const email = document.getElementById("email");
const cardNumber = document.getElementById("cc-num");
const zipCode = document.getElementById("zip");
const cvv = document.getElementById("cvv");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  // Name Validation //

  const nameValue = inputName.value;
  const nameTest = /^[a-zA-Z]+$/;
  const validName = nameTest.test(nameValue);

  if (validName === false || nameValue === "") {
    e.preventDefault();
    inputName.parentElement.classList.add("not-valid");
    inputName.parentElement.classList.remove("valid");
    inputName.parentElement.lastElementChild.style.display = "inline";
  } else {
    inputName.parentElement.classList.add("valid");
    inputName.parentElement.classList.remove("not-valid");
    inputName.parentElement.lastElementChild.style.display = "none";
  }

  // Email Validation //

  const emailValue = email.value;
  const emailTest = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const validEmail = emailTest.test(emailValue);

  if (validEmail === false || emailValue === "") {
    e.preventDefault();
    email.parentElement.classList.add("not-valid");
    email.parentElement.classList.remove("valid");
    email.parentElement.lastElementChild.style.display = "inline";
  } else {
    email.parentElement.classList.add("valid");
    email.parentElement.classList.remove("not-valid");
    email.parentElement.lastElementChild.style.display = "none";
  }

  // Activities Selected Validation //

  if (activitiesTotal === 0) {
    e.preventDefault();
    activities.parentElement.classList.add("not-valid");
    activities.parentElement.classList.remove("valid");
    activities.parentElement.lastElementChild.style.display = "inline";
  } else {
    activities.parentElement.classList.add("valid");
    activities.parentElement.classList.remove("not-valid");
    activities.parentElement.lastElementChild.style.display = "none";
  }

  // Credit Card Validation //

  if ((creditCard.style.display = "block")) {
    // Credit Card Number Validation //

    const cardNumberValue = cardNumber.value;
    const cardNumberTest = /^\d{13,16}$/;
    const validCardNumber = cardNumberTest.test(cardNumberValue);

    if (validCardNumber === false || cardNumberValue === "") {
      e.preventDefault();
      cardNumber.parentElement.classList.add("not-valid");
      cardNumber.parentElement.classList.remove("valid");
      cardNumber.parentElement.lastElementChild.style.display = "inline";
    } else {
      cardNumber.parentElement.classList.add("valid");
      cardNumber.parentElement.classList.remove("not-valid");
      cardNumber.parentElement.lastElementChild.style.display = "none";
    }

    // Zip Code Validation //

    const zipCodeValue = zipCode.value;
    const zipCodeTest = /^\d{5}$/;
    const validZipCode = zipCodeTest.test(zipCodeValue);

    if (validZipCode === false || zipCodeValue === "") {
      e.preventDefault();
      zipCode.parentElement.classList.add("not-valid");
      zipCode.parentElement.classList.remove("valid");
      zipCode.parentElement.lastElementChild.style.display = "inline";
    } else {
      zipCode.parentElement.classList.add("valid");
      zipCode.parentElement.classList.remove("not-valid");
      zipCode.parentElement.lastElementChild.style.display = "none";
    }

    // CVV Validation //

    const cvvValue = cvv.value;
    const cvvTest = /^\d{3}$/;
    const validCVV = cvvTest.test(cvvValue);

    if (validCVV === false || cvvValue === "") {
      e.preventDefault();
      cvv.parentElement.classList.add("not-valid");
      cvv.parentElement.classList.remove("valid");
      cvv.parentElement.lastElementChild.style.display = "inline";
    } else {
      cvv.parentElement.classList.add("valid");
      cvv.parentElement.classList.remove("not-valid");
      cvv.parentElement.lastElementChild.style.display = "none";
    }
  } else {
    e.preventDefault();
  }
});

// Accessibilty - adding and removing focus on activities checkboxes //

const activitiesChecked = document.querySelectorAll('input[type="checkbox"]');

for (let i = 0; i < activitiesChecked.length; i++) {
  activitiesChecked[i].addEventListener("focus", (e) => {
    activitiesChecked[i].parentNode.classList.add("focus");
  });
  activitiesChecked[i].addEventListener("blur", (e) => {
    activitiesChecked[i].parentNode.classList.remove("focus");
  });
}
