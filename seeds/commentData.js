const { Comment } = require('../models');

const commentData = [
    {
        body: "Really Cool Fruits!",
        blog_post_id: 1,
        user_id: 1
    },
    {
        body: "Really Cool Veggies!",
        blog_post_id: 2,
        user_id: 2
    },
    {
        body: "I also love Sports!",
        blog_post_id: 3,
        user_id: 3
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;