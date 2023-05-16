const router = require('express').Router();
const { User } = require('../../models');

// *Checking get User as a test NOT for users to do**
router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll();
  
    //   req.session.save(() => {
    //     req.session.user_id = userData.id;
    //     req.session.logged_in = true;
  
        res.status(200).json(userData);
    //   });
    } catch (err) {
      res.status(400).json(err);
    }
  });


// *Creating a new username/pw
router.post('/', async (req, res) => {
  try { 
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
      res.render('dashBoard');
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log(userData);
    console.log(req.body.password);

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email , please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    console.log(validPassword)

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect  password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

// *Logging out
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
    res.render('homePage')
  } else {
    res.status(404).end();
  }
});

module.exports = router;