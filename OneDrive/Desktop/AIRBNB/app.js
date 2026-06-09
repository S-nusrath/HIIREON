// const express = require("express");
// const app = express();

// const mongoose = require("mongoose");

// const Listing = require("./models/listing");
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");


// // DATABASE URL
// const MONGO_URL = "mongodb://127.0.0.1:27017/majorproject";

// // CONNECT DATABASE
// async function main() {
//     await mongoose.connect(MONGO_URL);
// }
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({extended:true}));
// app.use(methodOverride("_method"));
// app.engine("ejs", ejsMate);
// app.use(express.static(path.join(__dirname, "public")));
// main()
//     .then(() => {
//         console.log("Connected to DB");
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// // HOME ROUTE
// app.get("/", (req, res) => {
//     res.send("Hello Mohammed");
// });
// //Index route
// app.get("/listings", async (req, res) => {
//    const allListings = await Listing.find({});
//    res.render("listings/index.ejs",{allListings});
// });
// //New Route
// app.get("/listings/new",(req,res)=>{
//   res.render("listings/new.ejs");  
// })
// //Show route
// app.get("/listings/:id", async (req, res) => {
//     let {id} = req.params;
//     const listing = await Listing.findById(id);
//     res.render("listings/show.ejs", { listing });
// });
// //create route
// app.post("/listings",async(req,res)=>{
//     let {title,description,image,price,country,location} = req.body;
//     const newListing = new Listing({
//         title,
//         description,
//         image,
//         price,
//         country,
//         location
//     });
//     await newListing.save();
//     res.redirect("/listings");
// });
// //edit route
//     app.get("/listings/:id/edit", async (req, res) => {

//     const { id } = req.params;

//     const listing = await Listing.findById(id);

//     res.render("listings/edit", { listing });

// });
// //update route
// // UPDATE ROUTE
// app.put("/listings/:id", async (req, res) => {

//     const { id } = req.params;

//     const updatedListing = {

//         title: req.body.title,

//         description: req.body.description,

//         image: {
//             url: req.body.image,
//             filename: "listingimage",
//         },

//         price: req.body.price,

//         location: req.body.location,

//         country: req.body.country,

//     };

//     await Listing.findByIdAndUpdate(id, updatedListing);

//     res.redirect(`/listings/${id}`);

// });
// //Delete route
// app.delete("/listings/:id",async(req,res) =>{
//     let {id} = req.params;
//     let deletedListings = await Listing.findByIdAndDelete(id);
//     console.log(deletedListings);
//     res.redirect("/listings");
// });
// // SEARCH ROUTE

// // SEARCH ROUTE

// app.get("/listings/search", async (req, res) => {

//     let query = req.query.q;

//     const searchedListings = await Listing.find({

//         title: { $regex: query, $options: "i" }

//     });

//     res.render("listings/index.ejs", {

//         allListings: searchedListings

//     });

// });
// app.get("/listings/search", async (req, res) => {

//     let query = req.query.q;

//     const searchedListings = await Listing.find({

//         title: { $regex: query, $options: "i" }

//     });

//     res.render("listings/index.ejs", {

//         allListings: searchedListings

//     });

// });
// // // TEST ROUTE
// // app.get("/testListing", async (req, res) => {

// //     let sampleListing = new Listing({

// //         title: "Toyota Land Cruiser",

// //         description:
// //             "The Toyota Land Cruiser is a legendary SUV known for its ruggedness and durability.",

// //         price: 85000,

// //         location: "Dubai",

// //         country: "UAE",

// //         image: {
// //             filename: "carimage",
// //             url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
// //         },

// //     });

// //     await sampleListing.save();

// //     console.log("Sample listing saved to database");

// //     res.send("Sample listing created successfully");

// // });

// // SERVER
// app.listen(8080, () => {
//     console.log("Server is listening on port 8080");
// });
require("dotenv").config();
const { isLoggedIn } = require("./middleware");
const session = require("express-session");
const flash = require("connect-flash");

const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("./models/user");
const express = require("express");
const app = express();
const Booking = require("./models/booking");
const mongoose = require("mongoose");
const Listing = require("./models/listing");

const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

// DATABASE URL

//const MONGO_URL = "mongodb://127.0.0.1:27017/majorproject";
//const MONGO_URL = process.env.MONGO_URL;
//const MONGO_URL = process.env.ATLASDB_URL;
const MONGO_URL =
  process.env.MONGO_URL ||
  process.env.DATABASE_URL ||
  "mongodb://127.0.0.1:27017/majorproject";
