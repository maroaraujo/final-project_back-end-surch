import express from "express";
import { getAllMood, addMood, deleteMoodById } from "../models/mood.js";
const moodRouter = express.Router();

moodRouter.get("/", async function (req, res) {
  const result = await getAllMood();
  res.json({ success: true, payload: result });
});

moodRouter.post("/", async function (req, res) {
  const result = await addMood(req.body);
  res.json({ success: true, payload: result });
});

moodRouter.delete("/:id", async function (req, res) {
  const searchedId = Number(req.params.id);
  deleteMoodById(searchedId);
  const result = {
    success: true,
    payload: `The mood with id: ${searchedId} has been deleted`,
  };
  res.json(result);
});

export default moodRouter;
