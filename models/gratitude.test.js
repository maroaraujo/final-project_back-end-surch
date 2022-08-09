import { test, expect, describe } from "@jest/globals";
import {getAllGratitude} from "./gratitude.js";

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