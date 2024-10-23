const express = require('express')

const cors = require('cors')

const app = express()
app.use (express.json())
app.use(cors())

/*// http get

app.get('/users', (request, response) => {
    return response.send('Lista de usuários')
})*/

// route

app.get('/users/:id', (request, response) => {
    const userId = request.params.id;
    return response.send(`User ID: ${userid}`)
})

app.listen(8080, () => console.log('Server running on port 8080'))