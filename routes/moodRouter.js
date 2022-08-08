import express from "express";
import { getAllMood, addMood } from "../models/mood.js";
const moodRouter = express.Router();

moodRouter.get("/", async function (req, res) {
  const result = await getAllMood();
  res.json({ success: true, payload: result });
});

moodRouter.post("/", async function (req, res) {
  const result = await addMood(req.body);
  res.json({ success: true, payload: result });
});

export default moodRouter;