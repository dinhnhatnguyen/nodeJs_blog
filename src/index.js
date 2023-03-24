const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'))

app.get('/', (reg, res) => {
   return res.send(`
        <h1 style="color: red;">Hello World!</h1>
   `);
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));