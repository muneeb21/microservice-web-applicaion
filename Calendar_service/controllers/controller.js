const Bookings=require('../models/booking');
const axios=require('axios');


// functionality for new booking


module.exports.newBooking = async function(req, res)  {
	try {
        const  passedVariable  =req.query.valid;
        const name1="";
        const name2="";const date="";const timeinHrs="";const timeinMins="";
        const j=0;
        for(let i=0;i<passedVariable.length;i++){
          if(passedVariable[i]==='*'){
              j++;
          }
          else{
              if(j==0){
                  name1+=passedVariable[i];
              }
              if(j==1){
                name2+=passedVariable[i];
            }
            if(j==2){
                date+=passedVariable[i];
            }
            if(j==3){
                timeinHrs+=passedVariable[i];
            }
            if(j==4){
                timeinMins+=passedVariable[i];
            }
          }
        }		
        
        let booking = await Booking.findOne({date});

        // Check if booking already exists of if the time and dates of bookings are clashing
        
		if (booking) {

            if((booking.timeinHrs-timeinHrs===1 && booking.timeinMins>timeinMins)|| booking.timeinHrs===timeinHrs ){
			return res.status(200).json({
				message:
					"This time slot is already booked, please try another time slot",
            });
        }
		}

		
        //  Else register a new booking
		const newBooking=await Booking.create( { name1,name2,date,timeinHrs,timeinMins });
  
        
		return res.status(200).json({
			message: `Booking successful`
			
		});

	
	

	} catch (err) {
		console.log('********',err);
		return res.status(500).json({
			message: "Internal Server Error",
		});
	}
}