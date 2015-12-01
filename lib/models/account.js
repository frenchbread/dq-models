var Account = new Schema({
    username    : String,
    name        : String,
    password    : String,
    isAdmin     : Boolean
});

module.exports = Account;