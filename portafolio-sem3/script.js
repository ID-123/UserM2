const btn = document.getElementById("textChange");
const textOne = document.getElementById("text1");
const textTwo = document.getElementById("text2");

btn.addEventListener("click", () => {
    textTwo.classList.toggle("active");
    textOne.classList.toggle("inactive");
});
