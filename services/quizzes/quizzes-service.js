const quizzesDao = require('../../daos/quizzes-dao')
const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (qid) => quizzesDao.findQuizById(qid)
module.exports = { findAllQuizzes, findQuizById }

// const quizzes = require('./quizzes.json')
//
// // TODO: Node.js Assignment this week
// const findAllQuizzes = () => {
//     return quizzes
// }
// const findQuizById = (quizId) => {
//     return quizzes.find((quiz) => {
//         return quiz._id === quizId
//     })
// }
//
// // TODO: MongoDB Assignment next week
// const createQuiz = () => {}
// const updateQuiz = () => {}
// const deleteQuiz = () => {}
//
// module.exports = {
//     createQuiz,
//     findQuizById, findAllQuizzes,
//     updateQuiz, deleteQuiz
// }