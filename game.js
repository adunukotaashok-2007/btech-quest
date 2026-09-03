/* =====================================================
   BTECH QUEST
   STEP 3
   CAMPUS + PROGRAMMING ARENA
===================================================== */


/* =====================================================
   GAME STATE
===================================================== */

const gameState = {

    level: 1,

    xp: 0,

    coins: 100,

    player: {

        x: 500,

        y: 430,

        speed: 5

    },

    keys: {},

    currentSubject: null,

    currentQuestionIndex: 0,

    currentQuestions: [],

    codingIndex: 0

};



/* =====================================================
   SUBJECT DATA
===================================================== */

const buildingData = {

    programming: {

        icon: "💻",

        title: "CODING LAB",

        description:
            "Master C, C++, Java and Python through programming challenges."

    },


    dsa: {

        icon: "🧠",

        title: "DSA DUNGEON",

        description:
            "Learn arrays, linked lists, stacks, queues, trees, graphs and algorithms."

    },


    dbms: {

        icon: "🗄️",

        title: "DB LAB",

        description:
            "Practice DBMS concepts, SQL, normalization and database design."

    },


    networks: {

        icon: "🌐",

        title: "NETWORK LAB",

        description:
            "Learn computer networks, protocols, OSI model and TCP/IP."

    },


    os: {

        icon: "🖥️",

        title: "OS LAB",

        description:
            "Explore processes, memory management, scheduling and operating systems."

    },


    ai: {

        icon: "🤖",

        title: "AI LAB",

        description:
            "Learn artificial intelligence, machine learning and intelligent systems."

    },


    library: {

        icon: "📚",

        title: "DIGITAL LIBRARY",

        description:
            "Read B.Tech notes, concepts and learning resources."

    },


    placement: {

        icon: "🏢",

        title: "PLACEMENT CELL",

        description:
            "Practice aptitude, technical interviews, HR interviews and placement preparation."

    },


    cafeteria: {

        icon: "🍔",

        title: "CAFETERIA",

        description:
            "Take a short break before your next mission."

    }

};



/* =====================================================
   QUESTION BANK
===================================================== */

const questionBank = {

    dsa: [

        {

            question:
                "Which data structure follows LIFO?",

            answers: [
                "Queue",
                "Stack",
                "Array",
                "Graph"
            ],

            correct: 1,

            xp: 100

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

            correct: 2,

            xp: 100

        }

    ],


    dbms: [

        {

            question:
                "Which language is commonly used to query relational databases?",

            answers: [
                "HTML",
                "SQL",
                "CSS",
                "XML"
            ],

            correct: 1,

            xp: 100

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

            correct: 2,

            xp: 100

        }

    ],


    os: [

        {

            question:
                "Which scheduling algorithm gives each process a time slice?",

            answers: [
                "FCFS",
                "Round Robin",
                "Priority",
                "SJF"
            ],

            correct: 1,

            xp: 100

        }

    ],


    ai: [

        {

            question:
                "What does ML stand for?",

            answers: [

                "Machine Learning",

                "Memory Logic",

                "Machine Language",

                "Model Logic"

            ],

            correct: 0,

            xp: 100

        }

    ],


    placement: [

        {

            question:
                "Which data structure is commonly used for BFS?",

            answers: [
                "Stack",
                "Queue",
                "Heap",
                "Tree"
            ],

            correct: 1,

            xp: 100

        }

    ]

};



/* =====================================================
   DOM
===================================================== */

const mainMenu =
    document.getElementById(
        "mainMenu"
    );

const gameScreen =
    document.getElementById(
        "gameScreen"
    );

const world =
    document.getElementById(
        "world"
    );

const player =
    document.getElementById(
        "player"
    );

const playerLevel =
    document.getElementById(
        "playerLevel"
    );

const playerXP =
    document.getElementById(
        "playerXP"
    );

const playerCoins =
    document.getElementById(
        "playerCoins"
    );

const interactionMessage =
    document.getElementById(
        "interactionMessage"
    );



/* =====================================================
   POPUPS
===================================================== */

const subjectPopup =
    document.getElementById(
        "subjectPopup"
    );

const questionPopup =
    document.getElementById(
        "questionPopup"
    );

const dialoguePopup =
    document.getElementById(
        "dialoguePopup"
    );

