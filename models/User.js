const { Schema, model } = require("mongoose");
const Thought = require("./Thought");

const userSchema = new Schema({

    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    thoughts: [
        {

            type: Schema.Types.ObjectId,
            ref: 'thought',

            // array of _id values referencing the Thought model
        }],

    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',

            //array of _id values referencing the User Model.
        }],
})

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});
//SCHEMA SETTINGS
//create a virtual called friendCount that retrieves the length of the user's friends array field on query.



const User = model('user', userSchema);

module.exports = User;