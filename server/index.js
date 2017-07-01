var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var rp = require('request-promise');
var axios = require('axios');
var database = require('../database/index.js');
var addBooktoLibrary = require('../database/index.js').addBooktoLibrary;
// var removeBookFromLibrary = require('../database/index.js').removeBookFromLibrary;
var Sequelize = require('sequelize');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../react-client/'));

app.post('/book/import', function (req, res) {
  res.status(200);

  // Options for Open Library API Call
  var openLibraryOptions = {
    method: 'GET',
    url: 'http://openlibrary.org/search.json',
    qs: {
      q: req.body.q,
      limit: 25
    }
  };

  // Open Library API Call
  rp(openLibraryOptions)
    .then(function (data) {
      // parse returned data, grab only data.doc array
      var titles = JSON.parse(data);
      titles = titles.docs;
      return titles;
    })
    .then(function (titles) {
      var titleList = [];
      titles.map((title) => {
        // Librivox API Call Options
        var query = '%5E' + title.title_suggest.split(' ').join('%20');
        var librivoxOptions = {
          method: 'GET',
          url: 'https://librivox.org/api/feed/audiobooks/title/' + query + '?format=json',
        };

        // Librivox API call
        rp(librivoxOptions)
          .then(function (data) {
            if (data !== "{\"error\":\"Audiobooks could not be found\"}") {
              // let booksData = JSON.parse(data).books;
              // booksData.map((bookData) => {
              //   console.log(isbn);
              //   bookData.isbn = isbn;
              //   bookData.cover = title
              // });
              // console.log(booksData);
              res.send(data);
            } else {
              res.send([]);
            }
          })
      });
      //console.log("TITLELIST OUTSIDE ",titelist);
    });
});


app.post('/library', function (req, res) {
  const book = req.body.book;
  console.log('Saving ' + book.title + ' to library.')
  addBooktoLibrary(book)
    .then(() => {
      console.log('Book saved!')
      res.send();
    })
    .catch((err) => {
      console.log('Error:', err);
      console.log('Book already exist in database');
      res.send();
    })
});

app.get('/library', function (req, res) {
  console.log('Inside Get...Grabbing your books...');
  getUserLibrary()
    .then( (books) => {
      console.log('Here are the books I found!', books);
      res.json(books);
    })
    .catch( (err) => {
      console.log('Error: ', err);
      res.send();
    })
});

// app.delete('/library', function(req, res) {
//   console.log('Inside DELETE...deleting ' + book.title + 'from your library');
//   const book = req.body.book;
//   removeBookFromLibrary(book)
// })


const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});