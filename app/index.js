const express = require('express');
var path = require('path');
const cors = require('cors')
const dashboard = require('./Routers/dashboard');
const app =express();


app.set('views', path.join(__dirname, 'Views'));
app.set('view engine','ejs');

//app.use(express.static(path.join(__dirname,'Static')));

app.use(express.static('Static'));
app.use('/resources', express.static(__dirname+'/Static'))

app.use(cors())
app.use('/', dashboard)


module.exports=app