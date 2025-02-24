// Your quiz questions and answers here
const quizData = [
    {
        id: 1,
        question: "তোমার প্রিয় পাঠ্য বিষয় ",
        options: [
            { text: "বিজ্ঞান", score: 10 },
            { text: "সাহিত্য", score: 10 },
            { text: "ইতিহাস", score: 10 },
            { text: "কোনটিই নয়", score: -5 }
        ]
    },
    {
        id: 2,
        question: "তোমার প্রিয় কাজ",
        options: [
            { text: "বই পড়া", score: 10 },
            { text: "স্পোর্টস", score: 10 },
            { text: "ডিজিটাল জগতে ভ্রমন ", score: -5 },
            { text: "খাওয়া ও ঘুম ", score: -5 }
        ]
    },
    {
        id: 3,
        question: "যিনি তোমার প্রিয় ব্যক্তিত্ব",
        options: [
            { text: "তিনি একজন সাংবাদিক  ", score: 1 },
            { text: "তিনি একজন মহান নেতা  ", score: 2 },
            { text: "তিনি একজন বিজ্ঞানী", score: 3 },
            { text: "তিনি একজন ব্যবসায়ী ", score: 4 }
        ]
    },
    {
        id: 4,
        question: "কোনটি করতে না পারলে তীব্র কষ্ট বোধ হয়",
        options: [
            { text: "পড়া লেখা", score: 10 },
            { text: "মোবাইল ব্যবহার", score: -5 },
            { text: "মাঠে গিয়ে খেলাধুলা ", score: 5 },
            { text: "বন্ধুদের সাথে  মজা করা  ", score: 5 }
        ]
    },
    {
        id: 5,
        question: "তোমার প্রিয় স্থান",
        options: [
            { text: "নিজ বাড়ি", score: 5 },
            { text: "স্কুল", score: 10 },
            { text: "খেলার মাঠ", score: 10 },
            { text: "বন্ধুদের সাথে মজা করার স্থান", score: -5 }
        ]
    },
    {
        id: 6,
        question: "কিসে তোমার বেশি ভয় বা লজ্জা অনুভব হয় ",
        options: [
            { text: "ঊচু স্থানে উঠলে ভয়", score: -5 },
            { text: "পানিতে পড়ে গেলে", score: -5 },
            { text: "প্রতিযোগিতায় ১ম না হওয়ার লজ্জা  ", score: 10 },
            { text: "মায়ের রাগ ", score: 5 }
        ]
    },
    {
        id: 7,
        question: "তোমাকে নিয়ে পিতামাতার স্বপ্ন ",
        options: [
            { text: "ডাক্তার ", score: 0 },
            { text: "ইঞ্জিনিয়ার", score: 0 },
            { text: "শিক্ষক", score: 0 },
            { text: "খেলোয়াড়", score: 0 }
        ]
    },
    {
        id: 8,
        question: "সুযোগ পেলে তুমি কোন দেশে বাস করতে পছন্দ করবে ",
        options: [
            { text: "আমেরিকা", score: 0 },
            { text: "মালেশিয়া", score: 0 },
            { text: "অস্ট্রেলিয়া", score: 0 },
            { text: "কোনটিই নয়", score: 10 }
        ]
    },
    {
        id: 9,
        question: "মাধ্যমিকের ফলাফল ",
        options: [
            { text: "জিপিএ ৫ ", score: 10 },
            { text: "জিপিএ ৪।৫ ", score: 5 },
            { text: "জিপিএ ৪।৫ এর নিচে", score: 0 },
            { text: "এখনও নয় ", score: 0 }
        ]
    },
    {
        id: 10,
        question: "উচ্চ মাধ্যমিকের ফলাফল ",
        options: [
            { text: "জিপিএ ৫ ", score: 10 },
            { text: "জিপিএ ৪।৫ ", score: 5 },
            { text: "জিপিএ ৪।৫ এর নিচে", score: 0 },
            { text: "এখনও নয় ", score: 0 }
        ]
    },
    {
        id: 11,
        question: "গত বছরে স্কুলের ফলাফল ",
        options: [
            { text: "ক্লাসের প্রথম ৫ জনের মাঝে", score: 10 },
            { text: "ক্লাসের ৬ হতে ১০ জনের মাঝে ", score: 5 },
            { text: "ক্লাসের ১১ হতে ২০ জনের মাঝে  ", score: 0 },
            { text: "ক্লাসের প্রথম ২০ জনের বাইরে ", score: -5 }
        ]
    },
    {
        id: 12,
        question: "বন্ধুরা তোমার মতামত কতটা মেনে চলে ",
        options: [
            { text: "ভালোভাবে মেনে চলে ", score: 10 },
            { text: "মোটামুটি মেনে চলে ", score: 5 },
            { text: "কম মেনে চলে  ", score: 0 },
            { text: "মেনে চলে না ", score: -5 }
        ]
    },
    {
        id: 13,
        question: "পড়ালেখা করতে কতটা আনন্দিত অনুভুব করো ",
        options: [
            { text: "অত্যন্ত বেশি ", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "অল্প আনন্দ হয়  ", score: 0 },
            { text: "আনন্দ পাই না", score: -5 }
        ]
    }
    ,
    {
        id: 14,
        question: "কোন সমস্যার বিষয়ে গভির মনোযোগ দেওয়ার সক্ষমতা ",
        options: [
            { text: "শক্তিশালী", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "কম", score: 0 },
            { text: "মনোযোগ দিতে পারি না ", score: -5 }
        ]
    }
    ,
    {
        id: 15,
        question: "পরিবারের অন্যরা তোমার মতামতকে কতটা গুরুত্ব দেয় ",
        options: [
            { text: "অত্যন্ত বেশি ", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "কম", score: 0 },
            { text: "কেও আমাকে গুরুত্ব দেয় না  ", score: -5 }
        ]
    }
    ,
    {
        id: 16,
        question: "নতুন কিছু আবিস্কার করতে কতটা চেষ্টা কর ",
        options: [
            { text: "অত্যন্ত বেশি", score: 10 },
            { text: "চেষ্টা করি না", score: -5 },
            { text: "মোটামুটি", score: 5 },
            { text: "অল্প চেষ্টা করি", score: 0 }
        ]
    }
    ,
    {
        id: 17,
        question: "যে কোন সমস্যা সমাধান করার সক্ষমতা ",
        options: [
            { text: "অত্যন্ত বেশি", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "কম", score: 0 },
            { text: "জানা নাই", score: -5 }
        ]
    }
    ,
    {
        id: 18,
        question: "শপিং করতে কেমন আনন্দ হয় ",
        options: [
            { text: "অত্যন্ত বেশি", score: -5 },
            { text: "মোটামুটি", score: 10 },
            { text: "ভালো লাগে না ", score: 1 },
            { text: "ভালো লাগে না ", score: 0 }
        ]
    },
    {
        id: 19,
        question: "অন্যদের সামনে নিজ বক্তব্য উপস্থাপনের সক্ষমতা ",
        options: [
            { text: "অত্যন্ত ভাল ", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "পারি না", score: -5 },
            { text: "কিছুটা ভয় লাগে", score: 0 }
        ]
    },
    {
        id: 20,
        question: "চ্যালেঞ্জ সমাধানে ধৈর্য ",
        options: [
            { text: "অত্যন্ত ভাল ", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "নাই", score: -5 },
            { text: "কিছুটা দুর্বল ", score: 0 }
        ]
    },
    {
        id: 21,
        question: "চ্যালেঞ্জ গ্রহণের সক্ষমতা ",
        options: [
            { text: "অত্যন্ত ভাল ", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "নাই", score: -5 },
            { text: "খুব কম চ্যলেঞ্জ নিতে পছন্দ করি", score: 0 }
        ]
    },
    {
        id: 22,
        question: "ইংরেজিতে কথা বলার সক্ষমতা",
        options: [
            { text: "অত্যন্ত ভাল ", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "নাই", score: -5 },
            { text: "দুর্বল", score: 0 }
        ]
    },
    {
        id: 23,
        question: "নিজের মতামত ইংরেজিতে  লেখার সামর্থ্য ",
        options: [
            { text: "অত্যন্ত ভাল", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "নাই", score: -5 },
            { text: "কিছুটা দুর্বল", score: 0 }
        ]
    },
    {
        id: 24,
        question: "স্কুল বা কলেজের কোন প্রতিযোগিতায় কি কোন পুরস্কার পেয়েছো? ",
        options: [
            { text: "১ম বা ২য় ", score: 10 },
            { text: "৩য়", score: 5 },
            { text: "নাই", score: -5 },
            { text: "অন্যান্য", score: 0 }
        ]
    },
    {
        id: 25,
        question: "তোমার প্রিয় বন্ধুর সংখ্যা ",
        options: [
            { text: "৫ এর কম", score: 0 },
            { text: "৫ হতে ১৫ এর মাঝে ", score: 5 },
            { text: "নাই", score: -5 },
            { text: "১৫ এর অধিক", score: 10 }
        ]
    },
    {
        id: 26,
        question: "নীরবতা কতটা ভালো লাগে",
        options: [
            { text: "অত্যন্ত পছন্দ করি ", score: 10 },
            { text: "নীরবতা অপছন্দ করি", score: 0 },
            { text: "মোটামুটি ভালো লাগে", score: 5 },
            { text: "জানা নাই ", score: -5 }
        ]
    },
    {
        id: 27,
        question: "হৈচৈ আনন্দ করতে তোমার কতটা ভালো লাগে ",
        options: [
            { text: "অত্যন্ত পছন্দ করি ", score: 0 },
            { text: "পছন্দ করি না ", score: 10 },
            { text: "মোটামুটি ভালো লাগে ", score: 5 },
            { text: "জানা নাই ", score: -5 }
        ]
    }
    ,
    {
        id: 28,
        question: "রাতে সধারনত কখন ঘুমাও ",
        options: [
            { text: "রাত ১১ টা এর আগে", score: 10 },
            { text: "রাত ১১ টা হতে ১২ টা এর মাঝে", score: 5 },
            { text: "কোন নির্দিষ্ট নাই", score: -5 },
            { text: "রাত ১২ টা এর পরে  ", score: 0 }
        ]
    },
    {
        id: 29,
        question: "শারীরিক শ্রমের কাজ করার অভ্যাস কেমন ",
        options: [
            { text: "অত্যন্ত পছন্দ করি ", score: 10 },
            { text: "খুব কম ", score: 0 },
            { text: "নাই", score: -5 },
            { text: "মোটামুটি", score: 5 }
        ]
    },
    {
        id: 30,
        question: "প্রিয় শখ",
        options: [
            { text: "এডভেঞ্চার", score: 5 },
            { text: "বই পড়া ", score: 10 },
            { text: "স্মার্ট ফোন ব্যবহার   ", score: -5 },
            { text: "স্মার্ট ফোন ব্যবহার  ", score: 0 }
        ]
    },
    {
        id: 31,
        question: "তোমার শারীরিক সামর্থ্য ",
        options: [
            { text: "অত্যন্ত শক্তিশালী", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "কিছুটা দুর্বল  ", score: 1 },
            { text: "দুর্বল", score: -5 }
        ]
    },

];


