const router = require('express').Router();
const dbCentralContoller = require('../controllers/dbCentralContoller');



router.post('/cadastrofii', dbCentralContoller.updateAllFii);
router.get('/allcadastrofii', dbCentralContoller.getAllFii)
router.get('/:codigo', dbCentralContoller.getFiiByName)


module.exports = router