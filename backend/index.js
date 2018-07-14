const express = require('express');
const app = express();

const PORT = 5001;

app.listen(PORT,()=>console.log(`server is running on PORT : ${PORT}`));

const operators = require('./routers/operators');


app.use('/',operators)

module.exports= app;