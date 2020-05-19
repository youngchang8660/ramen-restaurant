require('dotenv').config()
const express = require('express'),
      massive = require('massive'),
      cors = require('cors'),
      {SERVER_PORT, CONNECTION_STRING} =process.env
      port = SERVER_PORT,
      mainCtrl = require('./mainController'),
      path = require('path'),
      app = express();


app.use(express.json())
app.use(cors())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('db connected')
})

app.get('/api/menus', mainCtrl.getMenus)
app.post('/api/new-reservation', mainCtrl.addNewReservation)

app.use(express.static(__dirname + '/../build'))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})


app.listen(port, () => console.log(`Server running on ${port}`))