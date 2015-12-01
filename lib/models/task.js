module.exports = function (mongoose) {

    var Schema = mongoose.Schema;

    var Task = new Schema({
        title : String,
        details : String,
        state : String,
        deadline : Date,
        date : {
            type: Date,
            default: Date.now
        }
    });

    return mongoose.model('Task', Task);
};