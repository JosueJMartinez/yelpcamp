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
	{
		name: 'Canyon Rim Campground',
		price: 26,
		description: 'Sites perched along the canyon edge with panoramic sunrise views and nearby rim trails.',
		location: 'Page, Arizona',
	},
	{
		name: 'Whispering Pines',
		price: 19,
		description: 'Secluded wooded sites with soft needle floors and a peaceful, quiet atmosphere.',
		location: 'Bend, Oregon',
	},
	{
		name: 'Lakeshore Landing',
		price: 29,
		description: 'Waterfront sites with private docks, a boat ramp, and excellent bass fishing.',
		location: 'Lake George, New York',
	},
	{
		name: 'Old Faithful Basecamp',
		price: 38,
		description: 'Convenient sites close to geyser basins, boardwalks, and wildlife viewing areas.',
		location: 'West Yellowstone, Montana',
	},
	{
		name: 'Smoky Mountain Hideaway',
		price: 23,
		description: 'Cozy sites along a rushing mountain stream, minutes from hiking trails and waterfalls.',
		location: 'Gatlinburg, Tennessee',
	},
	{
		name: 'Joshua Tree Oasis',
		price: 21,
		description: 'Desert sites among boulders and Joshua trees with incredible dark skies.',
		location: 'Twentynine Palms, California',
	},
	{
		name: 'Maple Grove',
		price: 17,
		description: 'Classic New England camping beneath maples, with a swimming pond and camp store.',
		location: 'Stowe, Vermont',
	},
	{
		name: 'Badlands Bivouac',
		price: 16,
		description: 'Primitive sites among striking rock formations, ideal for photographers and sunset chasers.',
		location: 'Interior, South Dakota',
	},
	{
		name: 'Crystal Springs Camp',
		price: 31,
		description: 'Spring-fed swimming holes, shaded sites, and a welcoming family atmosphere.',
		location: 'Austin, Texas',
	},
	{
		name: 'Teton Vista Campground',
		price: 42,
		description: 'Front-row views of the Teton range, with ranger talks and easy access to trails.',
		location: 'Jackson, Wyoming',
	},
	{
		name: 'Coastal Cedar Camp',
		price: 34,
		description: 'Forested sites just steps from the tide line, with clam digging and beachcombing nearby.',
		location: 'Cannon Beach, Oregon',
	},
	{
		name: 'Prairie Wind',
		price: 14,
		description: 'Wide open sites with big sky views, a good fit for RVs and tent campers alike.',
		location: 'Medora, North Dakota',
	},
	{
		name: 'Blue Ridge Overlook',
		price: 27,
		description: 'Hilltop camping with fire rings and sweeping views of layered mountain ridges.',
		location: 'Boone, North Carolina',
	},
	{
		name: 'Alpine Lake Retreat',
		price: 33,
		description: 'Cold, clear alpine lake with sites tucked among granite boulders and wildflower meadows.',
		location: 'Mammoth Lakes, California',
	},
	{
		name: 'Rio Grande Riverside',
		price: 22,
		description: 'Shaded riverbank sites ideal for tubing, birdwatching, and relaxed evenings.',
		location: 'Big Bend, Texas',
	},
	{
		name: 'Acadia Pines',
		price: 36,
		description: 'Coastal Maine camping with rocky shores, tidal pools, and short drives to scenic carriage roads.',
		location: 'Bar Harbor, Maine',
	},
	{
		name: 'Sawtooth Hollow',
		price: 25,
		description: 'Mountain valley sites near hot springs, with crisp nights and abundant stars.',
		location: 'Stanley, Idaho',
	},
	{
		name: 'Everglades Edge',
		price: 20,
		description: 'Elevated sites at the edge of the wetlands, perfect for canoeing and spotting wildlife.',
		location: 'Homestead, Florida',
	},
	{
		name: 'Hidden Falls Campground',
		price: 24,
		description: 'A short walk from a spectacular waterfall, with wooded sites and clean facilities.',
		location: 'Hocking Hills, Ohio',
	},
	{
		name: 'Ozark Bluff Camp',
		price: 18,
		description: 'Limestone bluffs, float trips on the river, and affordable, spacious sites.',
		location: 'Eminence, Missouri',
	},
	{
		name: 'Sierra Skies',
		price: 30,
		description: 'High-country camping with granite domes, clear nights, and nearby backcountry access.',
		location: 'Bishop, California',
	},
	{
		name: 'Great Lakes Dunes',
		price: 28,
		description: 'Sandy trails lead from wooded sites to towering dunes and a sweeping freshwater beach.',
		location: 'Traverse City, Michigan',
	},
	{
		name: 'Sedona Sunrise',
		price: 37,
		description: 'Red rock vistas, vortex hikes, and cozy sites with excellent sunrise views.',
		location: 'Sedona, Arizona',
	},
	{
		name: 'Cascade Creek',
		price: 26,
		description: 'Lush rainforest sites beside a bubbling creek, with mossy trails right from camp.',
		location: 'North Bend, Washington',
	},
	{
		name: 'Mesa Verde Mesa',
		price: 29,
		description: 'High mesa sites close to ancient cliff dwellings, with guided tours and cultural programs.',
		location: 'Cortez, Colorado',
	},
	{
		name: 'Gulf Breeze Campground',
		price: 32,
		description: 'Warm-water camping on white sand beaches, with fishing piers and sunset views.',
		location: 'Gulf Shores, Alabama',
	},
	{
		name: 'Rocky Ledge',
		price: 19,
		description: 'Rugged sites on granite ledges above a quiet lake, popular with climbers and anglers.',
		location: 'Acadia, Maine',
	},
	{
		name: 'Starlight Meadow',
		price: 23,
		description: 'Remote meadow camping far from city lights, built for stargazing and quiet mornings.',
		location: 'Cherry Springs, Pennsylvania',
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
