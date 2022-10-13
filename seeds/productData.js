const { Product } = require('../models');

 
 
 const productData = [
    {
        name: 'Vintage T-Shirt for Sale',
        description: 'Rock Band T-Shirt',
        date_created: 2022-10-11,
        initial_price: 15.00,
        user_id: 1, 
    },
    {
        name: 'Air Jordans for Sale',
        description: 'Brand new Jordans Fire Red 4s',
        date_created: 2021-09-13,
        initial_price: 250.00,
        user_id: 2,

    },
    {
        name: 'Vintage denim jacket',
        description: 'Levis Jacket',
       date_created: 2008-11-11,
        initial_price: 45.00,
        user_id: 3,

    },
];


const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

