var M = require('./');
var mongoose = require('mongoose');

//console.log(mongoose);

var Account = M.model('Account');

var Article = M.model('Article');

var Project = M.model('Project');

var Watcher = M.model('Watcher');

var Task = M.model('Task');

var Hour = M.model('Hour');

var Booking = M.model('Booking');



// test

Watcher.watch();