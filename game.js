/* =====================================================
   BTECH QUEST
   STEP 2
   CAMPUS EXPLORATION
===================================================== */


/* =====================================================
   PLAYER
===================================================== */

const player = {

    x: 850,

    y: 650,

    width: 60,

    height: 60,

    speed: 4

};


/* =====================================================
   GAME STATE
===================================================== */

let level = 1;

let xp = 0;

let coins = 100;

let gameStarted = false;

let currentSubject = null;

let nearbyBuilding = null;

let nearbyNPC = null;


/* =====================================================
   DOM
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

const camera =
    document.getElementById("camera");

const levelElement =
    document.getElementById("level");

const xpElement =
    document.getElementById("xp");

const coinsElement =
    document.getElementById("coins");

const interaction =
    document.getElementById("interaction");

const interactButton =
    document.getElementById("interactButton");


/* =====================================================
   MENU
===================================================== */

document
    .getElementById("startButton")
    .addEventListener(
        "click",
        startGame
    );


document
    .getElementById("howButton")
    .addEventListener(
        "click",
        () => {

            menu.classList.add("hidden");

            howScreen.classList.remove(
                "hidden"
            );

        }
    );


document
    .getElementById("aboutButton")
    .addEventListener(
        "click",
        () => {

            menu.classList.add("hidden");

            aboutScreen.classList.remove(
                "hidden"
            );

        }
    );


document
    .getElementById("backButton")
    .addEventListener(
        "click",
        () => {

            howScreen.classList.add(
                "hidden"
            );

            menu.classList.remove(
                "hidden"
            );

        }
    );


document
    .getElementById("aboutBackButton")
    .addEventListener(
        "click",
        () => {

            aboutScreen.classList.add(
                "hidden"
            );

            menu.classList.remove(
                "hidden"
            );

        }
    );


/* =====================================================
   START
===================================================== */

function startGame() {

    menu.classList.add("hidden");

    gameScreen.classList.remove(
        "hidden"
    );

    gameStarted = true;

    updateHUD();

    updatePlayer();

    centerCamera();

}


/* =====================================================
   KEYBOARD
===================================================== */

const keys = {};


window.addEventListener(
    "keydown",
    event => {

        const key =
            event.key.toLowerCase();

        keys[key] = true;


        if (
            [
                "arrowup",
                "arrowdown",
                "arrowleft",
                "arrowright",
                " "
            ].includes(key)
        ) {

            event.preventDefault();

        }


        if (
            key === "e"
        ) {

            interact();

        }

    }
);


window.addEventListener(
    "keyup",
    event => {

        keys[
            event.key.toLowerCase()
        ] = false;

    }
);


/* =====================================================
   PLAYER MOVEMENT
===================================================== */

function movePlayer() {

    if (!gameStarted)
        return;


    let dx = 0;

    let dy = 0;


    if (
        keys["w"] ||
        keys["arrowup"]
    ) {

        dy -= 1;

    }


    if (
        keys["s"] ||
        keys["arrowdown"]
    ) {

        dy += 1;

    }


    if (
        keys["a"] ||
        keys["arrowleft"]
    ) {

        dx -= 1;

    }


    if (
        keys["d"] ||
        keys["arrowright"]
    ) {

        dx += 1;

    }


    if (
        dx !== 0 ||
        dy !== 0
    ) {

        const length =
            Math.sqrt(
                dx * dx +
                dy * dy
            );


        dx /= length;

        dy /= length;


        player.x +=
            dx * player.speed;

        player.y +=
            dy * player.speed;

    }


    /* WORLD LIMITS */

    player.x =
        Math.max(
            20,
            Math.min(
                1720,
                player.x
            )
        );


    player.y =
        Math.max(
            100,
            Math.min(
                1120,
                player.y
            )
        );


    updatePlayer();

    centerCamera();

    checkNearby();

}


/* =====================================================
   UPDATE PLAYER
===================================================== */

function updatePlayer() {

    playerElement.style.left =
        player.x + "px";

    playerElement.style.top =
        player.y + "px";

}


/* =====================================================
   CAMERA
===================================================== */

function centerCamera() {

    const screenWidth =
        window.innerWidth;

    const screenHeight =
        window.innerHeight;


    let cameraX =
        player.x -
        screenWidth / 2;

    let cameraY =
        player.y -
        screenHeight / 2;


    const maxX =
        1800 -
        screenWidth;

    const maxY =
        1200 -
        screenHeight;


    cameraX =
        Math.max(
            0,
            Math.min(
                maxX,
                cameraX
            )
        );


    cameraY =
        Math.max(
            0,
            Math.min(
                maxY,
                cameraY
            )
        );


    campus.style.transform =
        `translate(${-cameraX}px, ${-cameraY}px)`;

}


