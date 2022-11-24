const express = require('express');
const router = express.Router(); // router intégré au framework

// import des middlewares qui seront appelés avant la méthode finale
const logger = require('../middlewares/logger');
const auth = require('../middlewares/auth');

// import des controllers
// ils contiennent les méthodes vers lesquelles doivent pointer les requêtes
const userCtrl = require('../controllers/user');

// routes CRUD disponibles
router.get('/', [auth, logger], userCtrl.getUserList);
router.get('/:id', [auth, logger], userCtrl.getUser);
router.post('/signup', [logger], userCtrl.createUser);
router.post('/login', [logger], userCtrl.login);
router.put('/:id', [auth, logger], userCtrl.updateUser);
router.delete('/:id', [auth, logger], userCtrl.deleteUser);

module.exports = router;