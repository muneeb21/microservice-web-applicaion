const mongoose = require('mongoose');



const bookingSchema = new mongoose.Schema({
    
    name1: {
        type: String,
        required: true
    },
    name2: {
        type: String,
        required: true,
        
    },
    email:{
        type:String,
        required:true,
    },
    date:{
        type: Date,
        required: true,
        
    },
    timeinHrs:{
        type:Number,
        required:true

    },
    timeinMins:{
        type:Number,
        required:true
    }
    
    
}, {
    timestamps: true
});






const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;