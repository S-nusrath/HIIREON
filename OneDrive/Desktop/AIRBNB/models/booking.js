const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    name: String,

    email: String,

    checkIn: Date,

    checkOut: Date,

    guests: Number,

    listing: {
        type: Schema.Types.ObjectId,
        ref: "Listing",
    },

});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;