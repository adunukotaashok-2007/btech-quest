/* =========================================================
   BTECH QUEST
   STEP 4 GAME ENGINE
========================================================= */


/* =========================================================
   WORLD CONFIGURATION
========================================================= */

const WORLD_WIDTH = 2200;
const WORLD_HEIGHT = 1500;


/* =========================================================
   GAME STATE
========================================================= */

const defaultGameState = {

    level: 1,

    xp: 0,

    coins: 100,

    player: {
        x: 1050,
        y: 370,
        speed: 5
    },

    completedSubjects: [],

    completedCoding: [],

    totalQuestionsAnswered: 0,

    correctAnswers: 0
};


let gameState = loadProgress();


/* =========================================================
   BUILDING DATA
========================================================= */

const buildingData = {

    programming: {
        icon: "💻",
        title: "Programming Arena",
        description:
            "Practice Python, C, C++ and Java through coding challenges.",
        type: "coding"
    },

    dsa: {
        icon: "🧠",
        title: "DSA Dungeon",
        description:
            "Master Arrays, Strings, Stack, Queue, Trees, Graphs and Algorithms.",
        type: "quiz"
    },

    dbms: {
        icon: "🗄️",
        title: "DB Lab",
        description:
            "Learn DBMS, SQL, Keys, Normalization and Transactions.",
        type: "quiz"
    },

    networks: {
        icon: "🌐",
        title: "Network Lab",
        description:
            "Learn OSI, TCP/IP, IP addressing, protocols and networking.",
        type: "quiz"
    },

    os: {
        icon: "🖥️",
        title: "Operating Systems Lab",
        description:
            "Study processes, scheduling, memory, deadlocks and file systems.",
        type: "quiz"
    },

    ai: {
        icon: "🤖",
        title: "AI / ML Lab",
        description:
            "Learn Artificial Intelligence and Machine Learning concepts.",
        type: "quiz"
    },

    cybersecurity: {
        icon: "🔐",
        title: "Cybersecurity Lab",
        description:
            "Learn phishing awareness, passwords, authentication and security.",
        type: "quiz"
    },

    cloud: {
        icon: "☁️",
        title: "Cloud Computing Center",
        description:
            "Learn IaaS, PaaS, SaaS, cloud deployment and scalability.",
        type: "quiz"
    },

    mathematics: {
        icon: "📐",
        title: "Engineering Mathematics",
        description:
            "Practice calculus, probability, matrices and mathematics.",
        type: "quiz"
    },

    aptitude: {
        icon: "🧮",
        title: "Aptitude Center",
        description:
            "Practice quantitative aptitude and logical reasoning.",
        type: "quiz"
    },

    library: {
        icon: "📚",
        title: "Digital Library",
        description:
            "Browse B.Tech study topics and learning resources.",
        type: "info"
    },

    placement: {
        icon: "💼",
        title: "Placement Cell",
        description:
            "Prepare for technical and HR interviews.",
        type: "quiz"
    },

    cafeteria: {
        icon: "🍔",
        title: "Cafeteria",
        description:
            "Take a break before your next mission.",
        type: "dialogue"
    }
};


/* =========================================================
   DOM
========================================================= */

const mainMenu =
    document.getElementById("mainMenu");

const gameScreen =
    document.getElementById("gameScreen");

const world =
    document.getElementById("world");

const player =
    document.getElementById("player");


const levelText =
    document.getElementById("levelText");

const xpText =
    document.getElementById("xpText");

const coinsText =
    document.getElementById("coinsText");

const completedText =
    document.getElementById("completedText");


const interactionBox =
    document.getElementById("interactionBox");

const interactionText =
    document.getElementById("interactionText");

const interactionBtn =
    document.getElementById("interactionBtn");


const subjectPopup =
    document.getElementById("subjectPopup");

const subjectIcon =
    document.getElementById("subjectIcon");

const subjectTitle =
    document.getElementById("subjectTitle");

const subjectDescription =
    document.getElementById("subjectDescription");

const startSubjectBtn =
    document.getElementById("startSubjectBtn");

const subjectInfoBtn =
    document.getElementById("subjectInfoBtn");


const questionPopup =
    document.getElementById("questionPopup");

const quizSubject =
    document.getElementById("quizSubject");

const questionProgress =
    document.getElementById("questionProgress");

const questionText =
    document.getElementById("questionText");

const answers =
    document.getElementById("answers");

const quizFeedback =
    document.getElementById("quizFeedback");

