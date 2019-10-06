const express = require('express'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    app = express(),
    calendar = JSON.parse(fs.readFileSync('data/calendar.json', 'utf-8')),
    port = 8084;

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
app.get('/tracks', (req, res) => {
    res.json(calendar);
});

//Ajoute un object content des dates
app.post('/addTrack', (req, res) => {
    const data = req.body;
    tracks.push({
        id: (tracks.length == 0) ? 1 : tracks[tracks.length - 1].id + 1,
        ...data
    })
    writeFiles();
    res.json({ error: false });
})

app.listen(port);