const additionalQuizData = [
    //New Questions
    {
        id: 32,
        question: "অবসর সময়ে কোন কাজটি করতে তোমার ভালো লাগে",
        options: [
            { text: "ছবি আকা,নতুন কিছু লেখালেখি,কিছু একটা উদ্ভাবন করার চেষ্টা বা এইরকম কিছু ", score: 0 },
            { text: "কাছে বা দূরে বেড়াতে যাওয়া, বন্ধুদের নিয়ে খেলাধুলা করা", score: 0 },
            { text: "বিভিন্ন প্রকার বই বা ম্যাগাজিন পড়া কিংবা বিভিন্ন ভ্রমণ স্থান সম্পর্কে জানার চেষ্টা", score: 0 },
            { text: "মজাদার খাবারের সন্ধান করা কিংবা সেগুলো বানানোর চেষ্টা ", score: 0 }
        ]
    },
    {
        id: 33,
        question: "কোন বিষয়গুলো তোমাকে সবথেকে বেশি আনন্দিত করে",
        options: [
            { text: "কোন বিষয়গুলো তোমাকে সবথেকে বেশি আনন্দিত করে", score: 0 },
            { text: "পাজল সমাধান, বুদ্ধির খেলা, কিংবা জটিল কোন সমস্যা সমাধানের মত কিছু করতে পারলে", score: 0 },
            { text: "পরিবার ও বন্ধুদের সাথে আলোচনা করে উপযুক্ত একটি সিদ্ধান্ত নিই ", score: 0 },
            { text: "সমস্যা গুলো মেনে নিয়ে চলি এবং আস্তে ধীরে নানা পদ্ধতিতে সেই টির সমাধান ", score: 0 }
        ]
    },
    {
        id: 34,
        question: "জটিল কোন সমস্যার সম্মুখীন হলে সাধারণত কি করো",
        options: [
            { text: "গভীর ভাবে চিন্তা করে করে সেই সমস্যার সমাধান বেড় করার চেষ্টা করি", score: 0 },
            { text: "সমস্যাটি নিয়ে যৌক্তিক বিশ্লেষণ করে একটা পরিকল্পনা সাজায়", score: 0 },
            { text: "পরিবার ও বন্ধুদের সাথে আলোচনা করে উপযুক্ত একটি সিদ্ধান্ত নিই ", score: 0},
            { text: "সমস্যা গুলো মেনে নিয়ে চলি এবং আস্তে ধীরে নানা পদ্ধতিতে সেই টির সমাধান ", score: 0 }
        ]
    },
    {
        id: 35,
        question: "কোন বিষয়গুলো নিয়ে পড়তে, গল্প বা আলোচনা করতে কিংবা চিন্তা ভাবনা করতে তোমার ভালো লাগে",
        options: [
            { text: "নানা প্রকার শৈল্পিক বা সাহিত্যিক বিষয়", score: 0 },
            { text: "বিজ্ঞানের আবিস্কার, প্রযুক্তি কিংবা যুক্তিবাদী বিষয় ", score: 0},
            { text: "সমাজ ও দেশের উন্নয়ন, মানুষের অধিকার, পরিবেশ এবং এইরুপ বিষয় ", score: 0 },
            { text: "মানুষের জীবন মানের উন্নয়ন, স্বাস্থ্য, খাদ্য, কিংবা নানাবিধ আনন্দজনক বিষয়", score: 0 }
        ]
    },
    {
        id: 36,
        question: "কোন ধরণের পেশা তোমার সব থেকে প্রিয় বলে অনুভব কর",
        options: [
            { text: "সৃজনশীল কাজের মাধ্যমে নিজের পরিচয় তুলে ধরা", score: 0 },
            { text: "বিজ্ঞান ও প্রযুক্তি বিষয়ের গবেষণা ", score: 0 },
            { text: "সেবামুলক কাজের মাধ্যমে দেশ ও সমাজের কল্যাণ", score: 0 },
            { text: "বিভিন্ন সমাজ ও দেশের সংস্কৃতি বিষয়ে গবেষণা, কিংবা লেখালেখির মাধ্যমে মানুষকে সচেতন করা", score: 0 }
        ]
    },
    {
        id: 37,
        question: "কোন ধরণের কাজে তুমি স্বেচ্ছা শ্রম দিতে পছন্দ কর",
        options: [
            { text: "নতুন কোন সংগঠন, সৃজনশীল কিছু কাজ", score: 0 },
            { text: "বৈজ্ঞানিক আবিস্কার কিংবা সমস্যা সমাধানের মত কাজ", score: 0 },
            { text: "সমাজ ব্যবস্থায় গঠন মূলক পরিবর্তনের জন্য কিছু কাজ", score: 0 },
            { text: "নতুন নতুন অভিজ্ঞতা অর্জনের মত কাজ", score: 0 }
        ]
    },
    {
        id: 38,
        question: "কোনটির সাথে তোমার সবথেকে বেশি আত্মিক সংযোগ রয়েছে বলে তুমি অনুভব কর",
        options: [
            { text: "নতুন কিছু উদ্ভাবন", score: 0 },
            { text: "গনিত", score: 0 },
            { text: "সেবা মূলক কাজ", score: 0 },
            { text: "ভ্রমণ", score: 0 }
        ]
    },
    {
        id: 39,
        question: "তোমার সবথেকে প্রিয় শখের বিষয় কোনটি ",
        options: [
            { text: "সঙ্গীত, সাহিত্য, অংকন, কিংবা আরও কোন শিল্প", score: 0 },
            { text: "যে কোন প্রকার চ্যলেঞ্জিং কাজের মাধ্যমে এডভেঞ্চার করা", score: 0 },
            { text: "দেশের সম্মান ও সামাজিক কল্যাণের বিষয়ে নিয়োজিত হওয়া", score: 0 },
            { text: "দেশ ও বিদেশ সম্পর্কে জানা", score: 0 }
        ]
    },
    {
        id: 40,
        question: "কোন কাজটি তোমার নিকট সবথেকে মূল্যবান অনুভুত হয়",
        options: [
            { text: "নতুন নতুন সৃষ্টিশীল কাজের মাধ্যমে নিজের পরিচয়কে প্রতিষ্ঠিত করা", score: 0 },
            { text: "যে কোন সমস্যা সমাধানের জন্য সর্বোচ্চ প্রচেষ্টা চালানো", score: 0 },
            { text: "জগতের সকল মানুষের কল্যাণে কাজ করা", score: 0 },
            { text: "নানা দেশ ও নানা মানুষের সাথে মিলে মিশে থাকার দক্ষতা অর্জন করা", score: 0 }
        ]
    },
    {
        id: 41,
        question: "কোনটি অর্জন করলে তুমি নিজেকে সবথেকে সফল অনুভব করবে",
        options: [
            { text: "যুগান্তকারী কিছু আবিস্কার করার মধ্য দিয়ে নিজেকে পৃথিবীর মানুষের কাছে তুলে ধরতে পারলে", score: 0 },
            { text: "যে কোন পেশাই হোক না কেন, সেখানে সর্বোচ্চ মর্যাদার আসন অর্জন করলে", score: 0 },
            { text: "জগতের সকল মানুষের কল্যাণ ও তাদের অধিকার রক্ষা করার কাজে সফল হলে", score: 0 },
            { text: "আপন অভিজ্ঞতাগুলো পৌঁছে দিয়ে জগতের মানুষকে সচেতন করার কাজে সফল হলে", score: 0 }
        ]
    }
];
// Merge the original quiz data with the additional quiz data
const mergedQuizData = [...quizData, ...additionalQuizData];

