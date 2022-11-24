const express = require('express');
const router = express.Router(); // router intégré au framework

// import des middlewares qui seront appelés avant la méthode finale
const logger = require('../middlewares/logger');
const auth = require('../middlewares/auth');

// import des controllers
// ils contiennent les méthodes vers lesquelles doivent pointer les requêtes
const objectCtrl = require('../controllers/object');

// routes CRUD disponibles
router.get('/', [auth, logger], objectCtrl.getObjectList);
router.get('/:id', [logger, auth], objectCtrl.getObject);
router.post('/', [logger], objectCtrl.createObject);
router.put('/:id', [], objectCtrl.updateObject);
router.delete('/:id', logger, objectCtrl.deleteObject);

module.exports = router;