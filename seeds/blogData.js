const { BlogPost } = require('../models');

const blogData = [
    {
        title: "Blogpost 1",
        body: "Here is my blogpost. This is my opinion on fruits",
        user_id: 1
    },
    {
        title: "Blogpost 2",
        body: "Here is the next blogpost. This is my opinion on vegetables",
        user_id: 2
    },
    {
        title: "Blogpost 3",
        body: "Here is the final blogpost. I love sports",
        user_id: 3
    }
];

const seedBlog = () => BlogPost.bulkCreate(blogData);

module.exports = seedBlog;