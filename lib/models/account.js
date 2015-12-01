var Schema = require('mongoose').Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username    : String,
    name        : String,
    password    : String,
    isAdmin     : Boolean
});

Account.plugin(passportLocalMongoose);

module.exports = Account;