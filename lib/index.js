
exports.Account = function (mongoose) { return require('./models/account')(mongoose); };

exports.Article = function (mongoose) { return require('./models/article')(mongoose); };

exports.Project = function (mongoose) { return require('./models/project')(mongoose) };

exports.Watcher = function (mongoose) { return require('./models/watcher')(mongoose); };

exports.Task = function (mongoose) { return require('./models/task')(mongoose); };

exports.Hour = function (mongoose) { return require('./models/hour')(mongoose); };

exports.Booking = function (mongoose) { return require('./models/booking')(mongoose); };