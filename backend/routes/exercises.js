const router = require('express').Router();
let Exercise = require('../models/exercise.model');

const exerciseController = require('../controllers/exerciseController');

router.get('/', async (req, res) => {
	return exerciseController.get_allexercises(req, res);
});

router.post('/add', async (req, res) => {
	return exerciseController.create_exercise(req, res);
});

// GET : http://server:port/exercises/:id
router.get('/:id', async (req, res) => {
	return exerciseController.get_exercise(req, res);
});

// DELETE : http://server:port/exercises/:id
router.delete('/:id', async (req, res) => {
	return exerciseController.delete_exercise(req, res);
});

// PUT : http://server:port/exercises/update/:id
router.put('/:id', async (req, res) => {
	return await exerciseController.update_exercise(req, res);
});


module.exports = router;
