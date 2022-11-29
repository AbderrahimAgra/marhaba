const app = require('./server')
const request = require('supertest')
describe('test login ',()=>{
    let dataLogin = {
        email : "abder55@gmail.com",
        password : ""
    }
    describe("email dosen't exist",()=>{
        test("email dosen't exist",async()=>{
            await request(app)
                .post('/api/auth/login')
                .send(dataLogin)
                .expect(400)
                .then(response => {
                    expect(response.body.message).toEqual("email dosen't exist")
                })

        })

    })

    const correctUser = {email: "abderahimagra397@gmail.com", password: "agra"}
    describe("email correct",()=>{
        test("passed login",async()=>{
            await request(app)
                .post('/api/auth/login')
                .send(correctUser)
                .expect(200)
                .then(response => {
                    expect(response.body.message).toEqual("Hi abder u've just logged in succefully")
                })

        })

    })
})

describe("Register Test", ()=>{
    describe("user data correct",()=>{
        const incorrectRegistration = {email: "agra@ltlo.cin",password: ""}
        test("failed test login",async()=>{
            await request(app)
                .post('/api/auth/register')
                .send(incorrectRegistration)
                .expect(400)
                .then(response => {
                    expect(response.body.message).toEqual("All the fileds are required")
                })

        })

    })

    describe("user data correct",()=>{
        const incorrectRegistration = {email: "agra@lilo.cin",password: "1234",username: 'lilo'}
        test("failed test login",async()=>{
            await request(app)
                .post('/api/auth/register')
                .send(incorrectRegistration)
                .expect(200)
                .then(response => {
                    expect(response.body.message).toEqual("registerd succefully")
                })

        })

    })
})