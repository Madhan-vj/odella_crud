const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const PORT = 3000;

dotenv.config();


const category = require('./routes/category');
const mod = require('./routes/module');
const training = require('./routes/training');
const locations = require('./routes/location');
const trainer = require('./routes/trainer');
const tag = require('./routes/tag');


app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/category', category);
app.use('/module', mod);
app.use('/training', training);
app.use('/location', locations);
app.use('/trainer', trainer);
app.use('/tag', tag);

// app.listen(PORT, () => {
//     console.log(`app is running on PORT:${PORT}`)
// });
app.listen(process.env.PORT || 5000)
