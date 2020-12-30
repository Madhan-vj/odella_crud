const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const category = require('./routes/category');
const mod = require('./routes/module');
const training = require('./routes/training');
// const locations = require('./routes/location');
const PORT = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/category', category);
app.use('/module', mod);
app.use('/training', training);
// app.use('/location', locations);

app.listen(PORT, () => {
    console.log(`app is running on PORT:${PORT}`)
});