var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Hours = new Schema({
    project : String,
    hours : Number,
    details : String,
    date : {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Hours', Hours);