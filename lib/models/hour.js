var Schema = require('mongoose').Schema;

var Hour = new Schema({
    project : String,
    hours : Number,
    details : String,
    date : {
        type: Date,
        default: Date.now
    }
});

module.exports = Hour;