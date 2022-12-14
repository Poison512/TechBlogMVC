// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/config');

// Initialize Product model (table) by extending off Sequelize's Model class
class Post extends Model {}

// set up fields and rules for Product model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      
      references: {
        model: 'user',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
