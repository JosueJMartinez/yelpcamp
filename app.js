const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost:27017/yelpCampApp')
	.then(() => {
		console.log('connection in mongodb open');
	})
	.catch(err => {
		console.log('error failed on connection');
		console.log(err);
	});

const app = express();
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
// serve bootstrap files from node_modules
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
// set up body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up ejs views
app.set('view engine', 'ejs');
// set the views directory to the views folder
app.set('views', path.join(__dirname, '/views'));

const Campground = require('./models/campground');

app.get('/', (req, res) => {
	res.render('./index', { page: 'YelpCamp' });
});

app.get('/campgrounds', async (req, res) => {
	let campgrounds = await Campground.find({});
	res.render('./campgrounds/', { page: 'Campgrounds', campgrounds });
});

app.get('/campgrounds/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const campground = await Campground.findById(id);
		if (!campground) return res.redirect('/campgrounds');
		res.render('./campgrounds/campground', { page: `Campground ${campground.name}`, campground });
	} catch (e) {
		res.redirect('/campgrounds');
	}
});

app.listen(3000, () => {
	console.log('app  is  listening on port 3000');
});
