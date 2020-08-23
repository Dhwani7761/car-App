'use strict';

let mongoose = require('bluebird').promisifyAll(require('mongoose'));
let Schema = mongoose.Schema;
let autopopulate = require('mongoose-autopopulate');
let paginate = require('mongoose-paginate');

let Car = new Schema({
    vehicleNo: String,
    model: String,
    seatingCapacity : Number,
    rent : Number,
    status:
    {
        type: String,
        enum: ['AVAILABLE','BOOKED'],
        default: 'AVAILABLE'
    }
},
    {
        timestamps: true
    })

Car.plugin(autopopulate);
Car.plugin(paginate);

module.exports = mongoose.model('Car', Car);