const howToPopup =
    document.getElementById(
        "howToPopup"
    );

const aboutPopup =
    document.getElementById(
        "aboutPopup"
    );



/* =====================================================
   START GAME
===================================================== */

document
    .getElementById(
        "startGameButton"
    )
    .addEventListener(
        "click",
        startGame
    );


function startGame() {

    mainMenu.classList.add(
        "hidden"
    );

    gameScreen.classList.remove(
        "hidden"
    );

    updateHUD();

    updateCamera();

}



/* =====================================================
   MENU BUTTON
===================================================== */

document
    .getElementById(
        "menuButton"
    )
    .addEventListener(
        "click",
        () => {

            gameScreen.classList.add(
                "hidden"
            );

            mainMenu.classList.remove(
                "hidden"
            );

        }
    );



/* =====================================================
   HOW TO PLAY
===================================================== */

document
    .getElementById(
        "howToButton"
    )
    .addEventListener(
        "click",
        () => {

            howToPopup.classList.remove(
                "hidden"
            );

        }
    );


document
    .getElementById(
        "closeHowTo"
    )
    .addEventListener(
        "click",
        () => {

            howToPopup.classList.add(
                "hidden"
            );

        }
    );



/* =====================================================
   ABOUT
===================================================== */

document
    .getElementById(
        "aboutButton"
    )
    .addEventListener(
        "click",
        () => {

            aboutPopup.classList.remove(
                "hidden"
            );

        }
    );


document
    .getElementById(
        "closeAbout"
    )
    .addEventListener(
        "click",
        () => {

            aboutPopup.classList.add(
                "hidden"
            );

        }
    );



/* =====================================================
   KEYBOARD
===================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        gameState.keys[
            event.key.toLowerCase()
        ] = true;


        if (
            event.key.toLowerCase() === "e"
        ) {

            interact();

        }

    }
);


document.addEventListener(
    "keyup",
    (event) => {

        gameState.keys[
            event.key.toLowerCase()
        ] = false;

    }
);



/* =====================================================
   MOVEMENT
===================================================== */

function updatePlayer() {

    if (
        gameScreen.classList.contains(
            "hidden"
        )
    )
        return;


    let dx = 0;

    let dy = 0;


    if (
        gameState.keys["w"] ||
        gameState.keys["arrowup"]
    ) {

        dy -= 1;

    }


    if (
        gameState.keys["s"] ||
        gameState.keys["arrowdown"]
    ) {

        dy += 1;

    }


    if (
        gameState.keys["a"] ||
        gameState.keys["arrowleft"]
    ) {

        dx -= 1;

    }


    if (
        gameState.keys["d"] ||
        gameState.keys["arrowright"]
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

    }


    /* WORLD LIMITS */

    gameState.player.x =
        Math.max(
            20,
            Math.min(
                1730,
                gameState.player.x
            )
        );


    gameState.player.y =
        Math.max(
            20,
            Math.min(
                1130,
                gameState.player.y
            )
        );


    player.style.left =
        gameState.player.x +
        "px";


    player.style.top =
        gameState.player.y +
        "px";


    updateCamera();

    checkNearby();

}



/* =====================================================
   GAME LOOP
===================================================== */

function gameLoop() {

    updatePlayer();

    requestAnimationFrame(
        gameLoop
    );

}


gameLoop();



/* =====================================================
   CAMERA
===================================================== */

function updateCamera() {

    const screenWidth =
        window.innerWidth;

    const screenHeight =
        window.innerHeight;


    let cameraX =
        gameState.player.x -
        screenWidth / 2;

    let cameraY =
        gameState.player.y -
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


    world.style.transform =
        `translate(${-cameraX}px, ${-cameraY}px)`;

}



/* =====================================================
   BUILDING DETECTION
===================================================== */

let nearbyBuilding = null;


