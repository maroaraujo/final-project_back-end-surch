import { test, expect, describe } from "@jest/globals";
import { getAllMood, addMood } from "./mood.js";
import request from "supertest";
import app from "../app.js";



describe("GET all mood tests", () => {
  test("Check the structure of the payload, when sent a GET request for All mood", async () => {
    //ARRANGE
    const actual = await getAllMood();
    //ACT
    const expected = [];
    for (let i = 0; i < actual.length; i++) {
      expected.push({
        id: expect.any(Number),
        date: expect.any(Date),
        mood: expect.any(String),
        whatmakesfeel: expect.any(String),
        notes: expect.any(String),
        userid: expect.any(Number),
      });
    }
    //ASSERT
    expect(actual).toEqual(expected);
  });
});


describe('POST /mood', function() {
  test("POST request for /mood", function (done) {
    
        let response = request(app)
          .post("/mood")
          .send({date:"2022-02-03", mood:"ok", whatmakesfeel:"the sun", notes:"feeling bad", userId:1})
          .set("Accept", "application/json")
        // HTTP response code;
        //expect(response.status).toBe(200);
        // content type;
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
        // posted data
        // let expected = [{ 
        //   id: expect.any(Number),
        //   date: expect.any(String),
        //   mood: expect.any(String),
        //   whatmakesfeel: expect.any(String),
        //   notes: expect.any(String),
        //   userid: expect.any(Number)}];
        // expect(response.body).toMatchObject({
        //   success: true,
        //   payload: expect.arrayContaining(expected),
        // });
      });


})



//   it('responds with json', async function(done) {
//     request(app)
//       .post('/mood')
//       .send({date:"2022-02-03", mood:"ok", whatmakesfeel:"the sun", notes:"feeling bad", userId:1})
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .expect(function(res) {
//         expected.push({
//           id: expect.any(Number),
//           date: expect.any(Date),
//           mood: expect.any(String),
//           whatmakesfeel: expect.any(String),
//           notes: expect.any(String),
//           userid: expect.any(Number),
//         });


//         res.body.id = 'some fixed id';
//         res.body.name = res.body.name.toLowerCase();
//       })
//       .end(function(err, res) {
//         if (err) return done(err);
//         return done();
//       });
//   });
// });


// test("GET request from /mood", async function () {
//   let response = await request(app)
//     .get("/mood")
//     .set("Accept", "application/json");

//   // HTTP response code;
//   expect(response.status).toBe(200);

//   // content type;
//   expect(response.header).toEqual(
//     expect.objectContaining({
//       "content-type": expect.stringContaining("application/json"),
//     })
//   );

//   // whole users data
//   let expected = [
//     {
//       id: expect.any(Number),
//       gratitude: expect.any(String),
//       date: expect.any(Date),
//       userid: expect.any(Number),
//     },
//   ];

//   expect(response.body).toMatchObject({
//     success: true,
//     payload: expect.arrayContaining(expected),
//   });
// });
