const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Product extends Model {}

const ItemSchema = new Schema({
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            category:{
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            date_added: {
                type: Date,
                default: Date.now
            },
        },
            {
                sequelize,
                timestamps: false,
                freezeTableName: true,
                underscored: true,
                modelName: 'project',
              }
        );

module.exports = Product;