function checkNearby() {

    const buildings =
        document.querySelectorAll(
            ".building"
        );


    nearbyBuilding = null;


    buildings.forEach(
        building => {

            building.classList.remove(
                "nearby"
            );


            const rect =
                {

                    left:
                        parseFloat(
                            building.style.left ||
                            getComputedStyle(
                                building
                            ).left
                        ),

                    top:
                        parseFloat(
                            building.style.top ||
                            getComputedStyle(
                                building
                            ).top
                        ),

                    width:
                        building.offsetWidth,

                    height:
                        building.offsetHeight

                };


            const centerX =
                rect.left +
                rect.width / 2;

            const centerY =
                rect.top +
                rect.height / 2;


            const distance =
                Math.sqrt(

                    Math.pow(
                        gameState.player.x -
                        centerX,
                        2
                    )

                    +

                    Math.pow(
                        gameState.player.y -
                        centerY,
                        2
                    )

                );


            if (
                distance < 190 &&
                !nearbyBuilding
            ) {

                nearbyBuilding =
                    building;

                building.classList.add(
                    "nearby"
                );

            }

        }
    );


    if (nearbyBuilding) {

        interactionMessage.textContent =
            "Press E to enter " +
            nearbyBuilding.querySelector(
                "h2"
            ).textContent;


        interactionMessage.classList.remove(
            "hidden"
        );

    } else {

        interactionMessage.classList.add(
            "hidden"
        );

    }

}



/* =====================================================
   INTERACT
===================================================== */

function interact() {

    if (!nearbyBuilding)
        return;


    const subject =
        nearbyBuilding.dataset.subject;


    openSubject(
        subject
    );

}



/* =====================================================
   MOBILE CONTROLS
===================================================== */

function holdKey(
    key
) {

    gameState.keys[key] = true;

}


function releaseKey(
    key
) {

    gameState.keys[key] = false;

}


function setupControl(
    id,
    key
) {

    const button =
        document.getElementById(
            id
        );


    if (!button)
        return;


    button.addEventListener(
        "pointerdown",
        event => {

            event.preventDefault();

            holdKey(key);

        }
    );


    button.addEventListener(
        "pointerup",
        event => {

            event.preventDefault();

            releaseKey(key);

        }
    );


    button.addEventListener(
        "pointerleave",
        () => {

            releaseKey(key);

        }
    );


    button.addEventListener(
        "pointercancel",
        () => {

            releaseKey(key);

        }
    );

}


setupControl(
    "upButton",
    "w"
);

setupControl(
    "downButton",
    "s"
);

setupControl(
    "leftButton",
    "a"
);

setupControl(
    "rightButton",
    "d"
);


document
    .getElementById(
        "interactButton"
    )
    .addEventListener(
        "click",
        interact
    );



/* =====================================================
   SUBJECT POPUP
===================================================== */

function openSubject(
    subject
) {

    gameState.currentSubject =
        subject;


    const data =
        buildingData[subject];


    if (!data)
        return;


    document.getElementById(
        "subjectIcon"
    ).textContent =
        data.icon;


    document.getElementById(
        "subjectTitle"
    ).textContent =
        data.title;


    document.getElementById(
        "subjectDescription"
    ).textContent =
        data.description;


    const button =
        document.getElementById(
            "challengeButton"
        );


    if (
        subject ===
        "programming"
    ) {

        button.textContent =
            "💻 OPEN PROGRAMMING ARENA";

    } else if (
        questionBank[subject]
    ) {

        button.textContent =
            "🎯 START CHALLENGE";

    } else {

        button.textContent =
            "📚 EXPLORE";

    }


    subjectPopup.classList.remove(
        "hidden"
    );

}



document
    .getElementById(
        "closeSubjectPopup"
    )
    .addEventListener(
        "click",
        () => {

            subjectPopup.classList.add(
                "hidden"
            );

        }
    );



/* =====================================================
   START CHALLENGE
===================================================== */

document
    .getElementById(
        "challengeButton"
    )
    .addEventListener(
        "click",
        () => {

            const subject =
                gameState.currentSubject;


            subjectPopup.classList.add(
                "hidden"
            );


            if (
                subject ===
                "programming"
            ) {

                openCodingArena();

                return;

            }


            if (
                questionBank[subject]
            ) {

                startQuiz(
                    subject
                );

            } else {

                openDialogue(
                    "BTECH QUEST",
                    "More learning content will be added in the next stage."

                );

            }

        }
    );



/* =====================================================
   QUIZ
===================================================== */

function startQuiz(
    subject
) {

    gameState.currentQuestions =
        questionBank[subject] || [];


    gameState.currentQuestionIndex =
        0;


    if (
        gameState.currentQuestions.length === 0
    ) {

        return;

    }


    showQuestion();

    questionPopup.classList.remove(
        "hidden"
    );

}



