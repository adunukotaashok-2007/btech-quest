/* =========================================================
   BTECH QUEST
   SUBJECT QUESTION BANK
========================================================= */

const subjectQuestions = {

    /* =====================================================
       DSA
    ===================================================== */

    dsa: [
        {
            question: "Which data structure follows LIFO?",
            options: [
                "Queue",
                "Stack",
                "Array",
                "Graph"
            ],
            answer: 1,
            explanation:
                "Stack follows Last In First Out."
        },

        {
            question: "Which data structure follows FIFO?",
            options: [
                "Stack",
                "Tree",
                "Queue",
                "Graph"
            ],
            answer: 2,
            explanation:
                "Queue follows First In First Out."
        },

        {
            question: "What is the worst-case time complexity of linear search?",
            options: [
                "O(1)",
                "O(log n)",
                "O(n)",
                "O(n²)"
            ],
            answer: 2,
            explanation:
                "Linear search may check every element."
        },

        {
            question: "Which traversal uses the order Root, Left, Right?",
            options: [
                "Inorder",
                "Preorder",
                "Postorder",
                "Level Order"
            ],
            answer: 1,
            explanation:
                "Preorder traversal is Root, Left, Right."
        },

        {
            question: "Which data structure is commonly used in BFS?",
            options: [
                "Stack",
                "Queue",
                "Heap",
                "Array only"
            ],
            answer: 1,
            explanation:
                "BFS uses a queue."
        }
    ],


    /* =====================================================
       DBMS
    ===================================================== */

    dbms: [
        {
            question: "What does SQL stand for?",
            options: [
                "Simple Query Language",
                "Structured Query Language",
                "System Query Logic",
                "Structured Question Language"
            ],
            answer: 1,
            explanation:
                "SQL means Structured Query Language."
        },

        {
            question: "Which key uniquely identifies a row?",
            options: [
                "Foreign Key",
                "Primary Key",
                "Candidate Key",
                "Super Key"
            ],
            answer: 1,
            explanation:
                "A primary key uniquely identifies records."
        },

        {
            question: "Which command retrieves data?",
            options: [
                "SELECT",
                "DELETE",
                "DROP",
                "UPDATE"
            ],
            answer: 0,
            explanation:
                "SELECT is used to retrieve data."
        },

        {
            question: "Which command removes a table?",
            options: [
                "DELETE",
                "REMOVE",
                "DROP",
                "CLEAR"
            ],
            answer: 2,
            explanation:
                "DROP TABLE removes the table structure."
        },

        {
            question: "Which normal form removes partial dependency?",
            options: [
                "1NF",
                "2NF",
                "3NF",
                "BCNF"
            ],
            answer: 1,
            explanation:
                "Second Normal Form removes partial dependency."
        }
    ],


    /* =====================================================
       OPERATING SYSTEMS
    ===================================================== */

    os: [
        {
            question: "Which scheduling algorithm uses time quantum?",
            options: [
                "FCFS",
                "Round Robin",
                "SJF",
                "Priority"
            ],
            answer: 1,
            explanation:
                "Round Robin uses a fixed time quantum."
        },

        {
            question: "What is a process?",
            options: [
                "A program in execution",
                "A file",
                "A compiler",
                "A memory chip"
            ],
            answer: 0,
            explanation:
                "A process is a program currently executing."
        },

        {
            question: "Which manages virtual memory?",
            options: [
                "Operating System",
                "Keyboard",
                "Monitor",
                "Compiler only"
            ],
            answer: 0,
            explanation:
                "The OS manages virtual memory."
        },

        {
            question: "Which is NOT a process state?",
            options: [
                "Ready",
                "Running",
                "Waiting",
                "Compiling"
            ],
            answer: 3,
            explanation:
                "Compiling is not normally a process state."
        },

        {
            question: "Deadlock occurs when processes are...",
            options: [
                "Running normally",
                "Waiting indefinitely",
                "Being deleted",
                "Using CPU efficiently"
            ],
            answer: 1,
            explanation:
                "Deadlocked processes can wait indefinitely."
        }
    ],


    /* =====================================================
       COMPUTER NETWORKS
    ===================================================== */

    networks: [
        {
            question: "How many layers are in the OSI model?",
            options: [
                "5",
                "6",
                "7",
                "8"
            ],
            answer: 2,
            explanation:
                "The OSI model has seven layers."
        },

        {
            question: "Which protocol is used for web pages?",
            options: [
                "HTTP",
                "FTP",
                "SMTP",
                "ARP"
            ],
            answer: 0,
            explanation:
                "HTTP is used for web communication."
        },

        {
            question: "Which device connects different networks?",
            options: [
                "Switch",
                "Router",
                "Keyboard",
                "Repeater only"
            ],
            answer: 1,
            explanation:
                "Routers connect different networks."
        },

        {
            question: "What does IP stand for?",
            options: [
                "Internet Protocol",
                "Internal Process",
                "Internet Program",
                "Input Protocol"
            ],
            answer: 0,
            explanation:
                "IP means Internet Protocol."
        },

        {
            question: "Which protocol provides reliable transport?",
            options: [
                "UDP",
                "TCP",
                "IP",
                "ARP"
            ],
            answer: 1,
            explanation:
                "TCP provides reliable, connection-oriented transport."
        }
    ],


    /* =====================================================
       AI / ML
    ===================================================== */

    ai: [
        {
            question: "What does AI stand for?",
            options: [
                "Automated Internet",
                "Artificial Intelligence",
                "Advanced Input",
                "Artificial Internet"
            ],
            answer: 1,
            explanation:
                "AI means Artificial Intelligence."
        },

        {
            question: "Which is a type of machine learning?",
            options: [
                "Supervised Learning",
                "Manual Learning",
                "Static Learning",
                "Hardware Learning"
            ],
            answer: 0,
            explanation:
                "Supervised learning is a machine learning approach."
        },

        {
            question: "What is classification?",
            options: [
                "Predicting categories",
                "Deleting data",
                "Compressing files",
                "Creating hardware"
            ],
            answer: 0,
            explanation:
                "Classification predicts discrete categories."
        },

        {
            question: "Which algorithm can be used for classification?",
            options: [
                "Decision Tree",
                "Text Editor",
                "Compiler",
                "Router"
            ],
            answer: 0,
            explanation:
                "Decision Trees can perform classification."
        },

        {
            question: "What is training data?",
            options: [
                "Data used to learn a model",
                "Deleted data",
                "Only hardware data",
                "Operating system files"
            ],
            answer: 0,
            explanation:
                "Training data is used to train machine learning models."
        }
    ],


    /* =====================================================
       CYBERSECURITY
    ===================================================== */

    cybersecurity: [
        {
            question: "What is phishing?",
            options: [
                "A type of social engineering attack",
                "A programming language",
                "A database",
                "A network cable"
            ],
            answer: 0,
            explanation:
                "Phishing attempts to trick users into revealing information."
        },

        {
            question: "Which should never be shared?",
            options: [
                "Public username",
                "OTP",
                "College name",
                "Favorite color"
            ],
            answer: 1,
            explanation:
                "Never share OTPs with others."
        },

        {
            question: "Which is a strong password?",
            options: [
                "123456",
                "password",
                "Ashok123",
                "A9!qZ#72Lm@"
            ],
            answer: 3,
            explanation:
                "Strong passwords use a mixture of characters."
        },

        {
            question: "What does MFA mean?",
            options: [
                "Multi-Factor Authentication",
                "Main File Access",
                "Multiple File Application",
                "Managed Firewall Access"
            ],
            answer: 0,
            explanation:
                "MFA means Multi-Factor Authentication."
        },

        {
            question: "What should you do with a suspicious link?",
            options: [
                "Open immediately",
                "Share it",
                "Verify before opening",
                "Send your OTP"
            ],
            answer: 2,
            explanation:
                "Suspicious links should be verified before opening."
        }
    ],


    /* =====================================================
       CLOUD COMPUTING
    ===================================================== */

    cloud: [
        {
            question: "What does IaaS stand for?",
            options: [
                "Internet as a Service",
                "Infrastructure as a Service",
                "Information as a System",
                "Input as a Service"
            ],
            answer: 1,
            explanation:
                "IaaS means Infrastructure as a Service."
        },

        {
            question: "Which is a cloud service model?",
            options: [
                "SaaS",
                "CPU",
                "RAM",
                "LAN"
            ],
            answer: 0,
            explanation:
                "SaaS is Software as a Service."
        },

        {
            question: "Which is a cloud deployment model?",
            options: [
                "Public Cloud",
                "Keyboard Cloud",
                "CPU Cloud",
                "Cable Cloud"
            ],
            answer: 0,
            explanation:
                "Public cloud is a deployment model."
        },

        {
            question: "What is scalability?",
            options: [
                "Ability to handle changing demand",
                "Deleting servers",
                "Changing keyboard",
                "Formatting a computer"
            ],
            answer: 0,
            explanation:
                "Scalability means adjusting resources to demand."
        },

        {
            question: "Which is commonly associated with cloud computing?",
            options: [
                "On-demand resources",
                "Only offline storage",
                "No networking",
                "No servers"
            ],
            answer: 0,
            explanation:
                "Cloud services commonly provide resources on demand."
        }
    ],


    /* =====================================================
       ENGINEERING MATHEMATICS
    ===================================================== */

    mathematics: [
        {
            question: "What is the derivative of x²?",
            options: [
                "x",
                "2x",
                "x²",
                "2"
            ],
            answer: 1,
            explanation:
                "The derivative of x² is 2x."
        },

        {
            question: "What is 5 × 5?",
            options: [
                "10",
                "20",
                "25",
                "30"
            ],
            answer: 2,
            explanation:
                "5 multiplied by 5 equals 25."
        },

        {
            question: "What is the probability of getting a head in a fair coin toss?",
            options: [
                "0",
                "1/4",
                "1/2",
                "1"
            ],
            answer: 2,
            explanation:
                "A fair coin has two equally likely outcomes."
        },

        {
            question: "What is the determinant of [[1,0],[0,1]]?",
            options: [
                "0",
                "1",
                "2",
                "-1"
            ],
            answer: 1,
            explanation:
                "The determinant of the identity matrix is 1."
        },

        {
            question: "What is the integral of 1 dx?",
            options: [
                "1",
                "x + C",
                "0",
                "x²"
            ],
            answer: 1,
            explanation:
                "The integral of 1 is x + C."
        }
    ],


    /* =====================================================
       APTITUDE
    ===================================================== */

    aptitude: [
        {
            question: "If 10 + 20 = ?",
            options: [
                "20",
                "25",
                "30",
                "40"
            ],
            answer: 2,
            explanation:
                "10 + 20 = 30."
        },

        {
            question: "What is 20% of 100?",
            options: [
                "10",
                "20",
                "30",
                "40"
            ],
            answer: 1,
            explanation:
                "20% of 100 is 20."
        },

        {
            question: "Find the next number: 2, 4, 6, 8, ?",
            options: [
                "9",
                "10",
                "11",
                "12"
            ],
            answer: 1,
            explanation:
                "The sequence increases by 2."
        },

        {
            question: "If A is taller than B and B is taller than C, who is shortest?",
            options: [
                "A",
                "B",
                "C",
                "Cannot determine"
            ],
            answer: 2,
            explanation:
                "C is shorter than both A and B."
        },

        {
            question: "What is the average of 10 and 20?",
            options: [
                "10",
                "15",
                "20",
                "30"
            ],
            answer: 1,
            explanation:
                "(10 + 20) / 2 = 15."
        }
    ],


    /* =====================================================
       PLACEMENT
    ===================================================== */

    placement: [
        {
            question: "Which data structure is used in BFS?",
            options: [
                "Stack",
                "Queue",
                "Heap",
                "Tree"
            ],
            answer: 1,
            explanation:
                "BFS uses a queue."
        },

        {
            question: "Which language is commonly used for DSA interviews?",
            options: [
                "C++",
                "HTML only",
                "CSS only",
                "SQL only"
            ],
            answer: 0,
            explanation:
                "C++ is commonly used for DSA interview preparation."
        },

        {
            question: "What does HR stand for?",
            options: [
                "Human Resources",
                "Hardware Router",
                "High Runtime",
                "Human Router"
            ],
            answer: 0,
            explanation:
                "HR means Human Resources."
        },

        {
            question: "What should you do before an interview?",
            options: [
                "Prepare",
                "Ignore the company",
                "Arrive late",
                "Skip revision"
            ],
            answer: 0,
            explanation:
                "Preparation is essential before an interview."
        },

        {
            question: "Which is important in a technical interview?",
            options: [
                "Problem solving",
                "Only handwriting",
                "Only clothing",
                "No preparation"
            ],
            answer: 0,
            explanation:
                "Problem-solving ability is important in technical interviews."
        }
    ]

};
