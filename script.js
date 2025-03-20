var lights = document.querySelectorAll(".light");
var currentIndex = 0;
function changeLight() {
    lights.forEach(function (light) { return light.classList.remove("active"); });
    lights[currentIndex].classList.add("active");
    currentIndex = (currentIndex + 1) % lights.length;
}
setInterval(changeLight, 2000);
changeLight(); // Start the sequence
