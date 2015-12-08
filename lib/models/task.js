var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title : String,
    details : String,
    state : String,
    deadline : Date,
    closedAt : {
        type: Date
    },
    date : {
        type: Date,
        default: Date.now
    }
});

// TODO: change `date` to `createdAt`

var Task = mongoose.model('Task', schema);

module.exports = Task;