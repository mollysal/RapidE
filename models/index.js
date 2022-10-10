const User = require('./User');
const Product = require('./Product');
const Message = require('./Message');

User.hasMany(Product, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Message, {
    foreignKey: 'user_id',
});

Product.belongsTo(User, {
  foreignKey: 'user_id'
});

Message.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Product, Message };
