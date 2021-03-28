const express = require('express')
app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', request.get('origin'));
    response.header('Access-Control-Allow-Credentials', true);
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');
    next();
});

app.get('/', (request, response) => {
    console.log('index endpoint reached')
    response.send("I don't know whether the weather will improve.")
})

app.listen(process.env.PORT, () =>  {
    console.log('Server starting...')
})