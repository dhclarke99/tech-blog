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
    console.log(dbBlogData)
  
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
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
  
    res.render('signUp');
  });

  router.get('/dashboard', async (req, res) => {
   try { if (req.session.logged_in) {
    const dbBlogData = await BlogPost.findByPk(req.session.user_id, {
      include: [
        {
          model: Comment,
          
        },
      ],
    });
    if (!dbBlogData) {
      return res.render('dashBoard', {
        blogs: [],
      });
    }
    // console.log(res.status(200).json(dbBlogData));


    if (dbBlogData) {
      if (Array.isArray(dbBlogData)) {
        const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));
        res.render('dashBoard', {
          blogs,
          // loggedIn: req.session.loggedIn,
        });
      } else {
        res.render('dashBoard', {
          blogs: [],
          // loggedIn: req.session.loggedIn,
        });
      }
      
  }
    
   } else res.render('login')
   } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  
  });


    module.exports = router;