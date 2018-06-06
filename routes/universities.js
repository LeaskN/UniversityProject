const express = require('express');
const router = express.Router();
const universitiesController = require('../controllers/universities');

router.get('/', universitiesController.index);
router.get('/:id', universitiesController.show);
router.post('/', universitiesController.create);
router.put('/:id', universitiesController.update);
router.delete('/:id', universitiesController.destroy);

module.exports = router;
