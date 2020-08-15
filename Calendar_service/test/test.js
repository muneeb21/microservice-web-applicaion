const chai= require('chai');
const chaiHttp=require('chai-http');
const server=require('../index');

// Assertion Style

const should = chai.should();
chai.use(chaiHttp);



describe('Booking',()=>{
    
    
    describe('GET /newbooking',() =>{
        it('It should GET all the tasks',(done) =>{
            
            
            chai.request(server)
        .get('http://localhost:8000/newbooking/?valid=abc*zxc*21aug2020*20*10')
        .end((err,response)=>{
            response.should.have.status(200);
            
            done();
        });
        });
    });
});