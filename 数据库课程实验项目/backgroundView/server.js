const express = require('express')


const app = express()
app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
  });


app.get('/user',(req, res) => {
    res.status(200),
    res.json({
        success:true
    })
})


app.use(function (req, res, next) {
	var err = new Error('This page not found');
	err.status = 404;
	next(err)
})

app.listen(3000, function () {
	console.log(`Server running in port 3000`)
})
