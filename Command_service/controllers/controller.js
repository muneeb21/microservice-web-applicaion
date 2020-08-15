const axios=require('axios');

// Register a new user
module.exports.register = async function(req, res)  {
	try {
		const { name, surname,email } = req.body;
		

		// Check if user is already Registered
		if (surname[0]!="A") {
			return res.status(200).json({
				message:
					"This surname is not valid, Enter a valid username",
			});
		}

        var x=name +"*"+surname+"*"+email;
        var info = encodeURIComponent(x);
        //  Call the http req from Kyc service
		 axios.get('http://localhost:5555/register'+ '/?valid='+info);

		
        return;
		// return res.status(200).json({
		// 	message: `Registration successful`,
		// 	data:  {
                
        //     }
		// });

	
	

	} catch (err) {
		console.log('********',err);
		return res.status(500).json({
			message: "Internal Server Error",
		});
	}
}








// New booking funtionality
module.exports.newbooking = async function(req, res)  {
	try { 

		const { name1, name2,date,timeinHrs,timeinMins } = req.body;
		

		

        var x=name1 +"*"+name2+"*"+date+"*"+timeinHrs+"*"+timeinMins;
        var info = encodeURIComponent(x);
        //  Call the http req from identity service to see availibility of names
		 axios.get('http://localhost:3000/check'+ '/?valid='+info);

		
        return;
		

	
	

	} catch (err) {
		console.log('********',err);
		return res.status(500).json({
			message: "Internal Server Error",
		});
	}
}



// Function for listing users


module.exports.listing = async function(req, res)  {
	try {
		
		// an http request to identity service to list all users
		 axios.get('http://localhost:3000/listing');

		
        return;
			

	} catch (err) {
		console.log('********',err);
		return res.status(500).json({
			message: "Internal Server Error",
		});
	}
}