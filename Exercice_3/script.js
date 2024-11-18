const text = document.getElementById("lastname");

text.addEventListener("keypress", (e) => {
    console.log(`${e.key}`);
});