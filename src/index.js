const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined')) //http logger

//template engine
app.engine('handlebars',handlebars());
app.set('view engine', 'handlebars');

app.get('/', (reg, res) => {
   res.render('home');
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));