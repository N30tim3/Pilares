
const express = require('express')
const app = express()
const port = 3000

// Static Files
app.use(express.static('public'));
app.use('/css', express.static( __dirname + 'public/assets/css'))
app.use('/js', express.static(__dirname + 'public/assets/js'))
app.use('/img', express.static(__dirname + 'public/assets/images'))
app.use('/fonts', express.static(__dirname + 'public/assets/fonts'))
app.use('/webfonts', express.static(__dirname + 'public/assets/webfonts'))

// Set View's
//app.set('views', '/views');
//app.set('view engine', 'ejs');

// Navigation
//app.get('', (req, res) => {
//   res.render('index', { text: 'Hey' })
//})
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

