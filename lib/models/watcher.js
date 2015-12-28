var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var geoip = require('geoip-lite');
var _ = require('underscore');

var schema = new Schema({
    ip: String,
    geoData: {},
    path: String,
    method: String,
    isAdmin: Boolean,
    project: String,
    requestedAt: {
        type: Date,
        default: Date.now
    }
});

schema.statics.watch = function (project, req, routes) {

    if (pathIsPresent(routes, req.originalUrl)) {

        // watching here
        var eye = new this;

        var ip = req.ip.replace('::ffff:', '');
        var geo = geoip.lookup(ip);
        var path = req.originalUrl;
        var method = req.method;

        eye.project = project;
        eye.ip = ip;
        eye.geoData = geo;
        eye.path = path;
        eye.method = method;
        eye.isAdmin = req.isAuthenticated() ? true : false;

        eye.save(function (err) {

            if (err) throw err;
        });
    }
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

var pathIsPresent = function (routes, path) {

    var contains = false;

    _.each(routes, function (route) {

        if (path.indexOf(route) > -1) {
            return contains = true;
        }

    });

    return contains;
};