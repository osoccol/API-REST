const express = require('express');
const router = express.Router(); // router intégré au framework

// import des middlewares qui seront appelés avant la méthode finale
const logger = require('../middlewares/logger');

// import des controllers
// ils contiennent les méthodes vers lesquelles doivent pointer les requêtes
const farmCtrl = require('../controllers/farm');

// routes disponibles
router.get('/', logger, farmCtrl.getFarm);

module.exports = router;