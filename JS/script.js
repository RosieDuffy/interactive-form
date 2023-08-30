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
