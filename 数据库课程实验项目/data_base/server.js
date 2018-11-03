const express = require('express')
const router =require('./router.js')
//解析req的json
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', router)

app.listen(3000, function () {
	console.log(`Server running in port 3000`)
})