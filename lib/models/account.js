var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var schema = new Schema({
    username    : String,
    name        : String,
    password    : String,
    isAdmin     : Boolean
});

schema.plugin(passportLocalMongoose);

var Account = mongoose.model('Account', schema);

module.exports = Account;