// CONNECT DATABASE

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

// VIEW ENGINE

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.engine("ejs", ejsMate);

// MIDDLEWARE

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "public")));
const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());

app.use(passport.session());
app.use((req, res, next) => {

    res.locals.currUser = req.user;

    next();

});

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());

// HOME ROUTE

app.get("/", (req, res) => {
    res.redirect("/listings");
});
app.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

// app.post("/signup", async (req, res) => {

//     try {

//         const { username, password } = req.body;

//         const newUser = new User({ username });

//         const registeredUser = await User.register(newUser, password);

//         console.log(registeredUser);

//         res.redirect("/listings");

//     } catch (err) {

//         console.log(err);

//         res.send("Signup Failed");

//     }

// });
app.post("/signup", async (req, res) => {

    try {

        const { username, password } = req.body;

        const newUser = new User({ username });

        const registeredUser =
            await User.register(newUser, password);

        console.log(registeredUser);

        req.login(registeredUser, (err) => {

            if(err){
                return next(err);
            }

            res.redirect("/listings");

        });

    } catch (err) {

        console.log(err);

        res.send(err.message);

    }

});
app.get("/login", (req, res) => {

    res.render("users/login.ejs");

});

app.post("/login",
    passport.authenticate("local", {
        failureRedirect: "/login",
    }),

    async (req, res) => {

        res.redirect("/listings");

    }
);
app.get("/logout", (req, res, next) => {

    req.logout((err) => {

        if(err){
            return next(err);
        }

        res.redirect("/listings");

    });

});

// INDEX ROUTE
app.get("/listings", isLoggedIn, async (req, res) => {
    const allListings = await Listing.find({});

    res.render("listings/index.ejs", { allListings });

});
// SEARCH ROUTE  ✅ PUT HERE

app.get("/listings/search", async (req, res) => {

    let query = req.query.q;

    const searchedListings = await Listing.find({

        title: { $regex: query, $options: "i" }

    });

    res.render("listings/index.ejs", {

        allListings: searchedListings

    });

});

// NEW ROUTE

app.get("/listings/new", (req, res) => {

    res.render("listings/new.ejs");

});


// SHOW ROUTE

app.get("/listings/:id", async (req, res) => {

    let { id } = req.params;

    const listing = await Listing.findById(id);

    res.render("listings/show.ejs", { listing });

});
// BOOKING PAGE ROUTE

app.get("/listings/:id/book", async (req, res) => {

    const { id } = req.params;

    const listing = await Listing.findById(id);

    res.render("listings/book.ejs", { listing });

});
// SAVE BOOKING

app.post("/listings/:id/book", async (req, res) => {

    const { id } = req.params;

    const newBooking = new Booking({

        name: req.body.name,

        email: req.body.email,

        checkIn: req.body.checkIn,

        checkOut: req.body.checkOut,

        guests: req.body.guests,

        listing: id,

    });

    await newBooking.save();

    res.send("Booking Confirmed Successfully!");

});

// CREATE ROUTE

app.post("/listings", async (req, res) => {

    const newListing = new Listing({

        title: req.body.title,

        description: req.body.description,

        image: {
            url: req.body.image,
            filename: "listingimage",
        },

        price: req.body.price,

        location: req.body.location,

        country: req.body.country,

    });

    await newListing.save();

    res.redirect("/listings");

});

// EDIT ROUTE

app.get("/listings/:id/edit", async (req, res) => {

    const { id } = req.params;

    const listing = await Listing.findById(id);

    res.render("listings/edit.ejs", { listing });

});

// UPDATE ROUTE

app.put("/listings/:id", async (req, res) => {

    const { id } = req.params;

    const updatedListing = {

        title: req.body.title,

        description: req.body.description,

        image: {
            url: req.body.image,
            filename: "listingimage",
        },

        price: req.body.price,

        location: req.body.location,

        country: req.body.country,

    };

    await Listing.findByIdAndUpdate(id, updatedListing);

    res.redirect(`/listings/${id}`);

});

// DELETE ROUTE

app.delete("/listings/:id", async (req, res) => {

    let { id } = req.params;

    await Listing.findByIdAndDelete(id);

    res.redirect("/listings");

});
// SERVER

app.listen(8080, () => {

    console.log("Server is listening on port 8080");

});