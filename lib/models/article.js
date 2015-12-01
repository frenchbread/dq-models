var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
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

var Article = mongoose.model('Article', schema);

module.exports = Article;