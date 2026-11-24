const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampSchema = new Schema({
	name: {
		type: String,
		required: true,
		// maxlength: 20,
	},
	price: {
		type: String,
		required: true,
		// min: [0, 'Price must be positive'],
	},
	description: {
		type: String,
		// required: true,
		// maxlength: 20,
	},
	location: {
		type: String,
		required: true,
		// lowercase: true,
	},
	imgSm: {
		type: String,
		// required: true,
		// lowercase: true,
	},
	imgLg: {
		type: String,
		// required: true,
		// lowercase: true,
	},
});

module.exports = mongoose.model('Campground', CampSchema);