const nextQuestionBtn =
    document.getElementById("nextQuestionBtn");


const dialoguePopup =
    document.getElementById("dialoguePopup");

const dialogueName =
    document.getElementById("dialogueName");

const dialogueText =
    document.getElementById("dialogueText");

const dialogueOkBtn =
    document.getElementById("dialogueOkBtn");


const codingArenaPopup =
    document.getElementById("codingArenaPopup");

const codingChallengeTitle =
    document.getElementById("codingChallengeTitle");

const codingLanguage =
    document.getElementById("codingLanguage");

const codingDifficulty =
    document.getElementById("codingDifficulty");

const codingDescription =
    document.getElementById("codingDescription");

const expectedOutput =
    document.getElementById("expectedOutput");

const codeEditor =
    document.getElementById("codeEditor");

const codeResult =
    document.getElementById("codeResult");

const hintBox =
    document.getElementById("hintBox");

const hintText =
    document.getElementById("hintText");

const runCodeBtn =
    document.getElementById("runCodeBtn");

const hintBtn =
    document.getElementById("hintBtn");

const resetCodeBtn =
    document.getElementById("resetCodeBtn");

const nextCodingBtn =
    document.getElementById("nextCodingBtn");

const finishCodingBtn =
    document.getElementById("finishCodingBtn");


const infoPopup =
    document.getElementById("infoPopup");

const infoTitle =
    document.getElementById("infoTitle");

const infoContent =
    document.getElementById("infoContent");


/* =========================================================
   GAME VARIABLES
========================================================= */

const keys = {};

let currentSubject = null;

let currentQuestions = [];

let currentQuestionIndex = 0;

let currentQuestionAnswered = false;

let currentCodingIndex = 0;

let hintIndex = 0;

let nearestBuilding = null;


/* =========================================================
   START GAME
========================================================= */

document
    .getElementById("startBtn")
    .addEventListener("click", startGame);


document
    .getElementById("howToBtn")
    .addEventListener("click", () => {
        openPopup("howToPopup");
    });


document
    .getElementById("aboutBtn")
    .addEventListener("click", () => {
        openPopup("aboutPopup");
    });


function startGame() {

    mainMenu.classList.remove("active");

    gameScreen.classList.add("active");

    loadPlayerPosition();

    updateHUD();

    centerCamera();

    startGameLoop();

}


/* =========================================================
   KEYBOARD
========================================================= */

window.addEventListener("keydown", event => {

    keys[event.key.toLowerCase()] = true;

    keys[event.key] = true;

    if (
        event.key === "e" ||
        event.key === "E"
    ) {

        if (
            !isAnyPopupOpen() &&
            nearestBuilding
        ) {

            interactWithBuilding();

        }

    }

});


window.addEventListener("keyup", event => {

    keys[event.key.toLowerCase()] = false;

    keys[event.key] = false;

});


/* =========================================================
   MOBILE CONTROLS
========================================================= */

document
    .querySelectorAll("#mobileControls button")
    .forEach(button => {

        const key =
            button.dataset.key;

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

    });


interactionBtn.addEventListener(
    "click",
    interactWithBuilding
);


/* =========================================================
   GAME LOOP
========================================================= */

let gameLoopStarted = false;


function startGameLoop() {

    if (gameLoopStarted) {
        return;
    }

    gameLoopStarted = true;

    requestAnimationFrame(gameLoop);

}


function gameLoop() {

    updatePlayer();

    updateCamera();

    updateNearbyBuilding();

    requestAnimationFrame(gameLoop);

}


/* =========================================================
   PLAYER MOVEMENT
========================================================= */

function updatePlayer() {

    if (
        isAnyPopupOpen()
    ) {
        return;
    }


    let dx = 0;
    let dy = 0;


    if (
        keys["w"] ||
        keys["ArrowUp"]
    ) {
        dy -= 1;
    }


    if (
        keys["s"] ||
        keys["ArrowDown"]
    ) {
        dy += 1;
    }


    if (
        keys["a"] ||
        keys["ArrowLeft"]
    ) {
        dx -= 1;
    }


    if (
        keys["d"] ||
        keys["ArrowRight"]
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


        gameState.player.x +=
            dx *
            gameState.player.speed;

        gameState.player.y +=
            dy *
            gameState.player.speed;


        gameState.player.x =
            Math.max(
                0,
                Math.min(
                    WORLD_WIDTH - 55,
                    gameState.player.x
                )
            );


        gameState.player.y =
            Math.max(
                80,
                Math.min(
                    WORLD_HEIGHT - 80,
                    gameState.player.y
                )
            );


        renderPlayer();

    }

}


