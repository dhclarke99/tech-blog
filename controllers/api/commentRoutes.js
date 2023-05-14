const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// *Checking get comments as a test NOT for users to do**
router.get('/', async (req, res) => {
    try {
      const commentData = await Comment.findAll();
  
    //   req.session.save(() => {
    //     req.session.user_id = userData.id;
    //     req.session.logged_in = true;
  
        res.status(200).json(commentData);
    //   });
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;