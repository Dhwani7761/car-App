'use strict';

let mongoose = require('bluebird').promisifyAll(require('mongoose'));
let Schema = mongoose.Schema;
let autopopulate = require('mongoose-autopopulate');
let paginate = require('mongoose-paginate');

let Booking = new Schema({
    vehicleNo: String,
    customerName : String,
    customerContact : String,
    issueDate : Date,
    returnDate : Date,
    totalrent : Number
},
    {
        timestamps: true
    })

Booking.plugin(autopopulate);
Booking.plugin(paginate);

module.exports = mongoose.model('Booking', Booking);