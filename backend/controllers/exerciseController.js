const Exercise = require('../models/exercise.model');

module.exports = {
	// Get all entries
	get_allexercises : async (req, res) => {
		return res.json(await Exercise.find().catch(err => {
			res.status(400).json('Error: ' + err);
		}));
	},

	// Add one record
	create_exercise : async (req, res) => {
		const username = req.body.username;
		const description = req.body.description;
		const duration = Number(req.body.duration);
		const date = Date.parse(req.body.date);
	
		const newExercise = new Exercise({
			username,
			description,
			duration,
			date,
		});

		let response = await newExercise.save().catch(err => {
			res.status(400).json('Error: ' + err);
		});

		return res.json('Exercise added!');
	},

	// Get one record
	get_exercise : async (req, res) => {
		let exercise = await Exercise.findById(req.params.id).catch(err => {
			res.status(400).json('Error: ' + err);
		});

		return res.json(exercise);
	},

	// Update one record
	update_exercise : async (req, res) => {
		// Get specified exercise by _id
		let exercise = await Exercise.findById(req.params.id).catch(err => {
			res.status(400).json('Error: ' + err);
		});
		// Update record
		exercise.username = req.body.username;
		exercise.description = req.body.description;
		exercise.duration = Number(req.body.duration);
		exercise.date = Date.parse(req.body.date);
		await exercise.save();
		return res.json('Exercise updated!');
	},

	// Delete one record
	delete_exercise : async (req, res) => {
		// Delete item by _id
		let response = await Exercise.findByIdAndDelete(req.params.id).catch(err => {
			res.status(400).json('Error: ' + err);
		});
		return res.json('Execise deleted!');
	},
}
