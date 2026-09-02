/* =====================================================
   BTECH QUEST
   STEP 1 - BASIC GAME
===================================================== */


/* =====================================================
   GAME DATA
===================================================== */

const player = {
    x: 650,
    y: 350,

    speed: 5
};


let level = 1;
let xp = 0;
let coins = 100;


/* =====================================================
   ELEMENTS
===================================================== */

const menu =
    document.getElementById("menu");

const howScreen =
    document.getElementById("howScreen");

const aboutScreen =
    document.getElementById("aboutScreen");

const gameScreen =
    document.getElementById("gameScreen");

const campus =
    document.getElementById("campus");

const playerElement =
    document.getElementById("player");

const levelElement =
    document.getElementById("level");

const xpElement =
    document.getElementById("xp");

const coinsElement =
    document.getElementById("coins");


/* =====================================================
   MENU BUTTONS
===================================================== */

document
    .getElementById("startButton")
    .addEventListener("click", startGame);


document
    .getElementById("howButton")
    .addEventListener("click", () => {

        menu.classList.add("hidden");

        howScreen.classList.remove("hidden");

    });


document
    .getElementById("aboutButton")
    .addEventListener("click", () => {

        menu.classList.add("hidden");

        aboutScreen.classList.remove("hidden");

    });


document
    .getElementById("backButton")
    .addEventListener("click", () => {

        howScreen.classList.add("hidden");

        menu.classList.remove("hidden");

    });


document
    .getElementById("aboutBackButton")
    .addEventListener("click", () => {

        aboutScreen.classList.add("hidden");

        menu.classList.remove("hidden");

    });


/* =====================================================
   START GAME
===================================================== */

function startGame() {

    menu.classList.add("hidden");

    gameScreen.classList.remove("hidden");

    updatePlayer();

}


/* =====================================================
   KEYBOARD
===================================================== */

const keys = {};


window.addEventListener("keydown", (event) => {

    keys[event.key.toLowerCase()] = true;

});


window.addEventListener("keyup", (event) => {

    keys[event.key.toLowerCase()] = false;

});


/* =====================================================
   PLAYER MOVEMENT
===================================================== */

function movePlayer() {

    let moved = false;


    if (
        keys["arrowup"] ||
        keys["w"]
    ) {

        player.y -= player.speed;

        moved = true;

    }


    if (
        keys["arrowdown"] ||
        keys["s"]
    ) {

        player.y += player.speed;

        moved = true;

    }


    if (
        keys["arrowleft"] ||
        keys["a"]
    ) {

        player.x -= player.speed;

        moved = true;

    }


    if (
        keys["arrowright"] ||
        keys["d"]
    ) {

        player.x += player.speed;

        moved = true;

    }


    /* WORLD BOUNDARIES */

    player.x =
        Math.max(
            20,
            Math.min(
                1320,
                player.x
            )
        );


    player.y =
        Math.max(
            100,
            Math.min(
                820,
                player.y
            )
        );


    if (moved) {

        updatePlayer();

        checkBuildingCollision();

    }

}


/* =====================================================
   UPDATE PLAYER POSITION
===================================================== */

function updatePlayer() {

    playerElement.style.left =
        player.x + "px";

    playerElement.style.top =
        player.y + "px";

}


/* =====================================================
   GAME LOOP
===================================================== */

function gameLoop() {

    if (
        !gameScreen.classList.contains("hidden")
    ) {

        movePlayer();

    }


    requestAnimationFrame(gameLoop);

}


gameLoop();


/* =====================================================
   BUILDING SYSTEM
===================================================== */

const buildings =
    document.querySelectorAll(".building");


let currentSubject = null;


buildings.forEach((building) => {

    building.addEventListener("click", () => {

        currentSubject =
            building.dataset.subject;

        openSubject(
            currentSubject
        );

    });

});


/* =====================================================
   SUBJECT DATA
===================================================== */

const subjects = {

    programming: {

        title: "💻 Coding Lab",

        description:
            "Learn C, C++, Java, Python and programming fundamentals."

    },


    dsa: {

        title: "🧠 DSA Dungeon",

        description:
            "Master arrays, strings, linked lists, stacks, queues, trees, graphs and algorithms."

    },


    dbms: {

        title: "🗄️ DB Lab",

        description:
            "Learn SQL, database design, keys, normalization and DBMS concepts."

    },


    networks: {

        title: "🌐 Network Lab",

        description:
            "Learn OSI, TCP/IP, IP addressing, routing and networking concepts."

    },


    os: {

        title: "🖥️ Operating Systems Lab",

        description:
            "Learn processes, threads, scheduling, memory management and file systems."

    },


    ai: {

        title: "🤖 AI Lab",

        description:
            "Explore Artificial Intelligence, Machine Learning and intelligent systems."

    }

};


/* =====================================================
   SUBJECT POPUP
===================================================== */

const subjectPopup =
    document.getElementById("subjectPopup");

const popupTitle =
    document.getElementById("popupTitle");

const popupDescription =
    document.getElementById("popupDescription");


function openSubject(subject) {

    const data =
        subjects[subject];

    if (!data) return;


    popupTitle.textContent =
        data.title;

    popupDescription.textContent =
        data.description;


    subjectPopup.classList.remove("hidden");

}


/* =====================================================
   CLOSE SUBJECT POPUP
===================================================== */

document
    .getElementById("closePopup")
    .addEventListener("click", () => {

        subjectPopup.classList.add("hidden");

    });


/* =====================================================
   CHALLENGE SYSTEM
===================================================== */

document
    .getElementById("challengeButton")
    .addEventListener("click", () => {

        subjectPopup.classList.add("hidden");

        startChallenge(
            currentSubject
        );

    });


