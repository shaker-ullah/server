const express = require('express')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


// moddleware 
app.use(cors())
app.use(express.json())

const users = [
    {id: 1, name: 'sabana', email: 'shabana@gmail.com'},
    {id: 2, name: 'sabila', email: 'sabila@gmail.com'},
    {id: 3, name: 'sapnur', email: 'sapnur@gmail.com'},
    {id: 4, name: 'alam', email: 'alam@gmail.com'}
]






app.get('/', (req, res) => {
    res.send('User Management server is running')
});


app.post('/users', (req, res) => {
    console.log('post api hitting')
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log(`server is running on Port: ${port}`)
})