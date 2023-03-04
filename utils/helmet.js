const helmet = require('helmet');

const scriptSrcUrls = [
  "'unsafe-inline'",
  "'self'",
  'https://cdn.jsdelivr.net/',
  'https://api.tiles.mapbox.com/',
  'https://api.mapbox.com/',
  'https://kit.fontawesome.com/',
  'https://cdnjs.cloudflare.com/',
  'https://cdn.jsdelivr.net/',
];

const styleSrcUrls = [
  "'unsafe-inline'",
  "'self'",
  'https://kit-free.fontawesome.com/',
  'https://cdn.jsdelivr.net/',
  'https://api.mapbox.com/',
  'https://api.tiles.mapbox.com/',
  'https://fonts.googleapis.com/',
  'https://use.fontawesome.com/',
];

const connectSrcUrls = [
  "'self'",
  'https://api.mapbox.com/',
  'https://a.tiles.mapbox.com/',
  'https://b.tiles.mapbox.com/',
  'https://events.mapbox.com/',
];

const workerSrcUrls = ["'self'", 'blob:'];

const imgSrcUrls = [
  "'self'",
  'blob:',
  'data:',
  'https://res.cloudinary.com/dwhomnn19/',
  'https://images.unsplash.com/',
];

const fontSrcUrls = ["'self'"];

module.exports = (app) => {
  app.use(helmet());
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: [],
        connectSrc: connectSrcUrls,
        scriptSrc: scriptSrcUrls,
        styleSrc: styleSrcUrls,
        workerSrc: workerSrcUrls,
        // objectSrc: [],
        imgSrc: imgSrcUrls,
        fontSrc: fontSrcUrls,
      },
    })
  );
  app.use(helmet.crossOriginEmbedderPolicy({ policy: 'credentialless' }));
};
