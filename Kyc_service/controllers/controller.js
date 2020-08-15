// Axios is used to allow us to make an http call
const axios=require('axios');

// Register a new user
module.exports.register = async function(req, res)  {
	try {
		const  passedVariable  =req.query.valid;
		       
		// move to identity service to check for validation if user already exists
        var info = encodeURIComponent(passedVariable);
		
		//  Call the http req from identity service
		 axios.get('http://localhost:3000/register'+ '/?valid='+info);

		
        return;
		

	} catch (err) {
		console.log('********',err);
		return res.status(500).json({
			message: "Internal Server Error",
		});
	}
}