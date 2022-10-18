const router = require('express').Router();
const { Product } = require('../../models');
const withAuth = require('../../utils/auth');

// User needs to be logged in before they can post a product
router.post('/', withAuth, async (req, res) => {
    // Once logged in they can create a new Product
    try {
      const newProduct = await Product.create({
        // Image will get added to body
        ...req.body,
        user_id: req.session.user_id,
      });
      // Get of route at homepage /
      res.redirect('/');
      // const products = productData.map((product) => product.get({ plain: true }));
      // res.status(200).json(newProduct);
      // res.render('homepage', { 
      //   products
      // });
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const productData = await Product.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!productData) {
        res.status(404).json({ message: 'No product found with this id!' });
        return;
      }
  
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;

//   exports.create = (req, res) => {
//     // Validate request
//     if (!req.body.title) {
//       res.status(400).send({
//         message: "Content can not be empty!"
//       });
//       return;
//     }
  
//     // Create a Tutorial
//     const tutorial = {
//       title: req.body.title,
//       description: req.body.description,
//       published: req.body.published ? req.body.published : false
//     };
  
//     // Save Tutorial in the database
//     Tutorial.create(tutorial)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while creating the Tutorial."
//         });
//       });
//   };