/* =====================================================
   QUESTIONS
===================================================== */

const questionBank = {

    programming: [

        {
            question:
                "Which language is commonly used for system programming?",

            answers: [
                "HTML",
                "C",
                "CSS",
                "SQL"
            ],

            correct: 1
        },

        {
            question:
                "Which symbol is commonly used to terminate a statement in C?",

            answers: [
                ":",
                ";",
                ".",
                ","
            ],

            correct: 1
        }

    ],


    dsa: [

        {
            question:
                "Which data structure follows LIFO?",

            answers: [
                "Queue",
                "Stack",
                "Graph",
                "Tree"
            ],

            correct: 1
        },

        {
            question:
                "Which data structure follows FIFO?",

            answers: [
                "Stack",
                "Tree",
                "Queue",
                "Graph"
            ],

            correct: 2
        }

    ],


    dbms: [

        {
            question:
                "Which language is mainly used to query relational databases?",

            answers: [
                "SQL",
                "HTML",
                "CSS",
                "XML"
            ],

            correct: 0
        }

    ],


    networks: [

        {
            question:
                "How many layers are in the OSI model?",

            answers: [
                "5",
                "6",
                "7",
                "8"
            ],

            correct: 2
        }

    ],


    os: [

        {
            question:
                "What does CPU stand for?",

            answers: [
                "Central Processing Unit",
                "Computer Processing Utility",
                "Central Program Unit",
                "Computer Program Unit"
            ],

            correct: 0
        }

    ],


    ai: [

        {
            question:
                "What does AI stand for?",

            answers: [
                "Automatic Internet",
                "Artificial Intelligence",
                "Advanced Internet",
                "Application Interface"
            ],

            correct: 1
        }

    ]

};


/* =====================================================
   QUESTION STATE
===================================================== */

let currentQuestions = [];

let currentQuestionIndex = 0;

let challengeSubject = null;


/* =====================================================
   START CHALLENGE
===================================================== */

function startChallenge(subject) {

    challengeSubject = subject;

    currentQuestions =
        questionBank[subject] || [];

    currentQuestionIndex = 0;


    if (
        currentQuestions.length === 0
    ) {

        alert(
            "Challenges coming soon!"
        );

        return;

    }


    document
        .getElementById("questionPopup")
        .classList.remove("hidden");


    showQuestion();

}


/* =====================================================
   SHOW QUESTION
===================================================== */

function showQuestion() {

    const question =
        currentQuestions[
            currentQuestionIndex
        ];


    document
        .getElementById("questionTitle")
        .textContent =
        "Challenge " +
        (currentQuestionIndex + 1);


    document
        .getElementById("questionText")
        .textContent =
        question.question;


    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";


    document
        .getElementById("result")
        .textContent = "";


    document
        .getElementById("nextQuestion")
        .classList.add("hidden");


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.textContent =
                answer;


            button.addEventListener(
                "click",
                () => {

                    checkAnswer(
                        index
                    );

                }
            );


            answers.appendChild(
                button
            );

        }
    );

}


/* =====================================================
   CHECK ANSWER
===================================================== */

function checkAnswer(index) {

    const question =
        currentQuestions[
            currentQuestionIndex
        ];


    const result =
        document.getElementById("result");


    const buttons =
        document.querySelectorAll(
            "#answers button"
        );


    buttons.forEach(
        button => {

            button.disabled = true;

        }
    );


    if (
        index === question.correct
    ) {

        result.textContent =
            "✅ Correct! +100 XP";

        result.style.color =
            "#66ff99";


        addXP(100);

        coins += 25;

        updateHUD();

    } else {

        result.textContent =
            "❌ Incorrect!";

        result.style.color =
            "#ff6666";

    }


    document
        .getElementById("nextQuestion")
        .classList.remove("hidden");

}


/* =====================================================
   NEXT QUESTION
===================================================== */

document
    .getElementById("nextQuestion")
    .addEventListener(
        "click",
        () => {

            currentQuestionIndex++;


            if (
                currentQuestionIndex >=
                currentQuestions.length
            ) {

                finishChallenge();

            } else {

                showQuestion();

            }

        }
    );


/* =====================================================
   FINISH CHALLENGE
===================================================== */

function finishChallenge() {

    document
        .getElementById("questionPopup")
        .classList.add("hidden");


    alert(
        "🎉 Challenge completed!"
    );

}


/* =====================================================
   XP SYSTEM
===================================================== */

function addXP(amount) {

    xp += amount;


    const requiredXP =
        level * 500;


    if (
        xp >= requiredXP
    ) {

        level++;

        xp -= requiredXP;


        alert(
            "🎉 LEVEL UP!\n\nYou reached Level " +
            level
        );

    }


    updateHUD();

}


/* =====================================================
   HUD
===================================================== */

function updateHUD() {

    levelElement.textContent =
        level;

    xpElement.textContent =
        xp;

    coinsElement.textContent =
        coins;

}


/* =====================================================
   MOBILE CONTROLS
===================================================== */

function mobileKey(key) {

    keys[key] = true;


    setTimeout(
        () => {

            keys[key] = false;

        },
        150
    );

}


document
    .getElementById("up")
    .addEventListener(
        "touchstart",
        () => mobileKey("w")
    );


document
    .getElementById("down")
    .addEventListener(
        "touchstart",
        () => mobileKey("s")
    );


document
    .getElementById("left")
    .addEventListener(
        "touchstart",
        () => mobileKey("a")
    );


document
    .getElementById("right")
    .addEventListener(
        "touchstart",
        () => mobileKey("d")
    );


/* =====================================================
   INITIALIZE
===================================================== */

updateHUD();

console.log(
    "BTECH QUEST loaded successfully!"
);
