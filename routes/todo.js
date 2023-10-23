const {Router} = require('express')
const router = Router()
const Todo = require('../models/Todo')


router.get('/',  async (req, res) => {
    const todos = await Todo.find({}).lean()

    res.render('index', {
        title: 'todos',
        isIndex: true,
        todos
    })
})
router.get('/create', async (req, res) => {
    res.render('create', {
        title: 'create todo',
        isCreate: true
    })
})

router.post('/create', async (req,res) => {
    const todo = new Todo({
        title: req.body.title,
    })
    await todo.save()
    res.redirect('/')
})

module.exports = router