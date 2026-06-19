const mongoose = required('mongoose');
const Schema= mongoode.Schemal;

const listingSchema = new Schema({
    title: String,
    description: String,
    image: String,
    prince: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);