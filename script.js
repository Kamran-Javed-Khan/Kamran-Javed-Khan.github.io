let adviceId = '';
let adviceIdSection = document.querySelector(".advice-id");

let adviceText = '';
let adviceTextSection = document.querySelector(".advice-text");

fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then(data => {
    adviceId = data?.slip?.id;
    adviceIdSection.textContent = adviceIdSection.textContent.replace("#", "#" + adviceId);

    adviceText = data?.slip?.advice;
    adviceTextSection.textContent = adviceTextSection.textContent.replace("\"\"", "\"" + adviceText + "\"");
});