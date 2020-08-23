let Car = require('../models/car.model');
let helper = require('../helper/common.helper.js');
let moment = require('moment');
let booking = require('../models/booking.model');

module.exports = {
  create: (req, res) => {
      Car.create(req.body)
        .then(helper.respondAsJSON(res))
        .catch(helper.handleError(res));
  },
  getCar : (req,res) =>{
      Car.findOne({vehicleNo : req.query.vehicleNo})
      .then(obj=>{
          if(obj.length === 0)
          {
              res.send("car doesnot exist!");
          }
          else
          {
              res.send("Status of Car is "+obj.status);
          }
      })
  },
 delete: (req, res) => {
    Car.find({ vehicleNo: req.query.vehicleNo })
      .then(obj => {
        if (obj.length === 0) {
          res.send("Car doesnot exist!");
        }
        else if(obj.status === "BOOKED")
        {
            res.send("You cannot delete a car as it is booked!");
        }
        else{
          Car.deleteOne({ vehicleNo: req.query.vehicleNo })
            .then(helper.respondAsJSON(res))
            .catch(helper.handleError(res));
        }
      })
  },
  update: (req, res) => {
    Car.find({ vehicleNo: req.body.vehicleNo })
    .then(obj => {
      if (obj.length === 0) {
        res.send("Car doesnot exist!");
      }
      else if(obj.status === "BOOKED")
      {
          res.send("You cannot update a car as it is booked!");
      }
      else
      {
        Car.findOneAndUpdate({ vehicleNo: req.body.vehicleNo }, req.body, { new: true })
        .then(helper.respondAsJSON(res))
        .catch(helper.handleError(res));
      }
    })
  },
  filter : (req,res) =>
  {
    if(req.body.rent)
    {
      Car.findOne({status : "AVAILABLE",rent : req.body.rent})
      .then(helper.respondAsJSON(res));
    }
    else if(req.body.issueDate && req.body.returnDate)
    {
         booking.findOne({issueDate : req.body.issueDate,returnDate : req.body.returnDate})
         .then(obj=>{
           if(obj)
           {
            res.send("No car available")
           }
           else 
           {
            Car.find({status : "AVAILABLE"})
            .then(helper.respondAsJSON(res))
            .catch(helper.handleError(res))
           }
         })
       }
       else
       {
         res.send("Enter either rent or booking dates (Booking dates must include - issueDate and return Date)");
       }
    }
}