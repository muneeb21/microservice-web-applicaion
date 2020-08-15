// Axios is used to allow us to make an http call
const axios=require('axios');

// Register a new user
module.exports.register = async function(req, res)  {
	try {
		const  passedVariable  =req.query.valid;
		
          
        // Check if user is already Registered
        
		

        
        var info = encodeURIComponent(passedVariable);
        //  Call the http req from Kyc service
		 axios.get('http://localhost:3000/register'+ '/?valid='+info);

		
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