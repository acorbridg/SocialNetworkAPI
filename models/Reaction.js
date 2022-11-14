const { Schema } = require("mongoose")

//SCHEMA ONLY 
const reactionSchema = new Schema ({

// // reactionId:{
// //     type: Schema.Types.ObjectId,
// //     default: new ObjectId,
// //     //Use Mongoose's ObjectId data type
// //     //Default value is set to a new ObjectId
// },
reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
},
username: {
    type: String,
    required: true,
},
createdAt: { 
    type: Date,
    default: Date.now(),
    get: value => new Date(value).toISOString(),
},

});

//SCHEMA SETTINGS
//This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model
module.exports = reactionSchema;