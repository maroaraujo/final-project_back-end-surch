import { test, expect, describe } from "@jest/globals";
import {getAllGratitude} from "./gratitude.js";

import request from "supertest";
import assert from "assert";
import app from "../app.js";
import { pool } from "../db/index.js";
import { resetUsersTable } from "../db/helpers.js";
// removed --detectOpenHandles from test script and added below in order to remove JEST error
beforeAll((done) => {
  done();
});
afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  pool.end();
  done();
});
test("GET request from /users", async function () {
  let response = await request(app)
    .get("/users")
    .set("Accept", "application/json");
  // HTTP response code;
  expect(response.status).toBe(200);
  // content type;
  expect(response.header).toEqual(
    expect.objectContaining({
      "content-type": expect.stringContaining("application/json"),
    })
  );
  // whole users data
  let expected = [{ id: expect.any(Number), username: expect.any(String) }];
  expect(response.body).toMatchObject({
    success: true,
    payload: expect.arrayContaining(expected),
  });
});
test("GET request from /users?username=Patricia", async function () {
  let response = await request(app)
    .get("/users?username=Patricia")
    .set("Accept", "application/json");
  // HTTP response code;
  expect(response.status).toBe(200);
  // content type;
  expect(response.header).toEqual(
    expect.objectContaining({
      "content-type": expect.stringContaining("application/json"),
    })
  );
  // Patricia data
  let expected = [{ id: expect.any(Number), username: "Patricia" }];
  expect(response.body).toMatchObject({
    success: true,
    payload: expected,
  });
});
test("GET request from /users/4", async function () {
  let response = await request(app)
    .get("/users/4")
    .set("Accept", "application/json");
  // HTTP response code;
  expect(response.status).toBe(200);
  // content type;
  expect(response.header).toEqual(
    expect.objectContaining({
      "content-type": expect.stringContaining("application/json"),
    })
  );
  // Patricia data
  let expected = { id: 4, username: expect.any(String) };
  expect(response.body).toMatchObject({
    success: true,
    payload: expected,
  });
});
describe("POST and DELETE requests", function () {
  // reset db before each test that alters data in db
  // wouldn't make sense to reset db before GET requests?
  beforeEach(() => {
    return resetUsersTable();
  });
  test("POST request from /users", async function () {
    let response = await request(app)
      .post("/users")
      .send({ username: "TESTname" })
      .set("Accept", "application/json");
    // HTTP response code;
    expect(response.status).toBe(201);
    // content type;
    expect(response.header).toEqual(
      expect.objectContaining({
        "content-type": expect.stringContaining("application/json"),
      })
    );
    // posted data
    let expected = { id: expect.any(Number), username: "TESTname" };
    expect(response.body).toMatchObject({
      success: true,
      payload: expected,
    });
  });
  test("DELETE request from /users/4", async function () {
    let response = await request(app)
      .delete("/users/4")
      .set("Accept", "application/json");
    // HTTP response code;
    expect(response.status).toBe(200);
    // content type;
    expect(response.header).toEqual(
      expect.objectContaining({
        "content-type": expect.stringContaining("application/json"),
      })
    );
    //  deleted data
    let expected = { id: 4, username: expect.any(String) };
    expect(response.body).toMatchObject({
      success: true,
      payload: expected,
    });
  });
});


// Initial test (works) 
describe("GET all gratitude tests", () => {
  test("Check the structure of the payload, when sent a GET request for All profiles", async () => {
    //ARRANGE
    const actual = await getAllGratitude()
    //ACT
    const expected = [];
    for(let i=0; i<actual.length; i++){
      expected.push({
        id: expect.any(Number),
        gratitude: expect.any(String),
        date: expect.any(Date),
        userid: expect.any(Number),
      })}
    //ASSERT
    expect(actual).toEqual(expected);
  });
});