/* =========================================================
   RENDER PLAYER
========================================================= */

function renderPlayer() {

    player.style.left =
        `${gameState.player.x}px`;

    player.style.top =
        `${gameState.player.y}px`;

}


/* =========================================================
   CAMERA
========================================================= */

function centerCamera() {

    updateCamera();

}


function updateCamera() {

    const viewport =
        document.getElementById(
            "gameViewport"
        );


    const viewportWidth =
        viewport.clientWidth;

    const viewportHeight =
        viewport.clientHeight;


    let cameraX =
        gameState.player.x -
        viewportWidth / 2;


    let cameraY =
        gameState.player.y -
        viewportHeight / 2;


    cameraX =
        Math.max(
            0,
            Math.min(
                WORLD_WIDTH -
                viewportWidth,
                cameraX
            )
        );


    cameraY =
        Math.max(
            0,
            Math.min(
                WORLD_HEIGHT -
                viewportHeight,
                cameraY
            )
        );


    world.style.transform =
        `translate(${-cameraX}px, ${-cameraY}px)`;

}


/* =========================================================
   NEAREST BUILDING
========================================================= */

function updateNearbyBuilding() {

    const buildings =
        document.querySelectorAll(
            ".building[data-subject]"
        );


    let closest = null;

    let closestDistance = Infinity;


    buildings.forEach(building => {

        const rect = {
            x: parseFloat(building.style.left),
            y: parseFloat(building.style.top)
        };


        const centerX =
            rect.x +
            building.offsetWidth / 2;


        const centerY =
            rect.y +
            building.offsetHeight / 2;


        const playerCenterX =
            gameState.player.x +
            27;


        const playerCenterY =
            gameState.player.y +
            35;


        const distance =
            Math.sqrt(
                Math.pow(
                    centerX -
                    playerCenterX,
                    2
                ) +
                Math.pow(
                    centerY -
                    playerCenterY,
                    2
                )
            );


        building.classList.remove(
            "nearby"
        );


        if (
            distance < 230 &&
            distance < closestDistance
        ) {

            closestDistance = distance;

            closest = building;

        }

    });


    nearestBuilding = closest;


    if (nearestBuilding) {

        nearestBuilding.classList.add(
            "nearby"
        );


        const subject =
            nearestBuilding.dataset.subject;


        const data =
            buildingData[subject];


        if (
            isSubjectCompleted(subject)
        ) {

            interactionText.textContent =
                `${data.icon} ${data.title} — COMPLETED`;

        } else {

            interactionText.textContent =
                `${data.icon} ${data.title} — Press E`;

        }

    } else {

        interactionText.textContent =
            "Explore the campus";

    }

}


/* =========================================================
   BUILDING INTERACTION
========================================================= */

function interactWithBuilding() {

    if (!nearestBuilding) {
        return;
    }


    const subject =
        nearestBuilding.dataset.subject;


    openSubject(subject);

}


/* =========================================================
   OPEN SUBJECT
========================================================= */

function openSubject(subject) {

    currentSubject = subject;


    const data =
        buildingData[subject];


    if (!data) {
        return;
    }


    subjectIcon.textContent =
        data.icon;


    subjectTitle.textContent =
        data.title;


    subjectDescription.textContent =
        data.description;


    if (
        isSubjectCompleted(subject)
    ) {

        startSubjectBtn.textContent =
            "🔄 PLAY AGAIN";

    } else {

        startSubjectBtn.textContent =
            "🚀 START MISSION";

    }


    openPopup(
        "subjectPopup"
    );

}


/* =========================================================
   START SUBJECT
========================================================= */

startSubjectBtn.addEventListener(
    "click",
    () => {

        closePopup("subjectPopup");


        if (!currentSubject) {
            return;
        }


        const data =
            buildingData[
                currentSubject
            ];


        if (
            data.type === "coding"
        ) {

            openCodingArena();

            return;

        }


        if (
            data.type === "quiz"
        ) {

            startQuiz(
                currentSubject
            );

            return;

        }


        if (
            data.type === "info"
        ) {

            showLibraryInfo();

            return;

        }


        if (
            data.type === "dialogue"
        ) {

            showDialogue(
                "Cafeteria",
                "🍔",
                "Take a short break! Your B.Tech journey is just beginning. Keep learning and keep going."
            );

        }

    }
);


