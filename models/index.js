const BlogPost = require('./blogpost');
const Comment = require('./comment');
const User = require('./user');

User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// A reader can have many books
BlogPost.hasMany(Comment, {
  foreignKey: 'blog_post_id',
  onDelete: 'CASCADE',
});

// A book belongs to a single reader
BlogPost.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(BlogPost, {
    foreignKey: 'blog_post_id',
  });

Comment.belongsTo(User, {
    foreignKey: 'user_id',
  });


module.exports = { BlogPost, User, Comment };
