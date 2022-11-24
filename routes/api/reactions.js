const Reaction = require('../../models/Reaction');
const router = require('express').Router();
const Thought = require('../../models/Thought');

//POST to create a reaction stored in a single thought's reactions array field
router.post('/:thoughtId/reactions', async (req, res) => {
    // const thought = await Thought.findById (req.params.thoughtId)
    // console.log(thought)
    // const reaction = await Reaction.create({username: thought.username, reactionBody:req.body.reactionBody})
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId}, 
        { $addToSet: {reaction:req.body}},
         {new: true}
     )
    .then((thought) => res.json(thought))
        .catch((err) => res.status(400).json(err))
}
)

//DELETE to pull and remove a reaction by the reaction's reactionId value
router.delete('/:id', (req, res) => {
    Reaction.deleteOne({ _id: req.params.id })
        .then(() => res.send())
        .catch((err) => res.status(400).json(err))
}
)

module.exports = router;