/* =========================================================
   SUBJECT INFO
========================================================= */

subjectInfoBtn.addEventListener(
    "click",
    () => {

        if (!currentSubject) {
            return;
        }


        showSubjectInfo(
            currentSubject
        );

    }
);


function showSubjectInfo(subject) {

    const data =
        buildingData[subject];


    closePopup("subjectPopup");


    infoTitle.textContent =
        `${data.icon} ${data.title}`;


    const descriptions = {

        programming: `
            <div class="info-section">
                <strong>Programming</strong>
                <p>Learn Python, C, C++ and Java.</p>
            </div>

            <div class="info-section">
                <strong>Topics</strong>
                <p>Variables, conditions, loops, functions, arrays and problem solving.</p>
            </div>
        `,

        dsa: `
            <div class="info-section">
                <strong>DSA</strong>
                <p>Learn how data structures and algorithms solve computational problems.</p>
            </div>

            <div class="info-section">
                <strong>Topics</strong>
                <p>Arrays, Strings, Stack, Queue, Linked List, Trees, Graphs and Sorting.</p>
            </div>
        `,

        dbms: `
            <div class="info-section">
                <strong>DBMS</strong>
                <p>Learn how databases store and manage information.</p>
            </div>

            <div class="info-section">
                <strong>Topics</strong>
                <p>SQL, Keys, Normalization, Transactions and Database Design.</p>
            </div>
        `,

        networks: `
            <div class="info-section">
                <strong>Computer Networks</strong>
                <p>Understand communication between computers.</p>
            </div>

            <div class="info-section">
                <strong>Topics</strong>
                <p>OSI, TCP/IP, IP Addressing, HTTP, TCP, UDP and Network Devices.</p>
            </div>
        `,

        os: `
            <div class="info-section">
                <strong>Operating Systems</strong>
                <p>Learn how operating systems manage computer resources.</p>
            </div>

            <div class="info-section">
                <strong>Topics</strong>
                <p>Processes, Threads, Scheduling, Memory, Deadlocks and File Systems.</p>
            </div>
        `,

        ai: `
            <div class="info-section">
                <strong>AI / ML</strong>
                <p>Learn the fundamentals of Artificial Intelligence and Machine Learning.</p>
            </div>

            <div class="info-section">
                <strong>Topics</strong>
                <p>AI, ML, Supervised Learning, Classification and Model Training.</p>
            </div>
        `,

        cybersecurity: `
            <div class="info-section">
                <strong>Cybersecurity</strong>
                <p>Learn how to protect systems, accounts and data.</p>
            </div>

            <div class="info-section">
                <strong>Topics</strong>
                <p>Phishing, Password Security, MFA, Malware and Safe Internet Usage.</p>
            </div>
        `,

        cloud: `
            <div class="info-section">
                <strong>Cloud Computing</strong>
                <p>Learn how computing resources can be delivered through cloud platforms.</p>
            </div>

            <div class="info-section">
                <strong>Topics</strong>
                <p>IaaS, PaaS, SaaS, Public Cloud, Private Cloud and Scalability.</p>
            </div>
        `,

        mathematics: `
            <div class="info-section">
                <strong>Engineering Mathematics</strong>
                <p>Strengthen mathematical concepts required for engineering.</p>
            </div>

            <div class="info-section">
                <strong>Topics</strong>
                <p>Calculus, Matrices, Probability and Statistics.</p>
            </div>
        `,

        aptitude: `
            <div class="info-section">
                <strong>Aptitude</strong>
                <p>Prepare for placement aptitude tests.</p>
            </div>

            <div class="info-section">
                <strong>Topics</strong>
                <p>Percentages, Averages, Number Series, Logical Reasoning and Quantitative Problems.</p>
            </div>
        `,

        placement: `
            <div class="info-section">
                <strong>Placement Preparation</strong>
                <p>Prepare for technical and HR interviews.</p>
            </div>

            <div class="info-section">
                <strong>Topics</strong>
                <p>DSA, Programming, Communication, Problem Solving and HR Questions.</p>
            </div>
        `,

        library: `
            <div class="info-section">
                <strong>Digital Library</strong>
                <p>Your future learning center.</p>
            </div>

            <div class="info-section">
                <strong>Coming Features</strong>
                <p>PDF notes, topic lessons, videos, cheat sheets and previous questions.</p>
            </div>
        `,

        cafeteria: `
            <div class="info-section">
                <strong>🍔 Cafeteria</strong>
                <p>Take a break and return to your missions.</p>
            </div>
        `
    };


    infoContent.innerHTML =
        descriptions[subject] ||
        "<p>Information coming soon.</p>";


    openPopup("infoPopup");

}