function showQuestion() {

    const question =
        gameState.currentQuestions[
            gameState.currentQuestionIndex
        ];


    if (!question) {

        finishQuiz();

        return;

    }


    document.getElementById(
        "questionText"
    ).textContent =
        question.question;


    const answers =
        document.getElementById(
            "answers"
        );


    answers.innerHTML = "";


    question.answers.forEach(
        (
            answer,
            index
        ) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer-button";


            button.textContent =
                answer;


            button.addEventListener(
                "click",
                () => {

                    answerQuestion(
                        index
                    );

                }
            );


            answers.appendChild(
                button
            );

        }
    );


    document.getElementById(
        "questionResult"
    ).textContent =
        "";


    document
        .getElementById(
            "nextQuestionButton"
        )
        .classList.add(
            "hidden"
        );

}



function answerQuestion(
    selected
) {

    const question =
        gameState.currentQuestions[
            gameState.currentQuestionIndex
        ];


    const result =
        document.getElementById(
            "questionResult"
        );


    const buttons =
        document.querySelectorAll(
            ".answer-button"
        );


    buttons.forEach(
        button => {

            button.disabled =
                true;

        }
    );


    if (
        selected ===
        question.correct
    ) {

        result.textContent =
            "✅ Correct! +" +
            question.xp +
            " XP";


        result.style.color =
            "#66ff99";


        addXP(
            question.xp
        );

        gameState.coins += 15;

        updateHUD();


    } else {

        result.textContent =
            "❌ Incorrect. Try to understand the concept and continue.";


        result.style.color =
            "#ff7777";

    }


    document
        .getElementById(
            "nextQuestionButton"
        )
        .classList.remove(
            "hidden"
        );

}



document
    .getElementById(
        "nextQuestionButton"
    )
    .addEventListener(
        "click",
        () => {

            gameState.currentQuestionIndex++;

            showQuestion();

        }
    );



function finishQuiz() {

    questionPopup.classList.add(
        "hidden"
    );


    openDialogue(
        "🎉 CHALLENGE COMPLETE",
        "Excellent work! Keep exploring the campus and complete more B.Tech missions."
    );

}



document
    .getElementById(
        "closeQuestionPopup"
    )
    .addEventListener(
        "click",
        () => {

            questionPopup.classList.add(
                "hidden"
            );

        }
    );



/* =====================================================
   DIALOGUE
===================================================== */

function openDialogue(
    title,
    text
) {

    document.getElementById(
        "dialogueTitle"
    ).textContent =
        title;


    document.getElementById(
        "dialogueText"
    ).textContent =
        text;


    dialoguePopup.classList.remove(
        "hidden"
    );

}


document
    .getElementById(
        "closeDialogue"
    )
    .addEventListener(
        "click",
        () => {

            dialoguePopup.classList.add(
                "hidden"
            );

        }
    );



/* =====================================================
   XP SYSTEM
===================================================== */

function addXP(
    amount
) {

    gameState.xp += amount;


    const requiredXP =
        gameState.level *
        500;


    if (
        gameState.xp >=
        requiredXP
    ) {

        gameState.xp -=
            requiredXP;


        gameState.level++;


        gameState.coins += 100;


        openDialogue(
            "🎉 LEVEL UP!",
            "Congratulations! You reached Level " +
            gameState.level +
            ". You received 100 bonus coins."
        );

    }


    updateHUD();

}



function updateHUD() {

    playerLevel.textContent =
        "Level " +
        gameState.level;


    playerXP.textContent =
        "XP: " +
        gameState.xp;


    playerCoins.textContent =
        "Coins: " +
        gameState.coins;

}



/* =====================================================
   CODING ARENA
===================================================== */

const codingArena =
    document.getElementById(
        "codingArena"
    );


const codingTitle =
    document.getElementById(
        "codingTitle"
    );


const codingLanguage =
    document.getElementById(
        "codingLanguage"
    );


const codingDifficulty =
    document.getElementById(
        "codingDifficulty"
    );


const codingXP =
    document.getElementById(
        "codingXP"
    );


const codingDescription =
    document.getElementById(
        "codingDescription"
    );


const codeEditor =
    document.getElementById(
        "codeEditor"
    );


