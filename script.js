/* 
  QuizNova - Main JavaScript
  Contains all quiz data, navigation logic, and storage handling.
*/

// GLOBAL QUESTION BANK (20+ Questions per topic)
// We will randomly select 10 from here each time.
const questionsDB = {
    "pf": [ // Programming Fundamentals (C++)
        { question: "Which symbol terminates a C++ statement?", options: [".", ";", ":", ","], correct: 1 },
        { question: "What is the output of: cout << 5 + 2;", options: ["52", "7", "5 + 2", "Error"], correct: 1 },
        { question: "Which type checks for equality?", options: ["=", "==", "===", "<>"], correct: 1 },
        { question: "Which header is needed for Input/Output?", options: ["<iostream>", "<stdio.h>", "<conio.h>", "<math.h>"], correct: 0 },
        { question: "For loop syntax is?", options: ["for(init; cond; inc)", "loop(init, cond, inc)", "while(cond)", "do...while"], correct: 0 },
        { question: "What is 'int' used for?", options: ["Decimals", "Integers", "Text", "Booleans"], correct: 1 },
        { question: "Correct way to create a comment?", options: ["// comment", "/* comment", "# comment", "<!-- comment -->"], correct: 0 },
        { question: "Which operator is 'Logical AND'?", options: ["&", "||", "&&", "!"], correct: 2 },
        { question: "Array index starts at?", options: ["1", "0", "-1", "Depends"], correct: 1 },
        { question: "main() function returns type?", options: ["void", "int", "char", "float"], correct: 1 },
        { question: "What does 'cin' do?", options: ["Output", "Input", "Error", "Loop"], correct: 1 },
        { question: "Variable name cannot start with?", options: ["Letter", "Underscore", "Number", "Dollar"], correct: 2 },
        { question: "Which is a loop structure?", options: ["if", "switch", "while", "class"], correct: 2 },
        { question: "What is 'char' used for?", options: ["Numbers", "Single Character", "String", "Booleans"], correct: 1 },
        { question: "Operator for 'Not Equal'?", options: ["<>", "!=", "==", "><"], correct: 1 },
        { question: "Which is NOT a data type?", options: ["int", "float", "real", "double"], correct: 2 },
        { question: "How to print a new line?", options: ["\\n", "\\t", "\\b", "\\r"], correct: 0 },
        { question: "Value of 'true' in C++?", options: ["0", "1", "-1", "null"], correct: 1 },
        { question: "Which loop runs at least once?", options: ["for", "while", "do-while", "foreach"], correct: 2 },
        { question: "Symbol for modulus?", options: ["/", "%", "*", "&"], correct: 1 }
    ],
    "dm": [ // Discrete Math
        { question: "What is a Set?", options: ["Ordered list", "Distinct collection", "Duplicate items", "None"], correct: 1 },
        { question: "Symbol for 'Exists'?", options: ["∀", "∃", "∈", "⊆"], correct: 1 },
        { question: "A U B represents?", options: ["Intersection", "Union", "Difference", "Complement"], correct: 1 },
        { question: "Meaning of p → q?", options: ["p AND q", "p OR q", "If p then q", "NOT p"], correct: 2 },
        { question: "A graph with no cycles is a?", options: ["Tree", "Loop", "Disc", "Mesh"], correct: 0 },
        { question: "Logic Gate NOT returns?", options: ["Same input", "Inverted input", "Always 1", "Always 0"], correct: 1 },
        { question: "Set {1, 2} has how many subsets?", options: ["2", "3", "4", "5"], correct: 2 },
        { question: "Example of a tautology?", options: ["p OR !p", "p AND !p", "p", "!p"], correct: 0 },
        { question: "What is a function?", options: ["One-to-many relation", "Many-to-many", "Input maps to unique output", "Random"], correct: 2 },
        { question: "Binary for 5?", options: ["100", "101", "110", "111"], correct: 1 },
        { question: "Symbol for 'For All'?", options: ["∀", "∃", "∈", "⊆"], correct: 0 },
        { question: "Intersection of sets A and B?", options: ["A U B", "A n B", "A - B", "A x B"], correct: 1 },
        { question: "What is a Matrix?", options: ["Grid of numbers", "A line", "A circle", "A graph"], correct: 0 },
        { question: "Logical OR is true if?", options: ["Both are false", "At least one is true", "Both are true", "None"], correct: 1 },
        { question: "Power set of {a}?", options: ["{a}", "{{}, {a}}", "{a, b}", "{}"], correct: 1 },
        { question: "Cardinality of {a, b, c}?", options: ["1", "2", "3", "4"], correct: 2 },
        { question: "Inverse of 'If p then q'?", options: ["If q then p", "If !p then !q", "If !q then !p", "!p"], correct: 1 },
        { question: "Graph vertices are called?", options: ["Lines", "Edges", "Nodes", "Points"], correct: 2 },
        { question: "Graph lines are called?", options: ["Nodes", "Vertices", "Edges", "Dots"], correct: 2 },
        { question: "What is a Null Set?", options: ["{0}", "Set with no elements", "{null}", "Infinite set"], correct: 1 }
    ],
    "ict": [ // ICT
        { question: "Brain of the computer?", options: ["RAM", "CPU", "HDD", "GPU"], correct: 1 },
        { question: "1 KB equals?", options: ["1000 Bytes", "1024 Bytes", "1024 Bits", "8 Bits"], correct: 1 },
        { question: "Example of System Software?", options: ["Word", "Excel", "Windows", "Chrome"], correct: 2 },
        { question: "Permanent Memory?", options: ["RAM", "ROM", "Cache", "Register"], correct: 1 },
        { question: "Input device?", options: ["Printer", "Speaker", "Scanner", "Monitor"], correct: 2 },
        { question: "What is Internet?", options: ["Wide Area Network", "Local Area Network", "Software", "Database"], correct: 0 },
        { question: "HTML stands for?", options: ["Hyper Text Mark Lang", "Hyper Text Markup Language", "Home Tool Mark Lang", "Link Language"], correct: 1 },
        { question: "URL means?", options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Reference Link", "None"], correct: 0 },
        { question: "Function of OS?", options: ["Typing", "Resource Management", "Browsing", "Drawing"], correct: 1 },
        { question: "Binary system uses?", options: ["0-9", "0 and 1", "A-Z", "0-7"], correct: 1 },
        { question: "Output device?", options: ["Keyboard", "Mouse", "Monitor", "Mic"], correct: 2 },
        { question: "Storage device?", options: ["Monitor", "RAM", "Hard Disk", "CPU"], correct: 2 },
        { question: "GUI stands for?", options: ["Graphical User Interface", "Global User Interface", "Game UI", "General Unit"], correct: 0 },
        { question: "ISP stands for?", options: ["Internet Service Provider", "Internal Service", "Internet Speed", "Input Service"], correct: 0 },
        { question: "Main circuit board?", options: ["Motherboard", "Fatherboard", "Keyboard", "Breadboard"], correct: 0 },
        { question: "Control Unit is part of?", options: ["RAM", "HDD", "CPU", "Monitor"], correct: 2 },
        { question: "Software to browse web?", options: ["Browser", "Server", "Client", "Protocol"], correct: 0 },
        { question: "WiFi stands for?", options: ["Wireless Fidelity", "Wireless Finance", "Wide Fi", "Wire Free"], correct: 0 },
        { question: "Short cut for Copy?", options: ["Ctrl+V", "Ctrl+X", "Ctrl+C", "Ctrl+P"], correct: 2 },
        { question: "Short cut for Paste?", options: ["Ctrl+V", "Ctrl+X", "Ctrl+C", "Ctrl+P"], correct: 0 }
    ],
    "cyber": [ // Cyber Security
        { question: "Malicious Software is called?", options: ["Malware", "Adware", "Spyware", "Badware"], correct: 0 },
        { question: "Phishing involves?", options: ["Fishing", "Fake emails", "Hacking hardware", "Coding"], correct: 1 },
        { question: "DDoS stands for?", options: ["Data Denial", "Distributed Denial of Service", "Direct Denial", "Domain Service"], correct: 1 },
        { question: "Strong password feature?", options: ["Name", "123456", "Short", "Mix of chars"], correct: 3 },
        { question: "Firewall purpose?", options: ["Burn data", "Filter traffic", "Speed up PC", "Cooling"], correct: 1 },
        { question: "VPN stands for?", options: ["Virtual Private Network", "Very Private Net", "Visual Private Net", "Virtual Public Net"], correct: 0 },
        { question: "HTTPS 'S' stands for?", options: ["Speed", "Secure", "Simple", "Standard"], correct: 1 },
        { question: "White Hat Hacker is?", options: ["Bad", "Ethical/Good", "Neutral", "Unknown"], correct: 1 },
        { question: "Keylogger does what?", options: ["Locks keys", "Records keystrokes", "Unlocks doors", "Manages keys"], correct: 1 },
        { question: "Ransomware demands?", options: ["Credit", "Payment/Money", "Passwords", "Views"], correct: 1 },
        { question: "2FA stands for?", options: ["2 Factors check", "Two-Factor Authentication", "To For All", "Double Access"], correct: 1 },
        { question: "Social Engineering targets?", options: ["Computers", "Humans", "Networks", "Routers"], correct: 1 },
        { question: "Botnet is?", options: ["Robot Network", "Network of infected PCs", "Fast Internet", "Gaming Server"], correct: 1 },
        { question: "Antivirus protects from?", options: ["Hardware fail", "Malware", "Power loss", "Dust"], correct: 1 },
        { question: "Brute Force Attack is?", options: ["Physical hit", "Guessing passwords", "Stealing laptop", "Breaking screen"], correct: 1 },
        { question: "IoT stands for?", options: ["Internet of Things", "Input of Text", "Internal of Tech", "Ink on Tape"], correct: 0 },
        { question: "SQL Injection is?", options: ["Database Attack", "Medical shot", "Hardware fix", "Network speed"], correct: 0 },
        { question: "Zero-day exploit is?", options: ["Old virus", "New unknown vulnerability", "Safe code", "Free software"], correct: 1 },
        { question: "Encryption does what?", options: ["Deletes data", "Scrambles data", "Copies data", "Prints data"], correct: 1 },
        { question: "Cookie is?", options: ["Food", "Data stored by browser", "Virus", "Hardware"], correct: 1 }
    ],
    "english": [ // Functional English
        { question: "Which of the following is an example of non-verbal communication?", options: ["Speaking", "Texting", "Facial Expressions", "Emailing"], correct: 2 },
        { question: "What is the primary purpose of technical writing?", options: ["To entertain", "To express feelings", "To provide information/instructions clearly", "To write poetry"], correct: 2 },
        { question: "Cross-cultural communication involves?", options: ["Speaking only one language", "Understanding different cultural backgrounds", "Ignoring cultural differences", "Using jargon"], correct: 1 },
        { question: "In report writing, the 'Executive Summary' is usually placed?", options: ["At the end", "In the appendix", "At the beginning", "In the bibliography"], correct: 2 },
        { question: "Which is a grammatical error?", options: ["He go to school", "She goes to school", "They go to school", "I go to school"], correct: 0 },
        { question: "Proxemics in non-verbal communication refers to?", options: ["Eye contact", "Body language", "Use of space", "Tone of voice"], correct: 2 },
        { question: "A formal report should use?", options: ["Slang", "Objective language", "Personal opinion", "Emojis"], correct: 1 },
        { question: "What does 'encoding' mean in communication?", options: ["Receiving a message", "Translating ideas into symbols/words", "Interpreting a message", "Sending a message back"], correct: 1 },
        { question: "Which of these is part of technical writing?", options: ["Novels", "Short stories", "User manuals", "Fairytales"], correct: 2 },
        { question: "Chronemics refers to the study of?", options: ["Colors", "Touch", "Time", "Smell"], correct: 2 },
        { question: "Identify the conjunction: 'I like tea and coffee'.", options: ["like", "and", "tea", "coffee"], correct: 1 },
        { question: "Technical writing should be?", options: ["Vague", "Flowery", "Concise and accurate", "Highly emotional"], correct: 2 },
        { question: "Which is a barrier to cross-cultural communication?", options: ["Empathy", "Ethnocentrism", "Flexibility", "Active listening"], correct: 1 },
        { question: "Haptics is the study of?", options: ["Touch", "Sight", "Sound", "Taste"], correct: 0 },
        { question: "A feasibility report is written to?", options: ["Tell a story", "Evaluate a proposed plan", "Describe a vacation", "List groceries"], correct: 1 },
        { question: "The 'passive voice' is often avoided in?", options: ["Formal reports", "Creative writing", "Clear instructions", "Academic papers"], correct: 2 },
        { question: "Kinesics is related to?", options: ["Time", "Space", "Body movement", "Smell"], correct: 2 },
        { question: "Which is NOT a step in the writing process?", options: ["Drafting", "Editing", "Sleeping", "Proofreading"], correct: 2 },
        { question: "In communication, 'noise' refers to?", options: ["Loud music only", "Anything that interferes with the message", "A clear signal", "The sender's voice"], correct: 1 },
        { question: "What is a 'memo'?", options: ["A long book", "A short internal company message", "A legal document", "A social media post"], correct: 1 }
    ],
    "islamic": [ // Islamic Studies
        { question: "What is the primary meaning of the word 'Jihad'?", options: ["Holy War", "Struggle/Striving", "Prayer", "Charity"], correct: 1 },
        { question: "Which is the holy book revealed to Prophet Muhammad (PBUH)?", options: ["Torah", "Gospel", "Quran", "Psalms"], correct: 2 },
        { question: "The sayings and actions of Prophet Muhammad (PBUH) are called?", options: ["Quran", "Sunnah/Hadith", "Fiqh", "Tafsir"], correct: 1 },
        { question: "How many chapters (Surahs) are in the Quran?", options: ["100", "110", "114", "120"], correct: 2 },
        { question: "Which is the longest Surah in the Quran?", options: ["Al-Ikhlas", "Al-Baqarah", "An-Nas", "Al-Fatihah"], correct: 1 },
        { question: "The internal struggle against one's own evil inclinations is?", options: ["Jihad al-Asghar", "Jihad al-Akbar", "Jihad al-Bil-Saif", "None"], correct: 1 },
        { question: "What are the five pillars of Islam?", options: ["Faith, Prayer, Fasting, Charity, Hajj", "Faith, Work, Study, Travel, Hajj", "Prayer, Fasting, Reading, Charity, Work", "None"], correct: 0 },
        { question: "In which month do Muslims perform mandatory fasting?", options: ["Shawwal", "Ramadan", "Rajab", "Muharram"], correct: 1 },
        { question: "Zakat is a form of?", options: ["Fasting", "Pilgrimage", "Obligatory Charity", "Prayer"], correct: 2 },
        { question: "The first house of worship built for Allah is?", options: ["Al-Aqsa", "Prophet's Mosque", "The Kaaba", "Blue Mosque"], correct: 2 },
        { question: "What is the meaning of 'Sunnah'?", options: ["The way/practice", "Light", "History", "Law"], correct: 0 },
        { question: "Which angel brought the revelation to the Prophet (PBUH)?", options: ["Gabriel (Jibril)", "Michael (Mikail)", "Israfil", "Azrael"], correct: 0 },
        { question: "The migration of the Prophet (PBUH) from Makkah to Madinah is called?", options: ["Hajj", "Hijrah", "Isra", "Mi'raj"], correct: 1 },
        { question: "How many times a day do Muslims perform mandatory prayers?", options: ["3", "4", "5", "6"], correct: 2 },
        { question: "Which is the first Surah in the Quran?", options: ["Al-Baqarah", "Al-Fatihah", "An-Nas", "Al-Asr"], correct: 1 },
        { question: "The night of power in Ramadan is known as?", options: ["Eid-ul-Fitr", "Laylat al-Qadr", "Hajj", "Isra"], correct: 1 },
        { question: "Who was the first person to embrace Islam among women?", options: ["Aisha (RA)", "Khadija (RA)", "Fatima (RA)", "Sawda (RA)"], correct: 1 },
        { question: "The collection of sayings of the Prophet (PBUH) is called?", options: ["Quran", "Hadith", "Sharia", "Ijtihad"], correct: 1 },
        { question: "What is 'Tawheed'?", options: ["Belief in Oneness of Allah", "Charity", "Kindness", "Brave"], correct: 0 },
        { question: "Which city is the birthplace of the Prophet (PBUH)?", options: ["Madinah", "Jerusalem", "Makkah", "Cairo"], correct: 2 }
    ]
};

// Global State
let currentTopic = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

/* --- Functions --- */

// 1. Initialize Quiz
function startQuiz(topic) {
    localStorage.setItem("quizTopic", topic);
    window.location.href = "quiz.html";
}

// 2. Load Quiz Logic (quiz.html)
function loadQuiz() {
    currentTopic = localStorage.getItem("quizTopic");
    if (!currentTopic) {
        alert("Invalid topic. Going Home.");
        window.location.href = "index.html";
        return;
    }

    // Set Header & Background
    const topicNames = {
        "pf": "Programming (C++)",
        "dm": "Discrete Math",
        "ict": "ICT",
        "cyber": "Cyber Security",
        "english": "Functional English",
        "islamic": "Islamic Studies"
    };
    document.getElementById("topic-display").innerText = topicNames[currentTopic] || "Quiz";
    document.body.className = currentTopic;

    // Load Local Questions
    loadQuestionsFromDB();
}

// Fetch from Local DB
function loadQuestionsFromDB() {
    const loading = document.getElementById("loading");
    if (loading) loading.style.display = "flex"; // Show loading briefly

    // Simulate delay for effect (optional, or just instant)
    setTimeout(() => {
        let pool = questionsDB[currentTopic] || questionsDB["pf"];

        // Shuffle the FULL pool
        let shuffledPool = [...pool];
        shuffleArray(shuffledPool);

        // Pick first 10
        currentQuestions = shuffledPool.slice(0, 10);

        if (loading) loading.style.display = "none";

        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
        updateProgressBar();
    }, 500);
}

// Simple Array Shuffle Function (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 3. Render Question
function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    if (!q) return;

    document.getElementById("question-count").innerText = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    document.getElementById("question-text").innerText = q.question;

    const container = document.getElementById("options-container");
    container.innerHTML = "";

    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(idx, btn);
        container.appendChild(btn);
    });

    document.getElementById("next-btn").style.display = "none";
}

