const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const sample = (array) => array[(Math.random() * array.length) >> 0];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 300; i++) {
    const { city, state, latitude, longitude } = sample(cities);
    const price = (Math.random() * 20 + 10) >> 0;

    const camp = new Campground({
      author: '63e41b0d7daba53692fd2748',
      location: `${city}, ${state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae veritatis quas blanditiis expedita non repudiandae repellendus saepe ullam iste dignissimos, ex ipsum suscipit! Minima veniam cupiditate dolores velit, nobis temporibus.',
      price: price,
      geometry: {
        coordinates: [longitude, latitude],
        type: 'Point',
      },
      images: [
        {
          url: 'https://res.cloudinary.com/dwhomnn19/image/upload/v1677830976/YelpCamp/uj94c54w4rzz8yvir3pq.jpg',
          filename: 'YelpCamp/sfwmejzi40jiykanl6px',
        },
        {
          url: 'https://res.cloudinary.com/dwhomnn19/image/upload/v1677433565/YelpCamp/cmym02xuwm7tzxnrllad.jpg',
          filename: 'YelpCamp/cmym02xuwm7tzxnrllad',
        },
      ],
    });

    await camp.save();
  }
};

seedDB().then(() => {
  db.close();
});
