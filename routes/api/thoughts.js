const Thought = require('../../models/Thought');
const router = require('express').Router();
const User = require('../../models/User')

//GET to get all thoughts
router.get('/', (req, res) => {
    Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(400).json(err))
}
)

//GET to get a single thought by its _id
router.get('/:id', (req, res) => {
    Thought.findById(req.params.id)
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(400).json(err))
}
)

//POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field
router.post('/:userId', async (req, res) => {
    const user = await User.findById (req.params.userId)
    console.log(user)
    const thought = await Thought.create({username: user.username, thoughtText:req.body.thoughtText})
    console.log(thought)
    User.findOneAndUpdate(
       { _id: req.params.userId}, 
       { $push: {thoughts:thought._id}},
        {new: true}
    )
   
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json(err))
}
)

//PUT to update a thought by its _id
router.put('/:id', (req, res) => {
    Thought.updateOne({ _id: req.params.id }, req.body)
        .then(() => res.send())
        .catch((err) => res.status(400).json(err))
}
)

//DELETE to remove a thought by its _id
router.delete('/:id', (req, res) => {
    Thought.deleteOne({ _id: req.params.id })
        .then(() => res.send())
        .catch((err) => res.status(400).json(err))
}
)

module.exports = router;