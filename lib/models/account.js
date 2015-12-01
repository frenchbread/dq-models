var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

var Account = new Schema({
    username    : String,
    name        : String,
    password    : String,
    isAdmin     : Boolean
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);