var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    project : String,
    hours : Number,
    details : String,
    date : {
        type: Date,
        default: Date.now
    }
});

var Hour = mongoose.model('Hour', schema);

module.exports = Hour;