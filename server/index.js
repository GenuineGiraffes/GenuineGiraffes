var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var axios = require('axios');
var database = require('../database/index.js');
var addBooktoLibrary = require('../database/index.js').addBooktoLibrary;
var Sequelize = require('sequelize');

var app = express();
app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended: true }) );

app.use(express.static(__dirname + '/../react-client/'));

app.post('/book/import', function (req, res) {
  const dummyData = 
  
[ 
  { 
    isbn: '9787506213943',
    title: 'Catch-22',
    author: 'Joseph Heller',
    cover: 'https://pictures.abebooks.com/isbn/9780684833392-us.jpg',
    yearPublished: 1961,
    content: '',
    audio: '',
    numPages: 323,
    lang: 'English',
    genre: 'Fiction',
    description: 'The novel is set during World War II, from 1942 to 1944. It mainly follows the life of Captain John Yossarian, a U.S. Army Air Forces B-25 bombardier. Most of the events in the book occur while the fictional 256th Squadron is based on the island of Pianosa, in the Mediterranean Sea, west of Italy. The novel looks into the experiences of Yossarian and the other airmen in the camp, who attempt to maintain their sanity while fulfilling their service requirements so that they may return home.'
  },
  {
    isbn: '9787585932847582',
    title: 'Green Eggs and Ham',
    author: 'Dr. Suess',
    cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Green_Eggs_and_Ham.jpg/220px-Green_Eggs_and_Ham.jpg',
    yearPublished: 1960,
    content: '',
    audio: '',
    numPages: 25,
    lang: 'English',
    genre: 'Children',
    description: 'A character named "Sam-I-am" pesters an unnamed character to try a plate of green eggs and ham. The unnamed character refuses, responding, "I do not like green eggs and ham. I do not like them, Sam-I-am." He continues to repeat this as Sam persistently follows him, asking him to try them in eight locations (house, box, car, tree, train, dark, rain, boat) and with three animals (mouse, fox, and goat). Finally, he gives into Sams pestering and tries the green eggs and ham, which he does like after all and happily responds, "I do so like green eggs and ham. Thank you. Thank you, Sam-I-am."'
  },
  {
    isbn: '978750859437295',
    title: 'Romeo and Juliet',
    author: 'William Shakespeare',
    cover: 'https://static.enotes.com/images/covers%2Fromeo-and-juliet.jpg',
    yearPublished: 1788,
    content: '',
    audio: '',
    numPages: 222,
    lang: 'English',
    genre: 'Children',
    description: 'The world premiere was held at the 1990 Venice Film Festival. Former festival director, Guglielmo Biraghi invited the film to be screened out of competition. Romeo.Juliet was later screened at the Flanders Film Festival and Cologne Film Festival. In January 1992, the film was screened in Los Angeles at the Directors Guild Theatre, Writers Guild Theatre, and at Warner Brothers studio.'
  }
]
  res.json(dummyData);
});


app.post('/library', function(req, res) {
  const book = req.body.book;
  addBooktoLibrary(book)
    .then( () => {
      console.log('Book saved!')
    })
    .catch( (err) => {
      console.log('Error:', err);
      console.log('Book already exist in database')
    })

});


const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});