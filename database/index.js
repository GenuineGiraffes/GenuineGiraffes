const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

// Set up connection
const databaseUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/test';
const sequelize = new Sequelize(databaseUrl);

// Test the connection
sequelize
  .authenticate()
  .then((err) => {
    console.log('Connection is successful');
  })
  .catch((err) => {
    console.log('Unable to connect to database');
  });

// User Model
const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  password: {
    type: Sequelize.STRING
  }
});

// Book Model
const Book = sequelize.define('book', {
  isbn: {
    type: Sequelize.STRING,
    unique: true
  },
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING
  },
  cover: {
    type: Sequelize.STRING
  },
  yearPublished: {
    type: Sequelize.INTEGER
  },
  content: {
    type: Sequelize.TEXT,
    defaultValue: 'Coming Soon...'
  },
  audio: {
    type: Sequelize.STRING
  },
  numPages: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT
  }
});

// Synchronize models and the database
sequelize.sync({
  force: true
});

const addBooktoLibrary = (book) => {
  return Book.create({
    isbn: book.isbn,
    title: book.title,
    author: book.author,
    cover: book.cover,
    yearPublished: book.yearPublished,
    content: book.content,
    audio: book.audio,
    numPages: book.numPages,
    description: book.description
  })
};

const removeBookFromLibrary = (req, res) => {
  Book.destroy({

  });
};

// const getUserLibrary = (req, res) => {
//   Book.findAll({where: {username: req.body.username}})
//     .then(function(books) {
//       res.send(books);
//     });
// };


// const checkIfUserExists = (req, res) => {
//   User.findOne({where: {username: req.body.username}})
//   .then(function(user) {
//     if (!user) {
//       res.send({'userdoesnotexist': 'userdoesnotexist'});
//     } else {
//       if (req.body.password === user.password) {
//         req.session.user = {username: req.body.username, password: req.body.password};
//         res.send(user);
//       } else {
//         res.send({'incorrectpassword': 'incorrectpassword'});
//       }
//     }
//   });
// };

// const createUser = (req, res) => {
//   User.findOne({where: {username: req.body.username}})
//     .then(function(user) {
//       if (!user) {
//         User.create({
//           username: req.body.username,
//           password: req.body.password
//         })
//         .then(function() {
//           req.session.user = {username: req.body.username, password: req.body.password};
//           User.findOne({where: {username: req.body.username}})
//           .then(function(user) {
//             res.send(user);
//           });
//         });
//       } else {
//         res.send({'useralreadyexists': 'useralreadyexists'});
//       }
//     });
// };


module.exports = {
  addBooktoLibrary: addBooktoLibrary,
  removeBookFromLibrary: removeBookFromLibrary,
  // getUserLibrary: getUserLibrary,
  // checkIfUserExists: checkIfUserExists,
  // createUser: createUser,
};