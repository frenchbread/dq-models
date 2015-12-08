var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// ip-ware

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

schema.statics.watch = function () {

    // watching here

    var eye = new this;

    console.log(eye);
    
};

schema.statics.weekly = function () {

    // sorted by weeks
    // starting from last/current week

    console.log("weekly stats");
};

schema.static.monthly = function () {

    // sorted by months
    // starting from last/current month

    console.log("monthly stats");
};

var Watcher = mongoose.model('Watcher', schema);

module.exports = Watcher;