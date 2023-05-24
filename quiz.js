const quizData = [
  {
    question: "What country has the highest life expectancy?",
    a: "Spain",
    b: "Tunisia",
    c: "Finland",
    d: "Hong Kong",
    e: "England",
    correct: "d",
  },
  {
    question: "What is the most common surname in the United States?",
    a: "Trevor",
    b: "Smith",
    c: "jones",
    d: "Paul",
    e: "Short",
    correct: "b",
  },
  {
    question: "What year was the United Nations established?",
    a: "1945",
    b: "1939",
    c: "1914",
    d: "1918",
    e: "1957",
    correct: "a",
  },
  {
    question: "How many bones do we have in an ear?",
    a: "5",
    b: "3",
    c: "0",
    d: "2",
    e: "8",
    correct: "b",
  },
  {
    question: "What is a group of pandas known as?",
    a: "A herd",
    b: "A school",
    c: "A gathering",
    d: "An embarrassment",
    e: "An achievement",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>`
    }
  }
});