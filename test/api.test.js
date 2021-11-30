const req = require('supertest')
const app = require('../src/app')

describe('GET test.', () => {
    test('GET test returns 200', ()=>{
        return req(app).get('/auditorium')
        .then((res) =>{
            expect(res.statusCode).toBe(200)
        })
    })
});
