const sqlite3 = require('sqlite3')
const cors = require('cors')
const express = require('express')

const app = express()
app.use(express.json())
app.use(cors())

const db = new sqlite3.Database('./database.db')

// Making a table in the database
db.serialize(() => {
    db.run(`create table if not exists users (
        id text primary key,
        name text,
        email text
        )`)
})

const users = {
    id: new Date().toISOString(),
    name: 'Jo',
    email: 'example@example.com'
}

// Inserting and registering users in the database

db.run(`insert into users (id, name, email) values (?, ?, ?)`,
    [users.id, users.name, users.email], (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('User created successfully!')
        }
    }
)

// 
app.get('/users', (req, res) => {
    db.all('select * from users', (err, rows) => {
        if (err) {
            return res.status(500).json(err)
        } else {
            return res.status(200).json(rows)
        }
    })
})

app.listen(8080, () => console.log('Server running on port 8080!'))



/*const express = require('express')

const cors = require('cors')

const app = express()
app.use (express.json())
app.use(cors())

// http get

// app.get('/users', (request, response) => {
//     return response.send('Lista de usuários')
// })

// route

app.get('/users/:id', (request, response) => {
    const userId = request.params.id;
    return response.send(`User ID: ${userid}`)
})

app.listen(8080, () => console.log('Server running on port 8080'))*/