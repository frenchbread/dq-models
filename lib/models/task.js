var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Task = new Schema({
    title : String,
    details : String,
    state : String,
    deadline : Date,
    date : {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Task', Task);