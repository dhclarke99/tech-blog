const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');
const withAuth = require('../utils/auth');


// GET all BlogPost for homepage
router.get('/', async (req, res) => {
    try {
      const dbBlogData = await BlogPost.findAll({
        include: [
          {
            model: Comment,
            model: User
            
          },
        ],
      });

    //   res.status(200).json(dbBlogData);
    console.log(dbBlogData)
  
      const blogs = dbBlogData.map((blog) =>
        blog.get({ plain: true })
      );
      // res.json(dbBlogData)
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
    try {
      if (req.session.logged_in) {
        const blogData = await BlogPost.findAll({
          where: {
            user_id: req.session.user_id,
          },
          include: [
            {
              model: Comment,
            },
            {
              model: User,
            }
          ],
        });
       
       
       
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
  
        res.render('dashBoard', {
          // user,
          blogs,
          User
        });
      } else {
        res.redirect('/login');
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // GET  BlogPost by ID for homepage
router.get('/blog/:id', withAuth, async (req, res) => {
  try {
    const dbBlogData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include: [User],
        },
        User,
      ],
    });

  //   res.status(200).json(dbBlogData);
  

  const blog = dbBlogData.get({ plain: true });
    
    // res.json(dbBlogData)
    res.render('blogPost', {
      blog,
      Comment,
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


    module.exports = router;