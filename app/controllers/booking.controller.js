let Booking = require('../models/booking.model');
let helper = require('../helper/common.helper.js');
let moment = require('moment');
let Car = require('../models/car.model');

module.exports = {
  create: (req, res) => {
    let vehicleNumber = req.body.vehicleNo;
    var startday = moment(req.body.issueDate).format("YYYY-MM-DD");
    var endDay = moment(req.body.returnDate).format("YYYY-MM-DD");
    console.log(startday);
    console.log(endDay);
    var x = moment(startday);
    var y = moment(endDay);
    var totaldays = y.diff(x, 'days');
    console.log(totaldays);
    Car.findOne({ vehicleNo: vehicleNumber })
      .then(ob1 => {
        var total = ob1.rent * totaldays;
        Car.findOne({ vehicleNo: vehicleNumber })
          .then(obj => {
            if (obj.status === "BOOKED") {
              res.send("Car is already booked!")
            }
            else {
              req.body.totalrent = total;
              Car.update({ vehicleNo: vehicleNumber }, { status: "BOOKED" })
                .then(
                  Booking.create(req.body)
                    .then(helper.respondAsJSON(res))
                    .catch(helper.handleError(res))
                )
                .catch(helper.handleError(res));

            }
          })
      })
  },
}