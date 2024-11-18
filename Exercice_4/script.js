const lastname = document.getElementById("lastname");
const firstname = document.getElementById("firstname");
const city = document.getElementById("city");
const button = document.querySelector("button");

button.addEventListener("click", function() {
    firstname.value = "";
    lastname.value = "";
    city.value = "";
});