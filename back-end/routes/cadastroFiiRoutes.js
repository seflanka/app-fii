const router = require('express').Router();
const cadastroFiiController = require('../controllers/cadastroFiiController');

const veryToken = require('../helpers/verify-token');

router.post('/:codigo', veryToken, cadastroFiiController.createFii)
router.get('/getallfii', veryToken, cadastroFiiController.getAllFii)
router.delete('/:id', veryToken, cadastroFiiController.remove)
router.get('/:id', cadastroFiiController.getfii)
router.get('/codigo/fundo', cadastroFiiController.getCodigos)


module.exports = router