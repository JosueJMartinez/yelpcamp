const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampSchema = new Schema({
	name: {
		type: String,
		required: true,
		// maxlength: 20,
	},
	price: {
		type: Number,
		required: true,
		min: [0, 'Price must be positive'],
	},
	description: {
		type: String,
		required: true,
		// maxlength: 20,
	},
	location: {
		type: String,
		lowercase: true,
	},
});

module.exports = mongoose.model('Campground', CampSchema);
