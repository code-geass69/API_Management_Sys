const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes');
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const favouriteRoutes = require('./routes/favouriteRoutes');
const logger = require('./config/logger');

const app = express();

app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`); 
    next();
  });
app.use(cors());
app.use(bodyParser.json());

app.use('/api', apiRoutes);
app.use('/auth', authRoutes)
app.use('/category', categoryRoutes);
app.use('/favourites', favouriteRoutes);

module.exports = app;
