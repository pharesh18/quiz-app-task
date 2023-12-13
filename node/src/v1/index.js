const express = require('express');
const { validateSchema, checkAccess } = require('./library/controlAccess.js');
const app = express();

const userRoutes = require('./routes/userRoutes.js');
const questionRoutes = require('./routes/questionRoutes.js');
const quizRoutes = require('./routes/quizRoutes.js');
const { users } = require('./library/schema.js');

require('./library/db.js');
// app.use(validateSchema);
// console.log("hello");
// app.use(checkAccess);
app.use('/api/users', userRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/quiz', quizRoutes);

// const deleteAll = async () => {
//     await users.deleteMany();
// }

// deleteAll();

module.exports = app;