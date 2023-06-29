const { Comment } = require('../models');

const commentData = [
    {
        body: "It was a solid season, but at this point, I expect nothing less than a championship.",
        blog_post_id: 1,
        user_id: 3
    },
    {
        body: "This list is blasphemous!",
        blog_post_id: 2,
        user_id: 1
    },
    {
        body: "what about the new Zelda!!",
        blog_post_id: 3,
        user_id: 2
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;