/* =====================================================
   BUILDINGS
===================================================== */

const buildings =
    document.querySelectorAll(
        ".building[data-subject]"
    );


const buildingData = {

    programming: {

        title: "💻 CODING LAB",

        description:
            "Master C, C++, Java, Python and programming fundamentals."

    },

    dsa: {

        title: "🧠 DSA DUNGEON",

        description:
            "Solve algorithms and data structure challenges."

    },

    dbms: {

        title: "🗄️ DB LAB",

        description:
            "Learn SQL, database design, keys and normalization."

    },

    networks: {

        title: "🌐 NETWORK LAB",

        description:
            "Learn OSI, TCP/IP, IP addressing, routing and protocols."

    },

    os: {

        title: "🖥️ OS LAB",

        description:
            "Learn processes, threads, scheduling and memory."

    },

    ai: {

        title: "🤖 AI LAB",

        description:
            "Explore Artificial Intelligence and Machine Learning."

    },

    library: {

        title: "📚 DIGITAL LIBRARY",

        description:
            "Study notes, formulas and B.Tech learning material."

    },

    placement: {

        title: "🏆 PLACEMENT CELL",

        description:
            "Prepare for aptitude, coding and technical interviews."

    }

};


/* =====================================================
   BUILDING CLICK
===================================================== */

buildings.forEach(
    building => {

        building.addEventListener(
            "click",
            () => {

                currentSubject =
                    building.dataset.subject;

                openSubject(
                    currentSubject
                );

            }
        );

    }
);


/* =====================================================
   SUBJECT POPUP
===================================================== */

const subjectPopup =
    document.getElementById(
        "subjectPopup"
    );

const popupTitle =
    document.getElementById(
        "popupTitle"
    );

const popupDescription =
    document.getElementById(
        "popupDescription"
    );


function openSubject(subject) {

    const data =
        buildingData[subject];


    if (!data)
        return;


    popupTitle.textContent =
        data.title;

    popupDescription.textContent =
        data.description;


    subjectPopup.classList.remove(
        "hidden"
    );

}


/* =====================================================
   CLOSE POPUP
===================================================== */

document
    .getElementById("closePopup")
    .addEventListener(
        "click",
        () => {

            subjectPopup.classList.add(
                "hidden"
            );

        }
    );


/* =====================================================
   CHALLENGE
===================================================== */

document
    .getElementById("challengeButton")
    .addEventListener(
        "click",
        () => {

            subjectPopup.classList.add(
                "hidden"
            );

            startChallenge(
                currentSubject
            );

        }
    );


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
                "Which symbol terminates a statement in C?",

            answers: [
                ":",
                ";",
                ".",
                ","
            ],

            correct: 1

        },

        {
            question:
                "Which language is known for indentation-based blocks?",

            answers: [
                "C",
                "Python",
                "SQL",
                "HTML"
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
                "Tree",
                "Graph"
            ],

            correct: 1

        },

        {
            question:
                "Which data structure follows FIFO?",

            answers: [
                "Stack",
                "Queue",
                "Tree",
                "Graph"
            ],

            correct: 1

        },

        {
            question:
                "Which algorithm is commonly used for shortest paths?",

            answers: [
                "Dijkstra",
                "Bubble Sort",
                "Binary Search",
                "Selection Sort"
            ],

            correct: 0

        }

    ],


    dbms: [

        {
            question:
                "Which language is mainly used for relational database queries?",

            answers: [
                "SQL",
                "HTML",
                "CSS",
                "Python"
            ],

            correct: 0

        },

        {
            question:
                "What does DBMS stand for?",

            answers: [
                "Data Backup Management System",
                "Database Management System",
                "Digital Binary Management System",
                "Database Memory System"
            ],

            correct: 1

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

        },

        {
            question:
                "What does IP stand for?",

            answers: [
                "Internet Protocol",
                "Internal Program",
                "Internet Process",
                "Input Protocol"
            ],

            correct: 0

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

        },

        {
            question:
                "Which is responsible for process scheduling?",

            answers: [
                "Operating System",
                "Compiler",
                "Browser",
                "Database"
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

        },

        {
            question:
                "Which is a branch of AI?",

            answers: [
                "Machine Learning",
                "HTML",
                "CSS",
                "SQL"
            ],

            correct: 0

        }

    ],


    placement: [

        {
            question:
                "Which data structure is frequently asked in coding interviews?",

            answers: [
                "Stack",
                "Image",
                "HTML",
                "Color"
            ],

            correct: 0

        },

        {
            question:
                "Which skill is important for technical placements?",

            answers: [
                "DSA",
                "Only gaming",
                "Only typing",
                "None"
            ],

            correct: 0

        }

    ]

};


