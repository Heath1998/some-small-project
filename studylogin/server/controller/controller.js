const express = require('express')
const model = require('../db/db.js')
const router = express.Router()
const moment = require('moment')
const objectIdToTimestamp = require('objectid-to-timestamp')
const createToken = require('../middleware/createToken.js')
const sha1 = require('sha1')
const checkToken = require('../middleware/checkToken.js')

//注册
const Register =(req, res) => {
    let userResiger =new model.User({
        email:req.body.email,
        password:sha1(req.body.password),
        recheck: req.body.recheck,
        token: createToken(this.email)
    })
    // 将 objectid 转换为 用户创建时间
    userResiger.create_time = moment(objectIdToTimestamp(userResiger._id))
        .format('YYYY-MM-DD HH:mm:ss')

    model.User.findOne({
        email: (userResiger.email)
            .toLowerCase()
    }, (err, doc) => {
        if(err){
            console.log(err)
        }
        if(doc){
            res.json({
                success: false
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
                        success: true
                    })
                }
            })
        }
    })
}

//登录
const Login =(req, res) => {
    let userLogin = new model.User({
        email: req.body.email,
        password: sha1(req.body.password),
        token: createToken(this.email)
    })
    model.User.findOne({email: userLogin.email}, (err, doc) => {
        if(err)
            console.log(err)
        if(!doc){
            console.log('账号不存在')
            res.json({
                info: false
            })
        }
        else if (userLogin.password == doc.password ){
            let name = req.body.email
            console.log('登录成功')
            res.json({
                success: true,
                email: doc.email,
                time: moment(objectIdToTimestamp(doc._id))
                .format('YYYY-MM-DD HH:mm:ss'),
                token: createToken(name)
            })
        }
        else {
            console.log('密码错误')
            res.json({
                success: false
            })
        }
    })
}

// 所有用户打印
const User = (req, res) => {
	model.User.find({}, (err, doc) => {
        if(err) console.log(err)
        res.send(doc)
	})
}

//删除用户
const delUser = (req, res) =>{
    model.User.findOneAndRemove({_id:req.body.id}, err => {
        if (err)
            console.log(err)
        console.log('删除成功')
        res.json({
            success: true
        })
    })
}

module.exports = (router) => {
    router.post('/register', Register),
    router.post('/login', Login),
    router.get('/user', checkToken, User),
    router.post('/delUser', checkToken, delUser)
}