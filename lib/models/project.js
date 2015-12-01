var Schema = require('mongoose').Schema;

var Project = new Schema({
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


module.exports = Project;