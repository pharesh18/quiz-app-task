const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();

const result = dotenv.config({ path: path.join(__dirname, '../', '.env') });
if (result.error) {
    throw result.error;
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload({
    useTempFiles: true,
}));
// app.use('/public', express.static('public'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    return console.log(`Server is running at port : ${PORT}`);
});

app.use('/v1', require('./v1'));

module.exports = app;