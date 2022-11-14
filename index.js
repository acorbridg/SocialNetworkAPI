const User = require ('./models/User')
const Thought = require ('./models/Thought')
const db = require ('./config/connection')

db.once('open', () => {
    // User.create({username: "acor", email: "acor@email.com"})
    // .then((user) => console.log(user))
    // .catch((err) => console.log(err));

    Thought.create({ thoughtText: "I am doing great, thanks for asking", reactions: [{reactionBody: "ah, very interesting", username: "Jarrod"}]})
    .then((thought) => console.log(thought))
    .catch((err) => console.log(err));
  });
  