/* =====================================================
   QUESTION STATE
===================================================== */

let currentQuestions = [];

let currentQuestionIndex = 0;


/* =====================================================
   START CHALLENGE
===================================================== */

function startChallenge(subject) {

    currentQuestions =
        questionBank[subject] || [];


    if (
        currentQuestions.length === 0
    ) {

        alert(
            "Study content coming soon!"
        );

        return;

    }


    currentQuestionIndex = 0;


    document
        .getElementById(
            "questionPopup"
        )
        .classList.remove(
            "hidden"
        );


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
        .getElementById(
            "questionNumber"
        )
        .textContent =
        currentQuestionIndex + 1;


    document
        .getElementById(
            "questionTitle"
        )
        .textContent =
        "Challenge";


    document
        .getElementById(
            "questionText"
        )
        .textContent =
        question.question;


    const answers =
        document.getElementById(
            "answers"
        );


    answers.innerHTML = "";


    document
        .getElementById(
            "result"
        )
        .textContent = "";


    document
        .getElementById(
            "nextQuestion"
        )
        .classList.add(
            "hidden"
        );


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement(
                    "button"
                );


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
   ANSWER
===================================================== */

function checkAnswer(index) {

    const question =
        currentQuestions[
            currentQuestionIndex
        ];


    const result =
        document.getElementById(
            "result"
        );


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
        index ===
        question.correct
    ) {

        result.textContent =
            "✅ Correct! +100 XP +25 Coins";

        result.style.color =
            "#66ff99";


        addXP(100);

        coins += 25;


        updateHUD();

    } else {

        result.textContent =
            "❌ Incorrect. Try to learn from the explanation.";

        result.style.color =
            "#ff7777";

    }


    document
        .getElementById(
            "nextQuestion"
        )
        .classList.remove(
            "hidden"
        );

}


/* =====================================================
   NEXT
===================================================== */

document
    .getElementById(
        "nextQuestion"
    )
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
   FINISH
===================================================== */

function finishChallenge() {

    document
        .getElementById(
            "questionPopup"
        )
        .classList.add(
            "hidden"
        );


    coins += 50;

    updateHUD();


    alert(
        "🎉 Challenge Complete!\n\n+50 Bonus Coins"
    );

}


/* =====================================================
   XP
===================================================== */

