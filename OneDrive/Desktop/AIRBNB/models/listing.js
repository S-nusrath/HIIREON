// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;


// const listingSchema = new Schema({
//     title:{
//         type:String,
//         required:true,
//     },
//     description:{
//         type:String,
//     },
//     image:{
//         type:String,
//         set : (v) => v ==="" ?"https://in.images.search.yahoo.com/yhs/search;_ylt=Awr1TWYKZglq6bkdoQHnHgx.;_ylu=Y29sbwMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=land+crusier&type=type80160-394257942&param1=1959812262&hsimp=yhs-002&hspart=sz&ei=UTF-8&fr=yhs-sz-002#id=4&iurl=https%3A%2F%2Fvehiclesinformation.com%2Fwp-content%2Fuploads%2F2024%2F02%2F2025-toyota-land-cruiser.webp&action=click":v,
//     },
//     price:{
//         type:Number,
//     },
//     location:{
//         type:String,
//     },
//     country:{
//         type:String,
//     },
// });

// const Listing = mongoose.model("Listing",listingSchema);
// module.exports = Listing;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema({

    title: String,

    description: String,

    image: {
        filename: String,
        url: String,
    },

    price: Number,

    location: String,

    country: String,

});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;