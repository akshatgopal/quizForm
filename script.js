const quizData = [
  {
    question: "Who is President of India?",
    a: "Ram Nath Kovind",
    b: "Abdul Kalam",
    c: "Narendra Modi",
    d: "Amit Shah",
    correct: "a",
  },
  {
    question: "Who is Captian of Indian Cricket Team?",
    a: "M.S. Dhoni",
    b: "Virat Kohli",
    c: "Rohit Sharma",
    d: "K.L. Rahul",
    correct: "b",
  },
  {
    question: "Where is Bhangarh located?",
    a: "Rajasthan",
    b: "Meghalgya",
    c: "Gujrat",
    d: "Madhya Pradesh",
    correct: "a",
  },
  {
    question: "Who is Food Minister of India?",
    a: "Ram Vilas PAswan",
    b: "Abdul Kalam",
    c: "Piyush Goyal",
    d: "Amit Shah",
    correct: "c",
  },
  {
    question: "Who is Defence Minister of India?",
    a: "Mamta Banarjee",
    b: "Arun Jately",
    c: "Narendra Modi",
    d: "Rajnath Singh",
    correct: "d",
  },
];

let currentQues = 0;
let score = 0;

const quiz = document.getElementById("quiz");
const questEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer");

loadQuiz();

function loadQuiz() {
  deSelect();
  const currentQuizData = quizData[currentQues];
  questEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deSelect() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", function () {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQues].correct) {
      score++;
    }
    currentQues++;
    if (currentQues < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
     <h2>You answered ${score}/${quizData.length} questions correctly!</h2>
     <button onclick ="location.reload()">Reload</button>
     `;
    }
  }
});