/* =========================================================
   QUIZ
========================================================= */

function startQuiz(subject) {

    currentSubject = subject;

    currentQuestions =
        subjectQuestions[subject] || [];

    currentQuestionIndex = 0;

    currentQuestionAnswered = false;


    if (
        currentQuestions.length === 0
    ) {

        showDialogue(
            "Professor",
            "👨‍🏫",
            "Questions for this subject are coming soon."
        );

        return;

    }


    quizSubject.textContent =
        buildingData[subject].title;


    openPopup(
        "questionPopup"
    );


    showQuestion();

}


/* =========================================================
   SHOW QUESTION
========================================================= */

function showQuestion() {

    const question =
        currentQuestions[
            currentQuestionIndex
        ];


    if (!question) {

        finishQuiz();

        return;

    }


    currentQuestionAnswered =
        false;


    questionProgress.textContent =
        `Question ${
            currentQuestionIndex + 1
        } / ${
            currentQuestions.length
        }`;


    questionText.textContent =
        question.question;


    answers.innerHTML = "";

    quizFeedback.textContent = "";

    nextQuestionBtn.style.display =
        "none";


    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer-btn";


            button.textContent =
                `${String.fromCharCode(65 + index)}. ${option}`;


            button.addEventListener(
                "click",
                () => {

                    checkAnswer(
                        index,
                        button
                    );

                }
            );


            answers.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   CHECK ANSWER
========================================================= */

function checkAnswer(
    selectedIndex,
    selectedButton
) {

    if (
        currentQuestionAnswered
    ) {
        return;
    }


    currentQuestionAnswered =
        true;


    const question =
        currentQuestions[
            currentQuestionIndex
        ];


    gameState.totalQuestionsAnswered++;


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    buttons.forEach(
        (button, index) => {

            if (
                index ===
                question.answer
            ) {

                button.classList.add(
                    "correct"
                );

            }

        }
    );


    if (
        selectedIndex ===
        question.answer
    ) {

        selectedButton.classList.add(
            "correct"
        );


        gameState.correctAnswers++;


        const rewardXP = 50;

        const rewardCoins = 10;


        addXP(rewardXP);

        addCoins(rewardCoins);


        quizFeedback.innerHTML =
            `✅ Correct! +${rewardXP} XP +${rewardCoins} 🪙<br><small>${question.explanation}</small>`;

    } else {

        selectedButton.classList.add(
            "wrong"
        );


        quizFeedback.innerHTML =
            `❌ Wrong answer.<br><small>${question.explanation}</small>`;

    }


    if (
        currentQuestionIndex <
        currentQuestions.length - 1
    ) {

        nextQuestionBtn.style.display =
            "block";

    } else {

        nextQuestionBtn.textContent =
            "🏆 COMPLETE";

        nextQuestionBtn.style.display =
            "block";

    }


    saveProgress();

}


/* =========================================================
   NEXT QUESTION
========================================================= */

nextQuestionBtn.addEventListener(
    "click",
    () => {

        currentQuestionIndex++;


        if (
            currentQuestionIndex >=
            currentQuestions.length
        ) {

            finishQuiz();

        } else {

            nextQuestionBtn.textContent =
                "NEXT ➡️";

            showQuestion();

        }

    }
);


/* =========================================================
   FINISH QUIZ
========================================================= */

function finishQuiz() {

    closePopup(
        "questionPopup"
    );


    if (
        currentSubject &&
        !isSubjectCompleted(
            currentSubject
        )
    ) {

        gameState.completedSubjects.push(
            currentSubject
        );


        addXP(250);

        addCoins(100);


        saveProgress();


        showDialogue(
            "Professor",
            "👨‍🏫",
            `Excellent work! You completed ${buildingData[currentSubject].title}. You earned a 250 XP completion bonus and 100 coins!`
        );

    } else {

        showDialogue(
            "Professor",
            "👨‍🏫",
            "Mission completed again! Keep practicing to improve your knowledge."
        );

    }


    updateBuildingCompletion();

}


/* =========================================================
   CODING ARENA
========================================================= */

function openCodingArena() {

    currentCodingIndex =
        findNextCodingChallenge();


    loadCodingChallenge();


    openPopup(
        "codingArenaPopup"
    );

}


/* =========================================================
   FIND NEXT CODING
========================================================= */

function findNextCodingChallenge() {

    for (
        let i = 0;
        i < codingChallenges.length;
        i++
    ) {

        if (
            !gameState.completedCoding.includes(
                codingChallenges[i].id
            )
        ) {

            return i;

        }

    }


    return 0;

}


/* =========================================================
   LOAD CODING CHALLENGE
========================================================= */

function loadCodingChallenge() {

    const challenge =
        codingChallenges[
            currentCodingIndex
        ];


    if (!challenge) {
        return;
    }


    codingChallengeTitle.textContent =
        challenge.title;


    codingLanguage.textContent =
        challenge.language;


    codingDifficulty.textContent =
        challenge.difficulty;


    codingDescription.textContent =
        challenge.description;


    expectedOutput.textContent =
        challenge.expectedOutput;


    codeEditor.value =
        challenge.starterCode;


    codeResult.textContent =
        "";


    hintBox.classList.remove(
        "show"
    );


    hintIndex = 0;


    hintText.textContent =
        "";


    nextCodingBtn.disabled =
        false;

}


/* =========================================================
   RUN CODE
========================================================= */

runCodeBtn.addEventListener(
    "click",
    simulateCode
);


/* =========================================================
   FRONTEND CODE SIMULATOR
========================================================= */

function simulateCode() {

    const challenge =
        codingChallenges[
            currentCodingIndex
        ];


    const code =
        codeEditor.value.trim();


    if (!code) {

        codeResult.textContent =
            "❌ Editor is empty.";

        return;

    }


    let passed = false;


    const lower =
        code.toLowerCase();


    /* =============================================
       CHALLENGE 1
    ============================================= */

    if (
        challenge.id === 1
    ) {

        passed =
            lower.includes(
                "print"
            ) &&
            lower.includes(
                "hello b.tech quest"
            );

    }


    /* =============================================
       CHALLENGE 2
    ============================================= */

    else if (
        challenge.id === 2
    ) {

        passed =
            lower.includes(
                "print"
            ) &&
            (
                lower.includes(
                    "a + b"
                ) ||
                lower.includes(
                    "10 + 20"
                )
            );

    }


    /* =============================================
       CHALLENGE 3
    ============================================= */

    else if (
        challenge.id === 3
    ) {

        passed =
            lower.includes(
                "%"
            ) &&
            lower.includes(
                "even"
            );

    }


    /* =============================================
       CHALLENGE 4
    ============================================= */

    else if (
        challenge.id === 4
    ) {

        passed =
            (
                lower.includes(
                    "max"
                ) &&
                lower.includes(
                    "25"
                )
            ) ||
            lower.includes(
                "25"
            );

    }


    /* =============================================
       CHALLENGE 5
    ============================================= */

    else if (
        challenge.id === 5
    ) {

        passed =
            lower.includes(
                "text"
            ) &&
            (
                lower.includes(
                    "[::-1]"
                ) ||
                lower.includes(
                    "reverse"
                )
            );

    }


    /* =============================================
       CHALLENGE 6
    ============================================= */

    else if (
        challenge.id === 6
    ) {

        passed =
            lower.includes(
                "#include"
            ) &&
            lower.includes(
                "printf"
            ) &&
            lower.includes(
                "hello c"
            );

    }


    /* =============================================
       CHALLENGE 7
    ============================================= */

    else if (
        challenge.id === 7
    ) {

        passed =
            lower.includes(
                "printf"
            ) &&
            lower.includes(
                "10"
            ) &&
            lower.includes(
                "20"
            );

    }


    /* =============================================
       CHALLENGE 8
    ============================================= */

    else if (
        challenge.id === 8
    ) {

        passed =
            lower.includes(
                "cout"
            ) &&
            lower.includes(
                "welcome coder"
            );

    }


    /* =============================================
       CHALLENGE 9
    ============================================= */

    else if (
        challenge.id === 9
    ) {

        passed =
            lower.includes(
                "system.out.println"
            ) &&
            lower.includes(
                "welcome java"
            );

    }


    /* =============================================
       CHALLENGE 10
    ============================================= */

    else if (
        challenge.id === 10
    ) {

        passed =
            lower.includes(
                "level"
            ) &&
            (
                lower.includes(
                    "[::-1]"
                ) ||
                lower.includes(
                    "reverse"
                )
            ) &&
            lower.includes(
                "palindrome"
            );

    }


    if (passed) {

        completeCodingChallenge();

    } else {

        codeResult.textContent =
            "❌ Test failed.\n\nCheck your logic and try again.";

    }

}


/* =========================================================
   COMPLETE CODING CHALLENGE
========================================================= */

function completeCodingChallenge() {

    const challenge =
        codingChallenges[
            currentCodingIndex
        ];


    if (
        gameState.completedCoding.includes(
            challenge.id
        )
    ) {

        codeResult.textContent =
            "✅ Already completed.";

        return;

    }


    gameState.completedCoding.push(
        challenge.id
    );


    addXP(
        challenge.xp
    );


    addCoins(
        challenge.coins
    );


    codeResult.textContent =
        `✅ Challenge Passed!\n\n+${challenge.xp} XP\n+${challenge.coins} Coins`;


    saveProgress();

}


/* =========================================================
   HINT
========================================================= */

hintBtn.addEventListener(
    "click",
    () => {

        const challenge =
            codingChallenges[
                currentCodingIndex
            ];


        if (
            !challenge ||
            !challenge.hints
        ) {
            return;
        }


        if (
            hintIndex >=
            challenge.hints.length
        ) {

            hintIndex = 0;

        }


        hintText.textContent =
            challenge.hints[
                hintIndex
            ];


        hintBox.classList.add(
            "show"
        );


        hintIndex++;

    }
);


/* =========================================================
   RESET CODE
========================================================= */

resetCodeBtn.addEventListener(
    "click",
    () => {

        const challenge =
            codingChallenges[
                currentCodingIndex
            ];


        if (!challenge) {
            return;
        }


        codeEditor.value =
            challenge.starterCode;


        codeResult.textContent =
            "";


        hintBox.classList.remove(
            "show"
        );

    }
);


/* =========================================================
   NEXT CODING CHALLENGE
========================================================= */

nextCodingBtn.addEventListener(
    "click",
    () => {

        currentCodingIndex++;


        if (
            currentCodingIndex >=
            codingChallenges.length
        ) {

            currentCodingIndex = 0;

        }


        loadCodingChallenge();

    }
);


/* =========================================================
   FINISH CODING ARENA
========================================================= */

finishCodingBtn.addEventListener(
    "click",
    () => {

        closePopup(
            "codingArenaPopup"
        );


        addCoins(50);

        saveProgress();


        showDialogue(
            "Programming Professor",
            "👨‍🏫",
            "Good job! Keep practicing your programming skills. Real online code execution and multiplayer coding battles will be added in a future backend version."
        );

    }
);


/* =========================================================
   XP SYSTEM
========================================================= */

function addXP(amount) {

    gameState.xp += amount;


    let leveledUp = false;


    while (
        gameState.xp >=
        getXPRequired()
    ) {

        gameState.xp -=
            getXPRequired();

        gameState.level++;

        leveledUp = true;

    }


    updateHUD();

    saveProgress();


    if (leveledUp) {

        showDialogue(
            "Professor",
            "👨‍🏫",
            `🎉 LEVEL UP! You are now Level ${gameState.level}!`
        );

    }

}


/* =========================================================
   XP REQUIRED
========================================================= */

function getXPRequired() {

    return (
        100 +
        (
            gameState.level - 1
        ) * 50
    );

}


/* =========================================================
   COINS
========================================================= */

function addCoins(amount) {

    gameState.coins += amount;

    updateHUD();

    saveProgress();

}


/* =========================================================
   HUD
========================================================= */

function updateHUD() {

    levelText.textContent =
        gameState.level;


    xpText.textContent =
        `${gameState.xp} / ${getXPRequired()}`;


    coinsText.textContent =
        gameState.coins;


    completedText.textContent =
        `${gameState.completedSubjects.length} / 10`;

}


/* =========================================================
   BUILDING COMPLETION
========================================================= */

function updateBuildingCompletion() {

    document
        .querySelectorAll(
            ".building[data-subject]"
        )
        .forEach(
            building => {

                const subject =
                    building.dataset.subject;


                building.classList.toggle(
                    "completed",
                    isSubjectCompleted(
                        subject
                    )
                );

            }
        );

}


/* =========================================================
   COMPLETED CHECK
========================================================= */

function isSubjectCompleted(
    subject
) {

    return gameState
        .completedSubjects
        .includes(subject);

}


/* =========================================================
   DIALOGUE
========================================================= */

function showDialogue(
    name,
    icon,
    message
) {

    dialogueName.textContent =
        `${icon} ${name}`;


    dialogueText.textContent =
        message;


    openPopup(
        "dialoguePopup"
    );

}


dialogueOkBtn.addEventListener(
    "click",
    () => {

        closePopup(
            "dialoguePopup"
        );

    }
);


/* =========================================================
   POPUP SYSTEM
========================================================= */

function openPopup(id) {

    const popup =
        document.getElementById(id);


    if (popup) {

        popup.classList.add(
            "active"
        );

    }

}


function closePopup(id) {

    const popup =
        document.getElementById(id);


    if (popup) {

        popup.classList.remove(
            "active"
        );

    }

}


function isAnyPopupOpen() {

    return document
        .querySelector(
            ".popup.active"
        ) !== null;

}


/* =========================================================
   CLOSE BUTTONS
========================================================= */

document
    .querySelectorAll(
        ".close-popup"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        button.dataset.close;


                    closePopup(id);

                }
            );

        }
    );


