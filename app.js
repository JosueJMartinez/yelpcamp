const express = require('express');
const path = require('path');
const { parsed } = require('dotenv').config();
const mongoose = require('mongoose');
const { states } = require('./seeds/seedHelpers');

mongoose
	.connect(parsed.MONGODB_URI)
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

app.get('/campgrounds/create', async (req, res) => {
	res.render('./campgrounds/create', { page: 'Campground Create', states });
});

app.post('/campgrounds', async (req, res) => {
	const { name, price, description, city, state } = req.body;
	try {
		const checkDup = await Campground.findOne({ name });
		// console.log(checkDup);
		if (!checkDup) {
			const newCampground = await Campground.create({ name, price, description, location: `${city}, ${state}` });
			// console.log(newCampground);
			res.redirect(`./campgrounds/${newCampground.id}`);
		}
	} catch (e) {
		console.log(e);
		return res.redirect('/campgrounds');
	}
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

app.get('/campgrounds/:id/edit', async (req, res) => {
	const { id } = req.params;
	try {
		let campground = await Campground.findById(id);
		if (!campground) return res.redirect(`/campgrounds`);
		const [city, state] = campground.location.split(', ');
		campground.city = city;
		campground.state = state;
		console.log(campground);
		res.render(`./campgrounds/edit`, { page: `Edit ${campground.name}`, city, state, campground, states });
	} catch (e) {
		console.log(e);
		res.redirect('/campgrounds');
	}
});

app.patch('/campgrounds/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const campground = await Campground.findByIdAndUpdate(id, { ...req.body, location: `${req.body.city}, ${req.body.state}` });
		if (!campground) return res.redirect(`/campgrounds`);
		res.redirect(`/campgrounds/${id}`);
	} catch (e) {
		console.log('failed');
		console.log(e);
		res.redirect(`/campgrounds`);
	}
});

app.delete('/campgrounds/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const cg = await Campground.findByIdAndDelete(id);
		console.log(cg);
		if (!cg) return res.redirect('/campgrounds');
		else {
			Campground.findByIdAndDelete;
			res.redirect('/campgrounds');
		}
	} catch (e) {
		res.redirect('/campgrounds');
	}
});

app.listen(3000, () => {
	console.log('app  is  listening on port 3000');
});
