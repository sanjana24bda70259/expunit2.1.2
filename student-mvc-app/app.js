const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

app.use('/', studentRoutes);

app.listen(3000, () => console.log('Server running'));
