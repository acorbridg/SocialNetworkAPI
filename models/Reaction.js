//SCHEMA ONLY (??)
reactionId
    //Use Mongoose's ObjectId data type
    //Default value is set to a new ObjectId

reactionBody
    //String
    //required
    //280 character maximum

username
    //string
    //required

createdAt 
    //Date
    //set default value to the current timestamp
    //use a getter method to format the timestamp on query

//SCHEMA SETTINGS
//This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model
