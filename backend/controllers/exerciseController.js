const Exercise = require('../models/exercise.model');

module.exports = {
	update_exercise : async (req, res) => {
	// Get specified exercise by _id
		let exercise = await Exercise.findById(req.params.id).catch(err => {
			res.send(err);
			console.error(err);
		});
		// Update record
		exercise.username = req.body.username;
		exercise.description = req.body.description;
		exercise.duration = Number(req.body.duration);
		exercise.date = Date.parse(req.body.date);
		await exercise.save();
		return res.json('Exercise updated!');
	}
}