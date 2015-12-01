var Schema = require('mongoose').Schema;

var Hours = new Schema({
    project : String,
    hours : Number,
    details : String,
    date : {
        type: Date,
        default: Date.now
    }
});

module.exports = Hours;