/* =========================================================
   LIBRARY
========================================================= */

function showLibraryInfo() {

    closePopup(
        "subjectPopup"
    );


    infoTitle.textContent =
        "📚 Digital Library";


    infoContent.innerHTML = `

        <div class="info-section">

            <h3>🎓 B.Tech Learning Library</h3>

            <p>
                The Digital Library will contain
                organized learning resources.
            </p>

        </div>

        <div class="info-section">

            <strong>💻 Programming</strong>

            <p>
                Python, C, C++, Java,
                programming fundamentals.
            </p>

        </div>

        <div class="info-section">

            <strong>🧠 DSA</strong>

            <p>
                Arrays, Strings, Linked Lists,
                Trees, Graphs and Algorithms.
            </p>

        </div>

        <div class="info-section">

            <strong>🗄️ DBMS</strong>

            <p>
                SQL, Keys, Normalization,
                Transactions and Database Design.
            </p>

        </div>

        <div class="info-section">

            <strong>🌐 Networks</strong>

            <p>
                OSI, TCP/IP, HTTP, IP addressing
                and networking devices.
            </p>

        </div>

        <div class="info-section">

            <strong>🤖 AI / ML</strong>

            <p>
                Artificial Intelligence,
                Machine Learning and models.
            </p>

        </div>

        <div class="info-section">

            <strong>🚀 Future Library Features</strong>

            <p>
                PDF notes, video lessons,
                previous-year questions,
                interview material and cheat sheets.
            </p>

        </div>

    `;


    openPopup(
        "infoPopup"
    );

}


