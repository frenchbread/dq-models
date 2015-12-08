var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var geoip = require('geoip-lite');

// ip-ware

var schema = new Schema({
    ip: String,
    geoData: {},
    path: String,
    regMethod: String,
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
    eye.reqMethod = req.method;
    eye.isAdmin = req.isAuthenticated() ? true : false;

    eye.save(function (err) {

        if (err) throw err;

        console.log("Watched.");

    });
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