// 4. Check Answer
function checkAnswer(selectedIdx, btnElement) {
    const q = currentQuestions[currentQuestionIndex];
    const correctIdx = q.correct;
    const allBtns = document.querySelectorAll(".option-btn");

    allBtns.forEach(b => b.disabled = true);

    if (selectedIdx === correctIdx) {
        btnElement.classList.add("correct");
        score++;
    } else {
        btnElement.classList.add("wrong");
        allBtns[correctIdx].classList.add("correct");
    }

    document.getElementById("next-btn").style.display = "block";
}

// 5. Next Question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
        updateProgressBar();
    } else {
        finishQuiz();
    }
}

// 6. Progress Bar
function updateProgressBar() {
    const percent = ((currentQuestionIndex) / currentQuestions.length) * 100;
    document.getElementById("progress-fill").style.width = percent + "%";
}

// 7. Finish & Save
function finishQuiz() {
    localStorage.setItem("quizScore", score);
    saveQuizHistory(currentTopic, score);
    window.location.href = "result.html";
}

// 8. Cancel Quiz (Direct Redirect)
function cancelQuiz() {
    // Direct redirect - no confirmation to ensure it works
    window.location.href = "index.html";
}

// 9. Show Results
function showResult() {
    const s = localStorage.getItem("quizScore");
    if (s === null) return;

    document.getElementById("score-display").innerText = `${s} / 10`;

    const msg = document.getElementById("performance-msg");
    const numScore = parseInt(s);

    if (numScore >= 8) {
        msg.className = "badge excellent";
        msg.innerText = "Excellent! Outstanding performance.";
    } else if (numScore >= 5) {
        msg.className = "badge good";
        msg.innerText = "Good Job! Keep practicing.";
    } else {
        msg.className = "badge needs-improvement";
        msg.innerText = "Needs Improvement. Don't give up!";
    }
}

