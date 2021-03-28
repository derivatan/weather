const express = require('express')
const axios = require('axios')
const app = express()

// TODO: These values should typically be more suitable place, like a database.
const locations = [
    {Id: 1, Name: "Stockholm", lat: 59.329323, lng: 18.068581},
    {Id: 2, Name: "Malmö", lat: 55.604980, lng: 13.003822},
    {Id: 3, Name: "Göteborg", lat: 57.696991, lng: 11.986500},
    {Id: 4, Name: "Västerås", lat: 59.609901, lng: 16.544809},
    {Id: 5, Name: "Trollhättan", lat:58.283741, lng: 12.288490},
]

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

app.get('/locations', (request, response) => {
    response.json({
        locations: locations
    })
})

app.get('/forecast/:locationId', (request, response) => {
    const locationId = parseInt(request.params.locationId)
    if (isNaN(locationId)) {
        response.status(400).send("LocationID must be an int")
        return
    }

    const filteredLocations = locations.filter(l => l.Id === locationId)
    if (filteredLocations.length !== 1) {
        response.status(404).send("Location not found")
        return
    }
    const location = filteredLocations[0]

    axios.get('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/' + location.lng + '/lat/' + location.lat + '/data.json').then(data => {
        response.json({
            location: location,
            rawData: data.data
        })
    }).catch(error => {
        console.log(error)
    })
})

app.listen(process.env.PORT, () =>  {
    console.log('Server starting...')
})