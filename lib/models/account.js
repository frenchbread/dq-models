module.exports = function (mongoose, passportLocalMongoose) {

    var Schema = mongoose.Schema;

    var Account = new Schema({
        username    : String,
        name        : String,
        password    : String,
        isAdmin     : Boolean
    });

    Account.plugin(passportLocalMongoose);

    return mongoose.model('Account', Account);
};