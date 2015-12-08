var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var geoip = require('geoip-lite');
var validator = require('validator');

// ip-ware

var schema = new Schema({
    ip: String,
    geoData: {},
    path: String,
    isAdmin: Boolean,
    project: String,
    requestedAt: {
        type: Date,
        default: Date.now
    }
});

schema.statics.watch = function (req) {

    // watching here

    var eye = new this;

    var ip = req.ip.replace('::ffff:', '');

    var geo = geoip.lookup(ip);

    eye.ip = ip;
    eye.geoData = geo;
    eye.path = req.originalUrl;
    eye.isAdmin = req.isAuthenticated() ? true : false;

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