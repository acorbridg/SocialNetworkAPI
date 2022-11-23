const User = require('../../models/User');
const router = require('express').Router();

//get all users
router.get('/', (req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json(err))
}
)

//get a user by single id
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json(err))
}
)

//post a new user
router.post('/', (req, res) => {
    User.create(req.body)
        .then((newUser) => res.json(newUser))
        .catch((err) => res.status(400).json(err))
})

//PUT to update a user by its _id
router.put('/:id', (req, res) => {
    User.updateOne({ _id: req.params.id }, req.body)
        .then(() => res.send())
        .catch((err) => res.status(400).json(err))
})
//DELETE to remove user by its _id
router.delete('/:id', (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(() => res.send())
        .catch((err) => res.status(400).json(err))
})

//POST to add a new friend to a user's friend list
router.post('/:userId/friends/:friendId', async (req,res) => {
    const user = await User.findById (req.params.userId)
    const friend = await User.findById(req.params.friendId)
    user.friends.push(friend)
    user.save()
        .then(() => res.send())
        .catch((err) => res.status(400).json(err))
})

//DELETE to remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', async (req, res) => {
    const user = await User.findById(req.params.userId)
    user.friends = user.friends.filter( friendId => friendId !== req.params.friendId)
    user.save()
    .then(() => res.send())
    .catch((err) => res.status(400).json(err))
})

module.exports = router;
