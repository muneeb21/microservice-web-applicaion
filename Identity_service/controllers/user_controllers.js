// Axios is used to allow us to make an http call
const axios=require('axios');

// Include the model(user);
const User=require('../models/user.js');




// Register a new user
module.exports.register = async function(req, res)  {
	try {
        const  passedVariable  =req.query.valid;
        const name="";const surname="";const email="";
        const j=0;
        for(let i=0;i<passedVariable.length;i++){
          if(passedVariable[i]==='*'){
              j++;
          }
          else{
              if(j==0){
                  name+=passedVariable[i];
              }
              if(j==1){
                surname+=passedVariable[i];
            }
            if(j==2){
                email+=passedVariable[i];
            }
          }
        }		
        
        let user = await User.findOne({email: req.body.email});
        // Check if user is already Registered
        
		if (user) {
			return res.status(200).json({
				message:
					"This email is already registered, try with another email or login instead",
			});
		}

		
        //  Else register a new user
		const newuser=await User.create( { name,surname, email});
  
        
		return res.status(200).json({
			message: `Registration successful`
			
		});

	
	

	} catch (err) {
		console.log('********',err);
		return res.status(500).json({
			message: "Internal Server Error",
		});
	}
}



// Function to show all the lists of user

module.exports.listing = async function(req, res){
    try{
        
        let users = await User.find();
        return res.status(200).json({
			message: " Fetched all users",
			data: {
				List: users,
			},
		});


    }catch(err){
       
        console.log('********',err);
		return res.status(500).json({
			message: "Internal Server Error",
		});

    }
}





// Function to check whether users exists or not;
module.exports.checkUsers = async function(req, res)  {
	try {
        const  passedVariable  =req.query.valid;
        const name1="";const name2="";
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
           
          }
        }	
		
        let user1 = await User.findOne({name: name1});
        let user2 = await User.findOne({name: name2});

        // Check if any of the two users is already Registered
        
		if (!user1 || !user2) {
			return res.status(200).json({
				message:
					"One of the entered names is not registered",
			});
		}
       
        // Both the users exists now check for booking
 
       
        var info = encodeURIComponent(passedVariable);
      
        //  Call the http req for Calendar service
		 axios.get('http://localhost:8000/newbooking'+ '/?valid='+info);

		
        return;
			
	

	} catch (err) {
		console.log('********',err);
		return res.status(500).json({
			message: "Internal Server Error",
		});
	}
}