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

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashBoard');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
  
    res.render('signUp');
  });

  router.get('/dashboard', (req, res) => {
   try { if (req.session.logged_in) {
    res.render('dashBoard');
   } else res.render('login')
   } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  
  });


    module.exports = router;