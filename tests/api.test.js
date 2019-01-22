const { expect } = require('chai');
const supertest = require('supertest');

describe('Subject', function() {
  it('should do something', async function() {
   	const requestBody = { author: 'SuperTest', contents: 'Hello API' };
const response = await supertest('http://localhost:3000').post('/api/messages').send(requestBody);
	
	expect(response.status).to.equal(201);
	expect(response.body.author).to.equal('SuperTest');
	expect(response.body.id).to.be.a('string'); 
 });
});
