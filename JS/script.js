
const inputName = document.getElementById('name');

inputName.focus();

const jobRole = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');

otherJobRole.style.display = "none";

jobRole.addEventListener('change', (e) => {
    let targetValue = e.target.value;
    if(targetValue === "other"){

        otherJobRole.style.display = "block"
    } else{
        otherJobRole.style.display = "none";
    }
    

})


