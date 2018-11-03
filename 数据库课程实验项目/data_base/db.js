const mongoose = require('mongoose')

// mongodb 连接🔗
mongoose.connect('mongodb://localhost/warehouse', { useNewUrlParser: true })
// 此处防止 node.js - Mongoose: mpromise 错误
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connect error'))
db.once('open', function () {
	console.log('Mongodb started successfully')
})

var userSchema = mongoose.Schema({
	goodsId: String,   //货物号
	goodsName: String,	 //货物名
	goodsNum: String,	//货物数量
	goodsPrice: String,	  //货物单体价格
	goodsHoster: String,	//货物主人
	wareHouseId: String,	//货物存入的仓库
	state:String,       //出库状态
	time: String       //货物出库时间
})

var model = {
	// 在此处扩展 model，例如：
	// Article: mongoose.model('Article', articleSchema),
	User: mongoose.model('User', userSchema)
}

module.exports = model 
