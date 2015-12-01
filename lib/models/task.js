var Schema = require('mongoose').Schema;

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


module.exports = Task;