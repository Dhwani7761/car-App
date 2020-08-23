'use strict';

let carRoutes = require('./app/routes/car.routes');
let bookingRoutes = require('./app/routes/booking.routes');

module.exports = (app) => {
  app.use('/CarApp/car', carRoutes);
  app.use('/CarApp/booking',bookingRoutes)
};