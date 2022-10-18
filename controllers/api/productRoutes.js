const router = require('express').Router();
const { Product } = require('../../models');
const withAuth = require('../../utils/auth');

// User needs to be logged in before they can post a product
router.post('/', withAuth, async (req, res) => {
    // Once logged in they can create a new Product
    console.log(req.session);

    try {
      const newProduct = await Product.create({
        // Image will get added to body
        ...req.body,
        user_id: req.session.user_id,
      });
      // Get of route at homepage /
      res.redirect('/');
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  module.exports = router;