const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

// *Checking get comments as a test NOT for users to do**
router.get('/', async (req, res) => {
    try {
      const commentData = await Comment.findAll({
        include: [
          {
            model: User,
            
            
          },
        ],
      });
  
    //   req.session.save(() => {
    //     req.session.user_id = userData.id;
    //     req.session.logged_in = true;
  
        res.status(200).json(commentData);
    //   });
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.post('/', withAuth, async (req, res) => {
    try {
      
      const commentData = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(commentData);
      res.render('/dashboard')
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;