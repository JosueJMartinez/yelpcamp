const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose
	.connect('mongodb://localhost:27017/yelpCampApp')
	.then(() => {
		console.log('connection in mongodb open');
	})
	.catch(err => {
		console.log('error failed on connection');
		console.log(err);
	});

async function seed() {
	try {
		const deleted = await Campground.deleteMany({});
		console.log('deleted prods');
		console.log(deleted);
		let seedData = [];
		let dataNode = {};
		let rand1, rand2, location;
		for (let i = 0; i < 1000; i++) {
			rand1 = Math.floor(Math.random() * 30);
			rand2 = Math.floor(Math.random() * 30);
			location = faker.location.postalAddress().split(/\r\n|\r|\n/);
			dataNode = {
				name: `${descriptors[rand1]} ${places[rand2]}`,
				price: faker.commerce.price(),
				description: faker.lorem.sentences({ min: 2, max: 6 }),
				location: `${location[2]}, ${location[3]}`,
			};

			seedData.push(dataNode);
		}
		const createdProds = await Campground.insertMany(seedData);
		console.log('created prods');
		// console.log(createdProds);
	} catch (e) {
		console.log('failed');
		console.log(e);
	}
}

seed();
