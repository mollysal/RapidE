const router = require('express').Router();
const { Product, User, Message } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {

        res.render('homepage', {
          loggedIn: req.session.logged_in,
          name: req.session.name
        });
});
/* router.get('/', async (req, res) => {
  res.render('homepage')
}) */
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

module.exports = router;