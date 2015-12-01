var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    clientIpAddr: String,
    clientIpRoutable: Boolean,
    ip: String,
    path: String,
    isAdmin: Boolean,
    requested_at: {
        type: Date,
        default: Date.now
    }
});

var Watcher = mongoose.model('Watcher', schema);

module.exports = Watcher;