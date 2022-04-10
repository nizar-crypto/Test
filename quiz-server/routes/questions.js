import express from "express";

// import { v4 as uuidv4 } from "uuid";
const router = express.Router();
// all routes from here are starting from /questions
// router.get("/", (req, res) => {
//   res.send("what is the question?");
// });

router.get("/", (req, res) => {
  res.send(questions);
});

router.post("/", (req, res) => {
  const question = req.body;
  const questionId = { ...question, id: questions.length + 1 };
  questions.push(questionId);

  res.send({ message: "Question is added " });
});

router.patch("/:id", (req, res) => {
  // console.log("check params", req.params);
  const { id } = req.params;
  const { question, answers, correctAnswer } = req.body;
  console.log("check id", id);
  const foundQuestion = questions.find((question) => {
    //
    console.log("question id", question.id, "id", parseInt(id));

    return question.id === parseInt(id);
  }); // here we add {}to return the logic and we moved console log of question.id inside arrow function and when we retur now it is defined and we used parseInt to make the string a number
  console.log("found question", foundQuestion);

  if (id) question.id === parseInt(id);

  // if (firstName) user.firstName = firstName; //here we update one user after we find //here I copied an example and compare
  if (question) foundQuestion.question = question; // here should be foundQuestion not question find()name ,I should console log every value not to do it all in one go
  if (answers) foundQuestion.answers = answers;
  if (correctAnswer) foundQuestion.correctAnswer = correctAnswer;

  res.send(`Question with the id ${id} is updated`);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  questions = questions.filter((question) => {
    //here update the state for let questions
    return question.id !== parseInt(id);
  });
  res.send("The question is deleted");
});

let questions = [
  {
    id: 1,
    question: "Which ocean is the biggest in the world?",
    answers: {
      A: "The North Atlantic Ocean",
      B: "The Pacific Ocean",
      C: "The Indian Ocean",
      D: "The Arctic Ocean",
    },
    correctAnswer: "B",
  },

  {
    id: 2,
    question: "which is the highest mountain in the world ?",
    answers: {
      A: "The Himalaya",
      B: "The Everest",
      C: "The Denali",
      D: "The Kilimanjaro",
    },
    correctAnswer: "B",
  },
  {
    id: 3,
    question: " which sea is the saltiest sea in the world?",
    answers: {
      A: "The Dead Sea",
      B: "The Red Sea",
      C: "The mediterranean Sea",
      D: "The Yellow Sea",
    },
    correctAnswer: "A",
  },
];

router.get("/random", (request, response) => {
  var question = questions[Math.floor(Math.random() * questions.length)];
  response.send({
    id: question.id,
    question: question.question,
    answers: question.answers,
  });
});

router.post("/:questionId/checkanswer", (req, res) => {
  const questionId = parseInt(req.params.questionId);
  if (!req.body.answer) {
    // if not exist
    return res
      .status(400)
      .send({ message: "No answer found in the body of the request " });
  }
  const userAnswer = req.body.answer.toUpperCase();
  if (["A", "B", "C", "D"].includes(userAnswer) === false) {
    return res
      .status(400)
      .send({ message: "Answer needs to be A, B, C or D " });
  }
  const question = questions.find((question) => {
    return question.id === questionId;
  });
  if (question === undefined) {
    return res.status(404).send({ message: "This question doesn't exist." });
  }
  res.send({
    answerCorrect: question.correctAnswer === userAnswer,
  });
});

export default router; // we can use of it in index.js
