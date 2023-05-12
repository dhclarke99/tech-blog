const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');

// GET all BlogPost for homepage
router.get('/', async (req, res) => {
    try {
      const dbBlogData = await BlogPost.findAll({
        include: [
          {
            model: Comment,
            
          },
        ],
      });

    //   res.status(200).json(dbBlogData);
  
      const blogs = dbBlogData.map((blog) =>
        blog.get({ plain: true })
      );
      res.render('homepage', {
        blogs,
        // loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


    module.exports = router;