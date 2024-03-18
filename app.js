const express = require('express');
const app = express();


const PORT = 3000;


app.set('views', './views');


app.set('view engine', 'ejs');


const indexRouter = require('./routes/index');


app.use('/', indexRouter);


app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});