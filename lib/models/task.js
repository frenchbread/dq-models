var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title : String,
    details : String,
    state : String,
    deadline : Date,
    date : {
        type: Date,
        default: Date.now
    }
});

var Task = mongoose.model('Task', schema);

module.exports = Task;