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

// Get Products
router.get('/', async (req, res) => {
  try {

    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const product = productData.map((product) => product.get({ plain: true }));

    res.render('homepage', { 
      products, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;