

// Register a new user
module.exports.register = async function(req, res)  {
	try {
		const { name, surname } = req.body;
		

		// Check if user is already Registered
		if (surname[0]!="A") {
			return res.status(200).json({
				message:
					"This surname is not valid, Enter a valid username",
			});
		}

        var x=name +"*"+surname;
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