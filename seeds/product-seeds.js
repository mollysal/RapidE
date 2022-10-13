const { Product } = require('../models');

const productData = [
    {
        name: "Vintage T-Shirt for Sale",
        description: "90's Rock Band T-Shirt",
        date_created: 10/12/22,
        initial_price: 15.00,
        user_id: 1
    },
    {
        name: "Air Jordans for Sale",
        description: "Brand new Jordans Fire Red 4s",
        date_created: 10/10/22,
        initial_price: 250.00,
        user_id: 2

    },
    {
        name: "Vintage denim jacket",
        description: "Levis Jacket ",
        date_created: 10/12/22,
        initial_price: 45.00,
        user_id: 3

    }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

