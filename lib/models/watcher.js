var Watcher = mongoose.Schema({
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

module.exports = Watcher;