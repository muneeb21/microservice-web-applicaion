# Calendar Booking Microservices
A Web-Application which involves four MicroServices that will interact with each other and will provide a basic calendar booking functionality.

Tech Stack:- Nodejs, Express, MongoDb, Javascript 

> Setup all the microservices using npm init

**Microservices**

> Identity Service<br>
> Command Service<br>
> Calendar Service<br>
> Kyc Service<br>

**Schemas(model)**

- User:- This schema stores information about an individual user.<br>
  Location: Identity Service/models/user.js<br>
  Entries: name, surname, email<br>   
- Booking:- This schema stores information about a booking.<br>
  Location: Calendar Service/models/booking.js<br>
  Entries: name1, name2, date, timeinHrs, timeinMins (timing of slot)   
  
**Routes**

> /register<br>
> /check<br>
> /newbooking<br>
> /listing<br>

**Dependencies used**

- Express<br>
- Mongoose<br>
- Axios (To make an http request within a service, so as to interact with other microservice)<br>
- Mongo-connect

**Dependencies used for testing**

- Mocha<br>
- Chai<br>
- Chai-http<br>

**Functionalities**

- Command Service handles the commands for other services<br>

- Register funtion is used to register a new user.<br>
  If the surname doesnot start with "A" it wont proceed further.<br>
  It would find the user with provided unique email.<br>
  If user is already present then a new user wont be created.<br>

- Check function checks whether the two users entered are registered or not.<br>

- Newbooking function is used to enter the booking details.<br>
  First the availability of time slot on particular day will be checked<br>
  Then the booking would be made.<br>

- Listing function is for listing all the users.


