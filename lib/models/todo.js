var todo = new Schema({
    title : String,
    details : String,
    state : String,
    deadline : Date,
    date : {
        type: Date,
        default: Date.now
    }
});