const express = require('express')
const mongoose = require('mongoose')
const exphds = require('express-handlebars')
const todoRoutes = require('./routes/todo')

const app = express()
const hbs = exphds.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.use(express.urlencoded({extended:true}))
app.use(todoRoutes)


app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')



const PORT = process.env.PORT || 4000

async function start() {
    try {
        await mongoose.connect('mongodb+srv://qwerty:qwerty123@cluster0.0qnhk.mongodb.net/Todos?retryWrites=true&w=majority', {
            useNewUrlParser: true
        })
        app.listen(PORT, () => {
            console.log('server start')
        })
    } catch (e) {
        console.log(e)
    }

}

start()