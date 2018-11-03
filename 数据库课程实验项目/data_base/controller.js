const express = require('express')
const model = require('./db.js')


//注册
const Register =(req, res) => {
    let userResiger =new model.User({
        goodsId: req.body.goodsId,
        goodsName: req.body.goodsName,
        goodsNum: req.body.goodsNum,
        goodsPrice: req.body.goodsPrice,
        goodsHoster: req.body.goodsHoster,
        wareHouseId: req.body.wareHouseId,
        state: "已入库"
    })

    model.User.findOne({
        goodsId: (userResiger.goodsId)
            .toLowerCase()
    }, (err, doc) => {
        if(err){
            console.log(err)
        }
        if(doc){
            res.json({
                success: 'exist'
            })
        }
        else {           
        model.User.findOne({
            goodsHoster: (userResiger.goodsHoster),
            goodsName:(userResiger.goodsName)
        },(err, doc) => {
            if(err){
                console.log(err)
            }
            if(doc){
                console.log(doc)
                //更新数据
                console.log(parseInt(doc.goodsNum))
                console.log(parseInt(userResiger.goodsNum))

                doc.goodsNum = (parseInt(doc.goodsNum) + parseInt(userResiger.goodsNum)).toString()
                console.log(doc.goodsNum)
                model.User.findOneAndUpdate({"_id":doc._id}, {"goodsNum" :doc.goodsNum},(err,res) => {
                    if (err) {
                        console.log("Error:" + err);
                    }
                })
                res.json({
                    success: 'addExist'
                })
            }
            else {
                userResiger.save((err, result) =>{
                    if(err){
                        console.log(err)
                    }
                    else {
                        console.log("save monggodb success")
                        res.json({
                            success: 'insert'
                        })
                    }
                })
            }
        })
        }
    })
}

//出库
const Deliver =(req, res) => {
    let goodsDeliver =new model.User({
        goodsId: req.body.goodsId,
        goodsName: req.body.goodsName,
        goodsHoster: req.body.goodsHoster,
        state: "已出库",
        time: req.body.time
    })
    console.log('33333333333333333')
    model.User.findOne({goodsId: goodsDeliver.goodsId}, (err, doc) => {
        if(err) {
            console.log(err)
        }
        console.log(doc)
        if(doc && doc.state !== '已出库') {
            model.User.findOneAndUpdate({"_id":doc._id}, 
            {
                state: "已出库",
                time: goodsDeliver.time}, 
            (err,res) => {
                if (err) {
                    console.log("Error:" + err);
                }
            })
            res.json({
                success: 'deliver'
            })
        }
        else if(doc && doc.state === '已出库') {
            res.json({
                success: 'exist'
            })
        }
        else {
            res.json({
                success: 'error'
            })
        }
    })

}

const GoodsList =(req, res) => {
    model.User.find(req.body, (err, doc) => {
        if(err) console.log(err)
        res.send(doc)
	})
}

const GoodsChange =(req, res) => {
    model.User.findOne({goodsId: req.body.goodsId}, (err, doc) => {
        if(err) {
            console.log(err)
        }
        if(doc) {
            if(doc.state === '已出库') {
                res.json({
                    success:false
                })
                return ;
            }
            model.User.findOneAndUpdate({_id : doc._id},
            req.body, 
            (err,res) => {
                if (err) {
                    console.log("Error:" + err);
                }
            })
            res.json({
                success:true
            })
        }
    })
}

module.exports = (router) => {
    router.post('/insert', Register),
    router.post('/deliver', Deliver),
    router.post('/goods', GoodsList),
    router.post('/change', GoodsChange)
}