const quizContainer = document.getElementById('quiz');
const footer = document.getElementById('footer');
const timeDisplay = document.getElementById('time');
const questionNumberDisplay = document.getElementById('current-question');

const userAnswers = []; //array to store user's selected answers

let currentQuestion = 0;



// Function to load question
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadQuestion() {
    // Shuffle 
    const shuffledQuizData = shuffleArray(mergedQuizData);
    
    const currentQuizData = shuffledQuizData[currentQuestion];
    const options = currentQuizData.options.map((option, index) => {
        return `<div class="option" onclick="checkAnswer(${index})">${option.text}</div>`;
    }).join('');
    
    quizContainer.innerHTML = `
        <div class="question">${currentQuizData.question}</div>
        <div class="options">${options}</div>
    `;
    questionNumberDisplay.textContent = currentQuestion + 1;
}


// Function to start timer
function startTimer() {
    let time = 30 * 60; 
    setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        time--; // Decrease time by 1 second
        if (time < 0) {
            clearInterval(); // Stop the timer when it reaches 0
            showResult(); // Display result when timer reaches 0
        }
    }, 1000);
}

// Function to check answer
function checkAnswer(answerIndex) {
    userAnswers[currentQuestion] = answerIndex; // Storeselected answer
    currentQuestion++;
    if (currentQuestion < mergedQuizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Function to handle form submission in the intro section
document.getElementById('userInfoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Get user input values
    const userName = document.getElementById('userName').value;
    const userPhone = document.getElementById('userPhone').value;
    const userEmail = document.getElementById('userEmail').value;

    // Perform any necessary validation of user input here

    // Hide intro section
    document.querySelector('.intro-section').style.display = 'none';

    // Display landing page section
    document.querySelector('.landing-page').style.display = 'block';
});

// Function to handle start button click in the landing page section
document.querySelector('.btn').addEventListener('click', function() {
    // Hide landing page section
    document.querySelector('.landing-page').style.display = 'none';

    // Display quiz wrapper section
    document.querySelector('.wrapper').style.display = 'block';

    // Display footer section
    document.getElementById('footer').style.display = 'block';

    // Start quiz logic (call function to start quiz)
    startQuiz();
});


// Function to calculate score for a question
function calculateScore(questionIndex) {
    const selectedOptionIndex = userAnswers[questionIndex];
    const selectedOption = mergedQuizData[questionIndex].options[selectedOptionIndex];
    return selectedOption.score;
}

// Function to calculate score based on selected options from additional questions
function calculateFavoredOccupation() {
    const optionCounts = {};
    additionalQuizData.forEach(question => {
        const selectedOptionIndex = userAnswers[question.id - 1]; // Question ID starts from 1
        if (selectedOptionIndex !== undefined) {
            const selectedOption = question.options[selectedOptionIndex];
            optionCounts[selectedOption.text] = (optionCounts[selectedOption.text] || 0) + 1;
        }
    });

    // Find the most selected option
    let maxOptionCount = 0;
    let favoredOption = '';
    for (const optionText in optionCounts) {
        if (optionCounts[optionText] > maxOptionCount) {
            maxOptionCount = optionCounts[optionText];
            favoredOption = optionText;
        }
    }

    return favoredOption;
}

// Function to show result
function showResult() {
    let totalScore = 0;
    for (let i = 0; i < mergedQuizData.length; i++) {
        totalScore += calculateScore(i);
    }

    const favoredOccupation = calculateFavoredOccupation();
    const resultMessage = `You want to be ${favoredOccupation}. Total Score: ${totalScore}`;

    quizContainer.innerHTML = `
        <div class="result">${resultMessage}</div>
    `;
    footer.style.display = 'none';
}

// Load initial question
loadQuestion();