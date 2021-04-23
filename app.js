const express = require('express');
const request = require('request');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

let url = "https://api.wazirx.com/api/v2/tickers";

let options = {json: true};



app.get("/",(req,res) => {
    request(url, options, (error, response, body) => {
        if (error) {
            return  console.log(error)
        };
    
        if (!error && response.statusCode == 200) {
            let result = Object.values(body);
            let items = result.slice(0, 10);
            console.log(items);
            res.render('layout',{items:items});
    
        };
    });
    
});
app.listen(3000);
