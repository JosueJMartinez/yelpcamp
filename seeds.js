const mongoose = require('mongoose');

const Campground = require('./models/campground');

mongoose
	.connect('mongodb://localhost:27017/yelpCampApp')
	.then(() => {
		console.log('connection in mongodb open');
	})
	.catch(err => {
		console.log('error failed on connection');
		console.log(err);
	});

const seedCampgrounds = [
	{
		name: 'Pine Ridge Camp',
		price: 25,
		description: 'Shaded sites under tall pines with fire rings, picnic tables, and a short walk to the lake.',
		location: 'Lake Tahoe, California',
	},
	{
		name: 'Red Rock Retreat',
		price: 30,
		description: 'Desert camping with sweeping canyon views, perfect for stargazing and sunrise hikes.',
		location: 'Moab, Utah',
	},
	{
		name: 'Misty Hollow',
		price: 18,
		description: 'Quiet creekside tent sites surrounded by hardwood forest and morning fog.',
		location: 'Asheville, North Carolina',
	},
	{
		name: 'Sunset Bluff',
		price: 35,
		description: 'Oceanfront bluffs with fire pits, hot showers, and spectacular evening views.',
		location: 'Big Sur, California',
	},
	{
		name: 'Eagle Peak Basecamp',
		price: 22,
		description: 'High-elevation sites near trailheads for several popular summit routes.',
		location: 'Estes Park, Colorado',
	},
	{
		name: 'Cedar Lake Campground',
		price: 20,
		description: 'Family-friendly lakeside camping with a swimming beach, canoe rentals, and playground.',
		location: 'Minocqua, Wisconsin',
	},
	{
		name: 'Shenandoah Ridge',
		price: 28,
		description: 'Ridgetop sites with access to the Appalachian Trail and sweeping valley overlooks.',
		location: 'Luray, Virginia',
	},
	{
		name: 'Redwood Haven',
		price: 32,
		description: 'Camp among towering redwoods with ranger programs and well-kept bathhouses.',
		location: 'Crescent City, California',
	},
	{
		name: 'Bayou Breeze',
		price: 15,
		description: 'Budget-friendly waterfront sites ideal for kayaking and fishing.',
		location: 'Lafayette, Louisiana',
	},
	{
		name: 'Glacier View Camp',
		price: 40,
		description: 'Premium sites with glacier views, bear lockers, and guided nature walks.',
		location: 'West Glacier, Montana',
	},
	{
		name: 'Sandy Shores',
		price: 27,
		description: 'Beachside camping with dunes, tide pools, and nightly bonfires.',
		location: 'Outer Banks, North Carolina',
	},
	{
		name: 'Aspen Meadows',
		price: 24,
		description: 'Open meadow sites surrounded by aspen groves, great for wildflowers in summer and color in fall.',
		location: 'Telluride, Colorado',
	},
];

async function seed() {
	try {
		const deleted = await Campground.deleteMany({});
		console.log('deleted prods');
		console.log(deleted);
		const createdProds = await Campground.insertMany(seedCampgrounds);
		console.log('created prods');
		console.log(createdProds);
	} catch (e) {
		console.log('failed');
		console.log(err);
	}
}

seed();
