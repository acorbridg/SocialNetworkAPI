const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema ({ 
thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280, 
},
createdAt: { 
    type: Date,
    default: Date.now(),
    get: value => new Date(value).toISOString()
    //set default value to the current timestamp
    //use a getter method to format the timestamp on query
},
username: {
    type: String,
    required: true,
},
reactions: [reactionSchema]
    //array of nested documents created with the reactionSchema
})    

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
//SCHEMA SETTINGS
    //create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
    

    const Thought = model('thought', thoughtSchema);

    module.exports = Thought;