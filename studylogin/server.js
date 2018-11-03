const express = require('express')
const router =require('./server/router/user.js')
//解析req的json
const bodyParser = require('body-parser')

const cookieParser = require('cookie-parser')
const logger = require('morgan')
const config = require('config-lite')(__dirname)
const compression = require('compression')

const app = express()

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(compression({ threshold: 0 }))

app.use('/api', router)

app.use(function (req, res, next) {
	var err = new Error('This page not found');
	err.status = 404;
	next(err)
})

app.listen(3000, function () {
	console.log(`Server running in port ${config.port}`)
})
