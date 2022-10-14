const router = require('express').Router();
const { Product, User, Message } = require('../models');
const withAuth = require('../utils/auth');
const { get } = require('./api');

router.get('/', withAuth, async (req, res) => {

        res.render('homepage', {
          loggedIn: req.session.logged_in,
          name: req.session.name
        });
});
/* router.get('/', async (req, res) => {
  res.render('homepage')
}) */

// When you get by ID, it needs to Render an indivdual Product Page (It's own seperate view - We don't need a partial (re-usable component))

router.get('/messages' , withAuth, async (req, res) => {
  res.render('messages',  {
    loggedIn: req.session.logged_in,
    name: req.session.name
  })
})

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get('/productupload', async (req,res) => {
  res.render('productupload')
})

module.exports = router;