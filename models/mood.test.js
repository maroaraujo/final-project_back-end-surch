import { test, expect, describe } from "@jest/globals";
import { getAllMood } from "./mood.js";

describe("GET all mood tests", () => {
  test("Check the structure of the payload, when sent a GET request for All profiles", async () => {
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
