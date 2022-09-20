const express = require('express');
const getRoutes = require('./routes/get')
const postRoutes = require('./routes/post')

const port = 8001
const app = express()
app.use(getRoutes)
app.use(postRoutes)


app.listen(port, () => {
    console.log('Server Connected');
})