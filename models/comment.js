const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    blog_post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'blogPost',
        key: 'id',
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      get() {
        const date = this.getDataValue('createdAt');
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      }
    }
    
  },
  {
    
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
