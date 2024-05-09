const checkbox = document.getElementById("checkbox");
const logoImg = document.getElementById("logoimg");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    logoImg.classList.toggle("logoimg");
})