/* =========================================================
   SAVE PROGRESS
========================================================= */

function saveProgress() {

    try {

        localStorage.setItem(
            "btechQuestSave",
            JSON.stringify(gameState)
        );

    } catch (error) {

        console.log(
            "Save unavailable:",
            error
        );

    }

}


/* =========================================================
   LOAD PROGRESS
========================================================= */

function loadProgress() {

    try {

        const saved =
            localStorage.getItem(
                "btechQuestSave"
            );


        if (!saved) {

            return structuredClone(
                defaultGameState
            );

        }


        const parsed =
            JSON.parse(saved);


        return {

            ...structuredClone(
                defaultGameState
            ),

            ...parsed,

            player: {

                ...defaultGameState.player,

                ...(parsed.player || {})

            },

            completedSubjects:
                Array.isArray(
                    parsed.completedSubjects
                )
                    ? parsed.completedSubjects
                    : [],

            completedCoding:
                Array.isArray(
                    parsed.completedCoding
                )
                    ? parsed.completedCoding
                    : []

        };

    } catch (error) {

        console.log(
            "Could not load save:",
            error
        );


        return structuredClone(
            defaultGameState
        );

    }

}


/* =========================================================
   LOAD PLAYER POSITION
========================================================= */

function loadPlayerPosition() {

    renderPlayer();

    updateBuildingCompletion();

}


/* =========================================================
   RESET SAVE
========================================================= */

window.resetBTechQuest = function () {

    localStorage.removeItem(
        "btechQuestSave"
    );


    location.reload();

};


/* =========================================================
   INITIALIZATION
========================================================= */

updateHUD();

renderPlayer();

updateBuildingCompletion();

console.log(
    "🎓 BTECH QUEST STEP 4 LOADED"
);
