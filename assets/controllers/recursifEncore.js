//require all images
const imagesContext = require.context('../images', true, /\.(png|jpg|jpeg|gif|ico|svg|webp)$/);

imagesContext.keys().forEach(imagesContext);
