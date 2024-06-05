let mongoose = require("mongoose");

let todoSchema = new mongoose.Schema({


    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    },
    due_date: {
        type: Date,
        default: Date.now
    }

});

let doto = mongoose.model("list", todoSchema)
module.exports = doto;






