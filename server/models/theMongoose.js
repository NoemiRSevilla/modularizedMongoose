const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Animal has to have name"]
    },
    color: {
        type: String,
        required: [true, "An animal can't be invisible"],
        minLength: [2, "Must have minimum characters of 2"]
    },
    age: {
        type: Number,
        required: [true, "Who wants to live forever"],
        minLength: [11, "Can't be younger than 1"],
        maxlength: [50, "Looks like your animal needs to retire."]
    }
},
    { timestamps: true });

const Animal = mongoose.model('Animal', AnimalSchema);