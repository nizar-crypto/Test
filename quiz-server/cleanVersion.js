const express = require("express");
const app = express();
const port = 3000;
app.use(express.json()); // to define the body ,strategy compare with glitch line by line

app.get("/status", (request, response) => {
  response.send({ status: "UP " });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const questions = [
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
app.get("/question", (request, response) => {
  response.send(questions[0]);
});

app.post("/questions/:questionId/checkanswer", (req, res) => {
  // console.log(typeof req.params.questionId);
  const questionId = parseInt(req.params.questionId);
  console.log("check body", req.body.answer);
  const userAnswer = req.body.answer;
  // console.log("check", questionId);

  // var ibanNumber = projects.find(function (project) {
  //   // console.log("FIND:", project, project.id === 35);
  //   return project.donateIban === "BA96 2331 2755 2934 8254";
  // });
  // console.log("check output", ibanNumber);

  const question = questions.find((question) => {
    // console.log(
    //   "check question",
    //   "que",
    //   question.id,
    //   req.params.questionId,
    //   questionId,
    //   req.params.questionId === questionId
    // );
    return question.id === questionId;
  });
  console.log(
    "outcome",
    question.correctAnswer,
    userAnswer,
    question.correctAnswer === userAnswer
  );
  res.send({
    answerCorrect: question.correctAnswer === userAnswer.toUpperCase(),
  });
});
