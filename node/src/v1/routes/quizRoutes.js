const express = require('express');
const router = express.Router();
const { addQuiz, getQuizzes } = require('../controller/quizController');

router.post('/add', addQuiz);
router.get('/getall', getQuizzes);

module.exports = router;