const { quizzes, questions } = require('../library/schema.js');

const addQuiz = async (req, res) => {
    let body = {
        user_id: req.headers._id,
        quiz: req.body.quiz,
    }

    let quizData = new quizzes(body);
    return await quizData.save().then(async (result) => {
        console.log(result);
        res.send({ error: false, message: 'success', data: result });
    }).catch((err) => {
        console.log(err);
        res.send({ err: true, message: 'something_broken' });
    });
};

const getQuizzes = async (req, res) => {
    var allQuiz = [];
    return await quizzes.find({ user_id: req.headers._id }).then(async (result) => {
        if (result?.length > 0) {
            for (var i = 0; i < result.length; i++) {
                var singleQuiz = [];
                for (var j = 0; j < result[i]?.quiz?.length; j++) {
                    let quizData = await questions.find({ _id: result[i]?.quiz[j]?.que_id });
                    let body = {
                        que_id: quizData[0]?._id,
                        category: quizData[0]?.category,
                        correct_answer: quizData[0]?.correct_answer,
                        difficulty: quizData[0]?.difficulty,
                        question: quizData[0]?.question,
                        type: quizData[0]?.type,
                        choices: [...quizData[0]?.choices],
                        user_answer: result[i]?.quiz[j]?.user_answer,
                    }
                    singleQuiz.push(body);
                }
                allQuiz.push({ quiz_id: result[i]?._id, quiz: singleQuiz });
            }
        }
        res.send({ error: false, message: 'success', data: allQuiz });
        // res.send({ error: false, message: 'success', data: allQuiz });
    }).catch((err) => {
        console.log(err);
        res.send({ err: true, message: 'something_broken' });
    });
};

module.exports = { addQuiz, getQuizzes };