const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const userSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2,
    },
}, {
    timestamps: true,
})

const user = mongoose.model("user",userSchema);

module.exports = user;