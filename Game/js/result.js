const xp = Number(localStorage.getItem("finalXP")) || 0;
const correct = Number(localStorage.getItem("score")) || 0;

const total = 10;

const percent = Math.round((correct / total) * 100);

document.getElementById("xpValue").textContent = xp;

document.getElementById("correctValue").textContent = correct;

document.getElementById("scoreValue").textContent = percent + "%";

let rank = "D";

if(percent >= 95) rank = "S";
else if(percent >= 85) rank = "A";
else if(percent >= 70) rank = "B";
else if(percent >= 50) rank = "C";

document.getElementById("rankValue").textContent = rank;

const circle = document.querySelector(".progress");

const radius = 85;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;

const offset = circumference - (percent / 100) * circumference;

setTimeout(() => {
    circle.style.strokeDashoffset = offset;
}, 300);

// Simple streak tracker
const streak = Number(localStorage.getItem("streak") || 0) + 1;
localStorage.setItem("streak", streak);
document.getElementById("streakValue").textContent = streak;