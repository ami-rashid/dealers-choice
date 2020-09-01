const express = require("express");
const app = express();
const morgan = require('morgan');
const path = require('path');
const router = require('./routes/index');

app.use(express.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '..', './server/public')))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.use('/api', router);

//initialize app
//require morgan|volleyball, path packages
//require db from /db

const port = process.env.PORT || 3000;

const init = async()=> {
  app.listen(port, ()=> console.log(`\n\n           listening on port ${port}           \n\n`));
}

init();