'use strict'
module.exports = function(app){
    var accountList = require('../controllers/userListController')

    app.route('/signup') 
        .get(accountList.createAccount)
    
    app.route('/signin/:Username')
        .get(accountList.findAccount)
}