const codeOutput =
    document.getElementById(
        "codeOutput"
    );


const codeResult =
    document.getElementById(
        "codeResult"
    );


const nextCodingChallenge =
    document.getElementById(
        "nextCodingChallenge"
    );



/* =====================================================
   OPEN CODING ARENA
===================================================== */

function openCodingArena() {

    gameState.codingIndex =
        0;


    showCodingChallenge();


    codingArena.classList.remove(
        "hidden"
    );

}



/* =====================================================
   SHOW CODING CHALLENGE
===================================================== */

function showCodingChallenge() {

    const challenge =
        codingChallenges[
            gameState.codingIndex
        ];


    if (!challenge) {

        finishCodingArena();

        return;

    }


    codingTitle.textContent =
        challenge.title;


    codingLanguage.textContent =
        challenge.language;


    codingDifficulty.textContent =
        challenge.difficulty;


    codingXP.textContent =
        challenge.xp;


    codingDescription.textContent =
        challenge.description;


    codeEditor.value =
        challenge.starterCode;


    codeOutput.textContent =
        "Ready...";


    codeResult.textContent =
        "";


    nextCodingChallenge.classList.add(
        "hidden"
    );

}



/* =====================================================
   RUN CODE
===================================================== */

document
    .getElementById(
        "runCodeButton"
    )
    .addEventListener(
        "click",
        runCode
    );


function runCode() {

    const challenge =
        codingChallenges[
            gameState.codingIndex
        ];


    const code =
        codeEditor.value.trim();


    if (!code) {

        codeOutput.textContent =
            "No code entered.";


        codeResult.textContent =
            "❌ Please write some code.";


        codeResult.style.color =
            "#ff7777";


        return;

    }


    /*
       FRONTEND PRACTICE CHECKER

       GitHub Pages cannot safely compile
       arbitrary C/C++/Java/Python code.

       This version checks the learning
       solution patterns.

       Real compiler/execution will be
       added through the backend later.
    */


    const output =
        simulateCode(
            challenge,
            code
        );


    codeOutput.textContent =
        output;


    if (
        normalizeOutput(
            output
        ) ===
        normalizeOutput(
            challenge.expectedOutput
        )
    ) {

        codeResult.textContent =
            "✅ CORRECT!  +" +
            challenge.xp +
            " XP  +" +
            challenge.coins +
            " Coins";


        codeResult.style.color =
            "#66ff99";


        addXP(
            challenge.xp
        );


        gameState.coins +=
            challenge.coins;


        updateHUD();


        nextCodingChallenge.classList.remove(
            "hidden"
        );

    } else {

        codeResult.textContent =
            "❌ Output does not match. Check your logic and try again.";


        codeResult.style.color =
            "#ff7777";

    }

}



/* =====================================================
   FRONTEND CODE SIMULATOR
===================================================== */

