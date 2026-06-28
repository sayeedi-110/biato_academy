const unitId = Number(localStorage.getItem("unitId"));

const source = typeof gameUnits !== "undefined" ? gameUnits : units;

const unit = source.find(u => u.id === unitId);

if (!unit) {
    alert("Unit not found!");
    window.location.href = "index.html";
}

// =========================
// SHUFFLE
// =========================
function shuffle(array) {
    return array
        .map(v => ({ v, r: Math.random() }))
        .sort((a, b) => a.r - b.r)
        .map(x => x.v);
}

// =========================
// QUESTIONS BUILD
// =========================
let questions = unit.lessons?.[0]?.questions.map(q => {

    const correct = q.correct;
    const shuffled = shuffle([...q.options]);

    return {
        q: q.q,
        options: shuffled,
        answer: shuffled.indexOf(correct)
    };
}) || [];

// =========================
let index = 0;
let xp = 0;
let lives = 3;
let timer = 20;
let interval;

// =========================
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");

// =========================
// HELPERS (IMPORTANT FIX)
// =========================
function updateLives() {
    document.getElementById("lives").textContent = "❤️".repeat(lives);
}

function updateXP() {
    document.getElementById("xp").textContent = xp + " XP";
}

// =========================
document.getElementById("unitTitle").textContent = unit.name;

loadQuestion();

// =========================
// LOAD QUESTION
// =========================
function loadQuestion() {

    clearInterval(interval);

    const q = questions[index];

    timer = 20;

    document.getElementById("timer").textContent = timer;
    updateXP();
    updateLives();

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} / ${questions.length}`;

    document.getElementById("progressBar").style.width =
        ((index + 1) / questions.length * 100) + "%";

    questionEl.textContent = q.q;

    answersEl.innerHTML = "";

    q.options.forEach((option, i) => {

        const div = document.createElement("div");
        div.className = "answer";
        div.textContent = option;

        div.onclick = () => checkAnswer(i);

        answersEl.appendChild(div);
    });

    interval = setInterval(() => {

        timer--;
        document.getElementById("timer").textContent = timer;

        if (timer <= 0) {
            clearInterval(interval);
            lives--;
            updateLives();

            if (lives <= 0) return finishGame();

            nextQuestion();
        }

    }, 1000);
}

// =========================
// CHECK ANSWER
// =========================
function checkAnswer(selectedIndex) {

    clearInterval(interval);

    const q = questions[index];
    const correctIndex = q.answer;

    const buttons = answersEl.children;

    for (let i = 0; i < buttons.length; i++) {
        if (i === correctIndex) {
            buttons[i].classList.add("correct");
        }
    }

    if (selectedIndex === correctIndex) {
        xp += 5;
        updateXP();
        buttons[selectedIndex].classList.add("correct");
    } else {
        buttons[selectedIndex].classList.add("wrong");
        lives--;
        updateLives();
    }

    setTimeout(nextQuestion, 800);
}

// =========================
// NEXT QUESTION
// =========================
function nextQuestion() {

    if (lives <= 0) {
        return finishGame();
    }

    index++;

    if (index >= questions.length) {
        return finishGame();
    }

    loadQuestion();
}

// =========================
// FINISH
// =========================
function finishGame() {

    clearInterval(interval);

    localStorage.setItem("finalXP", xp);
    localStorage.setItem("score", Math.floor(xp / 5));

    window.location.href = "result.html";
}