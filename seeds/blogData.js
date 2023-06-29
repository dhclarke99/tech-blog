const { BlogPost } = require('../models');

const blogData = [
    {
        title: "Warriors 2023 Season",
        body: "Tough loss on Friday, needed more from Klay. I wonder what this offseason will bring...",
        user_id: 1
    },
    {
        title: "Best Fruits of 2023",
        body: "Fresh mangos still top the list, pineapple slaps as well. Strawberries are good, but blueberries are overrated!",
        user_id: 2
    },
    {
        title: "I love videogames...",
        body: "Let's talk about the new nba2k23 game...so good. New Zelda is awesome too. ",
        user_id: 3
    }
];

const seedBlog = () => BlogPost.bulkCreate(blogData);

module.exports = seedBlog;