function simulateCode(
    challenge,
    code
) {

    const lower =
        code.toLowerCase();


    /* -----------------------------------------------
       PYTHON HELLO
    ------------------------------------------------ */

    if (
        challenge.id === 1
    ) {

        if (
            lower.includes(
                "print"
            ) &&
            lower.includes(
                "hello b.tech"
            )
        ) {

            return "Hello B.Tech";

        }

    }


    /* -----------------------------------------------
       PYTHON ADDITION
    ------------------------------------------------ */

    if (
        challenge.id === 2
    ) {

        if (
            (
                lower.includes(
                    "a+b"
                )

                ||

                lower.includes(
                    "a + b"
                )
            )

            &&

            lower.includes(
                "print"
            )
        ) {

            return "30";

        }

    }


    /* -----------------------------------------------
       EVEN ODD
    ------------------------------------------------ */

    if (
        challenge.id === 3
    ) {

        if (
            lower.includes(
                "%"
            )

            &&

            lower.includes(
                "2"
            )

            &&

            (
                lower.includes(
                    "even"
                )

                ||

                lower.includes(
                    "odd"
                )
            )
        ) {

            return "Even";

        }

    }


    /* -----------------------------------------------
       LARGEST
    ------------------------------------------------ */

    if (
        challenge.id === 4
    ) {

        if (
            lower.includes(
                "max"
            )

            ||

            (
                lower.includes(
                    ">"
                )

                &&

                (
                    lower.includes(
                        "a"
                    )

                    ||

                    lower.includes(
                        "b"
                    )

                    ||

                    lower.includes(
                        "c"
                    )
                )
            )
        ) {

            return "25";

        }

    }


    /* -----------------------------------------------
       REVERSE
    ------------------------------------------------ */

    if (
        challenge.id === 5
    ) {

        if (
            lower.includes(
                "[::-1]"
            )

            ||

            lower.includes(
                "reversed"
            )
        ) {

            return "HCETB";

        }

    }


    /* -----------------------------------------------
       C HELLO
    ------------------------------------------------ */

    if (
        challenge.id === 6
    ) {

        if (
            lower.includes(
                "printf"
            )

            &&

            lower.includes(
                "hello b.tech"
            )
        ) {

            return "Hello B.Tech";

        }

    }


    /* -----------------------------------------------
       C ADD
    ------------------------------------------------ */

    if (
        challenge.id === 7
    ) {

        if (
            lower.includes(
                "printf"
            )

            &&

            (
                lower.includes(
                    "a+b"
                )

                ||

                lower.includes(
                    "a + b"
                )
            )
        ) {

            return "30";

        }

    }


    /* -----------------------------------------------
       C++
    ------------------------------------------------ */

    if (
        challenge.id === 8
    ) {

        if (
            lower.includes(
                "cout"
            )

            &&

            lower.includes(
                "welcome coder"
            )
        ) {

            return "Welcome Coder";

        }

    }


    /* -----------------------------------------------
       JAVA
    ------------------------------------------------ */

    if (
        challenge.id === 9
    ) {

        if (
            lower.includes(
                "system.out.println"
            )

            &&

            lower.includes(
                "welcome java"
            )
        ) {

            return "Welcome Java";

        }

    }


    /* -----------------------------------------------
       PALINDROME
    ------------------------------------------------ */

    if (
        challenge.id === 10
    ) {

        if (
            lower.includes(
                "palindrome"
            )

            &&

            (
                lower.includes(
                    "[::-1]"
                )

                ||

                lower.includes(
                    "reversed"
                )

                ||

                lower.includes(
                    "word == word"
                )
            )
        ) {

            return "Palindrome";

        }

    }


    return (
        "Program executed.\n\n" +
        "Expected output:\n" +
        challenge.expectedOutput
    );

}



/* =====================================================
   NORMALIZE
===================================================== */

function normalizeOutput(
    text
) {

    return String(text)

        .trim()

        .replace(
            /\s+/g,
            " "
        )

        .toLowerCase();

}



/* =====================================================
   HINT
===================================================== */

document
    .getElementById(
        "hintButton"
    )
    .addEventListener(
        "click",
        showHint
    );


function showHint() {

    const challenge =
        codingChallenges[
            gameState.codingIndex
        ];


    if (
        !challenge ||
        !challenge.hints
    )
        return;


    codeResult.textContent =
        "💡 HINT\n\n" +
        challenge.hints.join(
            "\n\n"
        );


    codeResult.style.color =
        "#ffff88";

}



/* =====================================================
   RESET CODE
===================================================== */

document
    .getElementById(
        "resetCodeButton"
    )
    .addEventListener(
        "click",
        () => {

            const challenge =
                codingChallenges[
                    gameState.codingIndex
                ];


            codeEditor.value =
                challenge.starterCode;


            codeOutput.textContent =
                "Ready...";


            codeResult.textContent =
                "";

        }
    );



/* =====================================================
   NEXT CODING CHALLENGE
===================================================== */

nextCodingChallenge
    .addEventListener(
        "click",
        () => {

            gameState.codingIndex++;

            showCodingChallenge();

        }
    );



/* =====================================================
   CLOSE CODING ARENA
===================================================== */

document
    .getElementById(
        "closeCodingArena"
    )
    .addEventListener(
        "click",
        () => {

            codingArena.classList.add(
                "hidden"
            );

        }
    );



/* =====================================================
   FINISH CODING ARENA
===================================================== */

function finishCodingArena() {

    codingArena.classList.add(
        "hidden"
    );


    gameState.coins += 200;


    updateHUD();


    openDialogue(
        "🏆 CODING ARENA COMPLETE!",
        "Amazing! You completed all programming challenges and earned 200 bonus coins."
    );

}
