const chai= require('chai');
const chaiHttp=require('chai-http');
const server=require('../index');

// Assertion Style

const should = chai.should();
chai.use(chaiHttp);



describe('Identity',()=>{
    
    
    describe('GET /listing',() =>{
        it('It should GET all the tasks',(done) =>{
            
            
            chai.request(server)
        .get('http://localhost:3000/listing')
        .end((err,response)=>{
            response.should.have.status(200);
            
            done();
        });
        });
    });

    describe('GET /check',() =>{
        it('It should GET all the tasks',(done) =>{
            
            
            chai.request(server)
        .get('http://localhost:3000/check/?valid=abc*zxc*21aug2020*20*10')
        .end((err,response)=>{
            response.should.have.status(200);
            
            done();
        });
        });
    });

    describe('GET /register',() =>{
        it('It should GET all the tasks',(done) =>{
            
            
            chai.request(server)
        .get('http://localhost:3000/register/?valid=abc*zxc*asdfg@qddf')
        .end((err,response)=>{
            response.should.have.status(200);
            
            done();
        });
        });
    });

});