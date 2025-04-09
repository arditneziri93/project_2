const QUIZ_STORAGE_KEY = "quizQuestions";
const QUIZ_ID_STORAGE_KEY = "quizID";

const defaultQuestions = [
  {
    id: 1,
    question:
      "In the Kingdom Heart series who provides the English voice for Master Eraqus?",
    answer: "Mark Hamill",
    tags: ["kingdomheart", "mastereraqus", "english voices"],
    isBookmarked: false,
  },
  {
    id: 2,
    question:
      "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
    answer: "Harry Potter",
    tags: ["danielradcliffe", "hewhomustnotbenamed", "abracadabra"],
    isBookmarked: false,
  },
  /*
  {
    id: 3,
    question:
      "Which former US president was nicknamed 'Teddy' after he refused to shoot a defenseless black bear?",
    answer: "Theodore Roosevelt",
    tags: ["usa", "president", "teddybear"],
    isBookmarked: false,
  },
  {
    id: 4,
    question: "Which planet in our solar system has the most moons?",
    answer: "Saturn",
    tags: ["space", "planets", "moons"],
    isBookmarked: false,
  },
  {
    id: 5,
    question:
      "In what year did the Berlin Wall fall, symbolizing the end of the Cold War?",
    answer: "1989",
    tags: ["history", "coldwar", "germany"],
    isBookmarked: false,
  },
  {
    id: 6,
    question:
      "What programming language was originally developed as a teaching tool and is now widely used in web development?",
    answer: "JavaScript",
    tags: ["programming", "nerd", "web"],
    isBookmarked: false,
  },
  */
];

if (false) {
  localStorage.clear();
}

if (!localStorage.getItem(QUIZ_STORAGE_KEY)) {
  // Initialization
  localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(defaultQuestions));
  localStorage.setItem(QUIZ_ID_STORAGE_KEY, 7);
}

function getAllQuestions() {
  return JSON.parse(localStorage.getItem(QUIZ_STORAGE_KEY) || "[]");
}

function addQuestion(newQuestion) {
  const questions = getAllQuestions();
  const newID = localStorage.getItem(QUIZ_ID_STORAGE_KEY) + 1;
  newQuestion.id = questions.length + 1;
  localStorage.setItem(QUIZ_ID_STORAGE_KEY, newID);
  questions.push(newQuestion);
  localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(questions));
}

function deleteQuestion(questionId) {
  const questions = getAllQuestions();
  const updatedQuestions = questions.filter(
    (question) => question.id !== questionId
  );
  localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(updatedQuestions));
}

function updateQuestion(updatedQuestion) {
  const questions = getAllQuestions();
  const updatedQuestions = questions.map((question) =>
    question.id === updatedQuestion.id ? updatedQuestion : question
  );
  localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(updatedQuestions));
}

function toggleBookmark(questionId) {
  const questions = getAllQuestions();
  const updatedQuestions = questions.map((question) =>
    question.id === questionId
      ? { ...question, isBookmarked: !question.isBookmarked }
      : question
  );
  localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(updatedQuestions));
}

export {
  getAllQuestions,
  addQuestion,
  deleteQuestion,
  updateQuestion,
  toggleBookmark,
};
