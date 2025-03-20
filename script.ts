const lights = document.querySelectorAll(".light");
let currentIndex = 0;

function changeLight() {
    lights.forEach(light => light.classList.remove("active"));
    lights[currentIndex].classList.add("active");
    
    currentIndex = (currentIndex + 1) % lights.length;
}

setInterval(changeLight, 2000);
changeLight(); // Start the sequence
