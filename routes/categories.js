const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController');

router.get('/', CategoryController.getAll);
router.post('/', CategoryController.create);
router.put('/:id', CategoryController.update);
router.delete('/:id', CategoryController.delete);
module.exports = router;