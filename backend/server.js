const express = require('express');
const logger = require('morgan');
const bParser = require('body-parser');

const app = express();

//Middlewars
app.use(logger('combined'));
app.use(bParser.urlencoded({extended: false}));

//Router
app.use('/products', require('./router/products'));
app.use('/users', require('./router/users'));
require('./connetion_bd/bd');

//Port
app.set('port', process.env.PORT || 3000);

//Running Server
app.listen(app.get('port'), ()=> {
    console.log('Running on port', app.get('port'));
});