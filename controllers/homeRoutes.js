const router = require('express').Router();
const { Product, User, Message } = require('../models');
const withAuth = require('../utils/auth');
const { get } = require('./api');

router.get('/', async (req, res) => {
  try {

    const productData = await Product.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const products = productData.map((product) => product.get({ plain: true }));

    res.render('homepage', { 
      products, 
      loggedIn: req.session.logged_in,
      name: req.session.name
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/', async (req, res) => {

//         res.render('homepage', {
//           loggedIn: req.session.logged_in,
//           name: req.session.name
//         });
// });
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

// Get Products
// router.get('/', async (req, res) => {
//   try {

//     const productData = await Post.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const products = productData.map((product) => product.get({ plain: true }));

//     res.render('homepage', { 
//       products, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


router.get('/productupload', async (req,res) => {
  res.render('productupload', {
    loggedIn: req.session.logged_in,
    name: req.session.name
  })
})

module.exports = router;