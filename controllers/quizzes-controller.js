const quizzesService = require('../services/quizzes/quizzes-service')
module.exports = function (app) {
    app.get('/api/quizzes', (req, res) =>
        quizzesService.findAllQuizzes()
            .then(allQuizzes => res.json(allQuizzes)))
    app.get('/api/quizzes/:qzid', (req, res) =>
        quizzesService.findQuizById(req.params['qzid'])
            .then(quiz => res.json(quiz)))
}





// // Controllers deal with all things HTTP
// // sits between two worlds: the HTTP world and the JavaScript Object world
// module.exports = (app) => {
//     const quizzesService = require('../services/quizzes/quizzes-service')
//
//     // req, res allows participating in client/server
//     // architecture
//     const findAllQuizzes = (req, res) => {
//         const quizzes = quizzesService.findAllQuizzes()
//         res.send(quizzes)
//     }
//     const findQuizById = (req, res) => {
//         const qid = req.params['quizId']
//         const quiz = quizzesService.findQuizById(qid)
//         res.send(quiz)
//     }
//
//     app.get('/api/quizzes', findAllQuizzes)
//     app.get('/api/quizzes/:quizId', findQuizById)
// }