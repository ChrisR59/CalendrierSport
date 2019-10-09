const express = require('express'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    app = express(),
    calendar = JSON.parse(fs.readFileSync('data/calendar.json', 'utf-8')),
    port = 8085;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, X-XSRF-TOKEN, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
});

//Mettre à jour les fichiers users.json
const writeFiles = () => {
    fs.writeFileSync('data/calendar.json', JSON.stringify(calendar));
}

app.use(express.static(__dirname + '/dist'));


//Retourner liste des tracks
//Retourne la liste de date du calendrier
app.get('/events', (req, res) => {
    res.json(calendar);
});

//Ajoute un object content des dates
app.post('/addEvent', (req, res) => {
    const data = req.body;
    calendar.push(data);
    writeFiles();
    res.json({ error: false });
})

//Retourner liste des event by search
/*
    req => search
*/
app.post('/events', (req, res) => {
    let data = req.body;
    const searchEvents = calendar.filter(x => x.title.toLowerCase().includes(data.search));
    res.json(searchEvents);
})

//Supprime un element
app.post('/deleteEvent', (req,res) => {
    let e = req.body;
    console.log(calendar.lenght);
    for (let i= 0; i < calendar.lenght;i++) {
        if (calendar[i].title == e.title && calendar[i].date == e.date) {
            calendar.splice(i,1);
        }
    }
    res.json(calendar); 
})

app.listen(port);