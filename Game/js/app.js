const unitsBox = document.getElementById("units");

const xp = localStorage.getItem("finalXP") || 0;

document.getElementById("xpValue").textContent = xp;

units.forEach(unit => {

    const questions = unit.lessons[0].questions.length;

    const card = document.createElement("div");

    card.className = "unit-card";

    card.innerHTML = `

        <div class="card-top">

            <div class="badge">
                Unit ${unit.id}
            </div>

            <i class="fa-solid fa-book-open"></i>

        </div>

        <h3>${unit.name}</h3>

        <p>${questions} Questions</p>

        <button onclick="startGame(${unit.id})">

            Start Learning

            <i class="fa-solid fa-arrow-right"></i>

        </button>

    `;

    unitsBox.appendChild(card);

});

const toggle = document.getElementById("themeToggle");

if(localStorage.theme==="light"){
    document.body.classList.add("light");
}

toggle.onclick=()=>{

    document.body.classList.toggle("light");

    localStorage.theme=
        document.body.classList.contains("light")
        ?"light":"dark";

};
function startGame(id){

    localStorage.setItem("unitId",id);
    localStorage.setItem("xp",0);
    localStorage.setItem("lives",3);

    window.location.href="game.html";

}