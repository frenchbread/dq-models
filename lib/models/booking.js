var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Booking = new Schema({
    name: {
        type        : String,
        required    : true
    },
    email: {
        type        : String,
        required    : true
    },
    moveIn:{
        type        : Date
    },
    moveOut:{
        type        : Date
    },
    message:{
        type        : String
    },
    date:{
        type        : Date
    },
    created: {
        type        : Date,
        default     : Date.now
    }
});

module.exports = mongoose.model('Booking', Booking);