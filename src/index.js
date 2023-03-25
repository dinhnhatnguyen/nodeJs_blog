const path = require('path')
const express = require('express');
const { engine } = require ('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined')) //http logger

//template engine

app.engine('hbs', engine({
   extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));

app.get('/', (reg, res) => {
   res.render('home');
})

app.get('/news', (reg, res) => {
   res.render('news');
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));