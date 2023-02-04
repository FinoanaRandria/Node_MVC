const express =require('express');
const routes = require('./routes/routes')
const app = express()

const port = 1234
app.use('css',express.static('./public'))
app.set('view engine','ejs')
app.use(routes)


app.listen(port, console.log(`Server is runing on ${port}`))
