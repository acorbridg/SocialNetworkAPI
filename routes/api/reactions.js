const Reaction = require('../../models/Reaction');
const router = require('express').Router();

//POST to create a reaction stored in a single thought's reactions array field
router.post('/:id', (req, res) => {
    Reaction.create(req.body)
    Reaction.push({_id: req.params.id}, req.body)
    .then((react) => res.json(react))
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