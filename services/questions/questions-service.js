const questionsDao = require('../../daos/questions-dao')
const findAllQuestions = () => questionsDao.findAllQuestions()
const findQuestionById = (qid) => questionsDao.findQuestionById(qid)
const findQuestionsForQuiz = (qid) => questionsDao.findQuestionsForQuiz(qid)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }

// const questions = require('./questions.json');
//
// const createQuestion = () => {}
// const createQuestionForQuiz = () => {}
//
// const findAllQuestions = () => {
//     return  questions;
// }
// const findQuestionsForQuiz = (qzid) => {
//     return questions.filter((question) => {
//         return question.quizId === qzid;
//     })
// }
//
// const findQuestionById = (quid) => {
//     return questions.find((question) => {
//         return question._id === quid;
//     });
// }
//
// const updateQuestion = () => {}
// const deleteQuestion = () => {}
//
// module.exports = {
//     createQuestion, findQuestionsForQuiz,
//     findAllQuestions, findQuestionById,
//     updateQuestion, deleteQuestion
// }