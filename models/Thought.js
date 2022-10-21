thoughtText
    //string
    //required
    //must be between 1 and 280 characters

createdAt 
    //date
    //set default value to the current timestamp
    //use a getter method to format the timestamp on query

username //the user that created this thought
    //string
    //required

reactions //like replies
    //array of nested documents created with the reactionSchema

//SCHEMA SETTINGS
    //create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
    