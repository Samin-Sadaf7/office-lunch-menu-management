const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.listen(5000, ()=>{
    console.log('server is listening on port 5000');
})