var Schema = require('mongoose').Schema;

var Article = new Schema({
    title: {
        type        : String,
        required    : true
    },
    text: {
        type        : String
    },
    isPrivate: {
        type        : Boolean,
        default     : true
    },
    ipAddr: {
        type        : String
    },
    created: {
        type        : Date,
        default     : Date.now
    }
});


module.exports =  Article;