// 10. History Management
function saveQuizHistory(topic, score) {
    const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
    const date = new Date().toLocaleString();
    const headers = {
        "pf": "PF (C++)",
        "dm": "Discrete Math",
        "ict": "ICT",
        "cyber": "Cyber Security",
        "english": "Functional English",
        "islamic": "Islamic Studies"
    };

    history.push({
        topic: headers[topic] || topic,
        score: score,
        date: date
    });

    localStorage.setItem("quizHistory", JSON.stringify(history));
}

function loadHistory() {
    const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
    const tbody = document.getElementById("history-body");

    if (history.length === 0) {
        tbody.innerHTML = "<tr><td colspan='3'>No quizzes attempted yet.</td></tr>";
        return;
    }

    history.reverse().forEach(item => {
        const row = `<tr><td>${item.topic}</td><td>${item.score} / 10</td><td>${item.date}</td></tr>`;
        tbody.innerHTML += row;
    });
}

function clearHistory() {
    if (confirm("Clear history?")) {
        localStorage.removeItem("quizHistory");
        loadHistory();
    }
}

// 11. Feedback
function sendFeedback() {
    alert(`Thank you! Feedback received.`);
    window.location.href = "index.html";
}

// 12. Theme Toggle Logic
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Save preference
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

    updateThemeIcon();
}

function updateThemeIcon() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;

    const isDark = document.body.classList.contains("dark-mode");
    btn.innerHTML = isDark ? "☀️ Light" : "🌙 Dark";
}

// Initialize Theme
function initTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
    updateThemeIcon();
}

// 13. Mobile Menu Toggle & UI Enhancements
document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Optional: Animate hamburger to X
            // mobileMenu.classList.toggle('is-active'); 
        });
    }

    // Add entry animation delays for cards
    const cards = document.querySelectorAll('.topic-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
