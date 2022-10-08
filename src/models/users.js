const mongoose = require('mongoose');

//MODELO DE DATOS
const userSchema = mongoose.Schema({
    rut: {
        type:String,
        required: true,
        maxlength: 25,
        unique: true
    },
    pass: {
        type:String,
        required: true,
        minlength: 8,
        maxlength:25,
        unique: true
    }
});

module.exports = mongoose.model("User", userSchema);

