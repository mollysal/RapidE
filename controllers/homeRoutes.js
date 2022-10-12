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
    name: req.session.user_id
  })
})

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;