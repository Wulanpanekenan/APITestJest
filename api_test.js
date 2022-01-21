const express = require('express');
const app = express();
const https = require("https");
const port = 3000;

app.get('/', (req, res) => {
    const url = "https://restcountries.com/v2/name/indonesia";
    https.get(url, (response) => {        
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            // console.log(data);
            if (response.statusCode === 200) {
                const dataNegara = JSON.parse(data)
                // console.log("Datanya ini: ", dataNegara)
                res.send(dataNegara);
            } else {
                // console.log("Got an error: ", error, ", status code: ", response.statusCode)
            }
        });
    })
});

app.listen(port, () => {
    // console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});

module.exports = app;