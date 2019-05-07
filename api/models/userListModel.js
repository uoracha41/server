'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var AccountSchema = new Schema({
    Username: {
        type: String,
        Required: 'Please enter'
    },
    Password: {
        type: String,
        Required: 'Please enter'
    },
    FirstName: {
        type: String,
        Required: 'Please enter'
    },
    LastName: {
        type: String,
        Required: 'Pleasse enter'
    },
    MobileNo: {
        type: String,
        Required: 'Pleasse enter'
    },
    Status:{
        type: Boolean,
        Required: 'Please enter'
    }    
})

module.exports = mongoose.model('Accounts',AccountSchema)