function addXP(amount) {

    xp += amount;


    const required =
        level * 500;


    if (
        xp >= required
    ) {

        xp -= required;

        level++;


        alert(
            "🎉 LEVEL UP!\n\nLevel " +
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
   NEARBY SYSTEM
===================================================== */

function checkNearby() {

    nearbyBuilding = null;

    nearbyNPC = null;


    let nearestDistance =
        Infinity;


    /* BUILDINGS */

    buildings.forEach(
        building => {

            const rect =
                building.getBoundingClientRect();


            const campusX =
                parseFloat(
                    building.style.left ||
                    getComputedStyle(
                        building
                    ).left
                );


            const campusY =
                parseFloat(
                    building.style.top ||
                    getComputedStyle(
                        building
                    ).top
                );


            const centerX =
                campusX +
                building.offsetWidth / 2;


            const centerY =
                campusY +
                building.offsetHeight / 2;


            const dx =
                player.x -
                centerX;


            const dy =
                player.y -
                centerY;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (
                distance <
                180 &&
                distance <
                nearestDistance
            ) {

                nearestDistance =
                    distance;

                nearbyBuilding =
                    building;

            }

        }
    );


    buildings.forEach(
        building => {

            building.classList.remove(
                "near"
            );

        }
    );


    if (nearbyBuilding) {

        nearbyBuilding.classList.add(
            "near"
        );


        const subject =
            nearbyBuilding.dataset.subject;


        interaction.textContent =
            "🏫 " +
            buildingData[subject].title +
            " — Press E or ENTER";


        interactButton.classList.remove(
            "hidden"
        );


        return;

    }


    /* NPC */

    checkNPC();

}


/* =====================================================
   NPC
===================================================== */

function checkNPC() {

    const npcs = [

        document.getElementById(
            "teacher"
        ),

        document.getElementById(
            "studentNPC"
        )

    ];


    let nearest = null;

    let distanceBest =
        Infinity;


    npcs.forEach(
        npc => {

            const x =
                parseFloat(
                    getComputedStyle(
                        npc
                    ).left
                );


            const y =
                parseFloat(
                    getComputedStyle(
                        npc
                    ).top
                );


            const dx =
                player.x - x;


            const dy =
                player.y - y;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (
                distance < 120 &&
                distance <
                distanceBest
            ) {

                nearest = npc;

                distanceBest =
                    distance;

            }

        }
    );


    if (nearest) {

        nearbyNPC =
            nearest;


        interaction.textContent =
            "💬 Talk to " +
            (
                nearest.id ===
                "teacher"
                    ? "Professor"
                    : "Student"
            ) +
            " — Press E";


        interactButton.classList.remove(
            "hidden"
        );

    } else {

        nearbyNPC = null;


        interaction.textContent =
            "Explore the campus";


        interactButton.classList.add(
            "hidden"
        );

    }

}


/* =====================================================
   INTERACT
===================================================== */

interactButton.addEventListener(
    "click",
    interact
);


function interact() {

    if (nearbyBuilding) {

        currentSubject =
            nearbyBuilding.dataset.subject;


        openSubject(
            currentSubject
        );


        return;

    }


    if (nearbyNPC) {

        openDialogue(
            nearbyNPC.id
        );

    }

}


/* =====================================================
   DIALOGUE
===================================================== */

const dialoguePopup =
    document.getElementById(
        "dialoguePopup"
    );

const dialogueCharacter =
    document.getElementById(
        "dialogueCharacter"
    );

const dialogueName =
    document.getElementById(
        "dialogueName"
    );

const dialogueText =
    document.getElementById(
        "dialogueText"
    );


const dialogues = {

    teacher: [

        "Welcome, student!",

        "Your goal is not just to pass exams.",

        "Learn programming and build real projects.",

        "Visit the Coding Lab to start your journey."

    ],

    studentNPC: [

        "Hey! Have you tried the DSA Dungeon?",

        "I am practicing coding every day.",

        "The Placement Cell is useful for interview preparation."

    ]

};


let dialogueIndex = 0;

let dialogueType = "";


function openDialogue(type) {

    dialogueType =
        type;

    dialogueIndex = 0;


    dialoguePopup.classList.remove(
        "hidden"
    );


    showDialogue();

}


function showDialogue() {

    const data =
        dialogues[
            dialogueType
        ];


    dialogueCharacter.textContent =
        dialogueType === "teacher"
            ? "👨‍🏫"
            : "🧑‍🎓";


    dialogueName.textContent =
        dialogueType === "teacher"
            ? "Professor"
            : "Student";


    dialogueText.textContent =
        data[dialogueIndex];

}


/* =====================================================
   NEXT DIALOGUE
===================================================== */

document
    .getElementById(
        "dialogueNext"
    )
    .addEventListener(
        "click",
        () => {

            dialogueIndex++;


            if (
                dialogueIndex >=
                dialogues[
                    dialogueType
                ].length
            ) {

                dialoguePopup.classList.add(
                    "hidden"
                );

            } else {

                showDialogue();

            }

        }
    );


/* =====================================================
   MOBILE CONTROLS
===================================================== */

function mobileMove(key) {

    keys[key] = true;


    setTimeout(
        () => {

            keys[key] = false;

        },
        160
    );

}


function setupMobileButton(
    id,
    key
) {

    const button =
        document.getElementById(id);


    button.addEventListener(
        "touchstart",
        event => {

            event.preventDefault();

            keys[key] = true;

        }
    );


    button.addEventListener(
        "touchend",
        event => {

            event.preventDefault();

            keys[key] = false;

        }
    );


    button.addEventListener(
        "mousedown",
        () => {

            keys[key] = true;

        }
    );


    button.addEventListener(
        "mouseup",
        () => {

            keys[key] = false;

        }
    );

}


setupMobileButton(
    "up",
    "w"
);

setupMobileButton(
    "down",
    "s"
);

setupMobileButton(
    "left",
    "a"
);

setupMobileButton(
    "right",
    "d"
);


/* =====================================================
   GAME LOOP
===================================================== */

function gameLoop() {

    if (
        gameStarted &&
        document
            .getElementById(
                "questionPopup"
            )
            .classList.contains(
                "hidden"
            ) &&
        document
            .getElementById(
                "subjectPopup"
            )
            .classList.contains(
                "hidden"
            ) &&
        document
            .getElementById(
                "dialoguePopup"
            )
            .classList.contains(
                "hidden"
            )
    ) {

        movePlayer();

    }


    requestAnimationFrame(
        gameLoop
    );

}


gameLoop();


/* =====================================================
   INITIALIZE
===================================================== */

updateHUD();

updatePlayer();

console.log(
    "BTECH QUEST STEP 2 loaded."
);
