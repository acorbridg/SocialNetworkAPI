username
    //string
    //unique
    //required
    //trimmed

email 
    //String
    //required
    //unique
    //must match a valid email address (look into mongoose's matching validation)

thoughts
    //array of _id values referencing the Thought model

friends 
    //array of _id values referencing the User Model.

//SCHEMA SETTINGS
    //create a virtual called friendCount that retrieves the length of the user's friends array field on query.

    