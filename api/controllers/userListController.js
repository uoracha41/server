'use strict'
var mongoose = require('mongoose')
var Account = mongoose.model('Accounts')

exports.findAccount = function(req, res){
    Account.findOne({Username:req.params.Username},function(err,user){
        if(err) throw err
        res.json(user)
    })
}

exports.createAccount = function(req, res){
    var newAccount = new Account(req.body)
    newAccount.save(function(err, user){
        if(err) throw err
        res.json(user)
    })
}
