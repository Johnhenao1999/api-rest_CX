const express = require('express');
const morgan = require('morgan');
const app = express();

app.set('port', 3000);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send("Hola mundo");
})

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});