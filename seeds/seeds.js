const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const { places, descriptors } = require('./seedHelpers');
const { parsed } = require('dotenv').config();
const Campground = require('../models/campground');

mongoose
	.connect(parsed.MONGODB_URI)
	.then(() => {
		console.log('connection in mongodb open');
	})
	.catch(err => {
		console.log('error failed on connection');
		console.log(err);
	});

const sample = array => array[Math.floor(Math.random() * array.length)];

async function seed() {
	try {
		const deleted = await Campground.deleteMany({});
		console.log('deleted prods');
		console.log(deleted);
		let seedData = [];
		let dataNode = {};
		let location;
		let imgSm;
		let imgLg;
		for (let i = 0; i < 1000; i++) {
			rand1 = Math.floor(Math.random() * 30);
			rand2 = Math.floor(Math.random() * 30);
			location = faker.location.postalAddress().split(/\r\n|\r|\n/);
			imgSm = faker.image.urlPicsumPhotos({ width: 300, height: 200, grayscale: false, blur: 0 });
			imgLg = imgSm.replace('200', '600');
			imgLg = imgLg.replace('300', '900');
			dataNode = {
				name: `${sample(descriptors)} ${sample(places)}`,
				price: faker.commerce.price(),
				description: faker.lorem.sentences({ min: 2, max: 6 }),
				location: `${location[location.length - 3]}, ${location[location.length - 2]}`,
				imgSm,
				imgLg,
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
