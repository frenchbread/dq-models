var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {
        type        : String,
        required    : true
    },
    details: {
        type        : String
    },
    link:{
        type        : String
    },
    status:{
        type        : String
    },
    className:{
        type        : String
    },
    isPrivate:{
        type        : Boolean,
        default     : false
    },
    created: {
        type        : Date,
        default     : Date.now
    }
});

var Project = mongoose.model('Project', schema);

module.exports = Project;