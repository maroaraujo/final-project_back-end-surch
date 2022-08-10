import express from "express";
import { getAllMood, addMood, deleteMoodById } from "../models/mood.js";
const achievementRouter = express.Router();

achievementRouter.get("/", async function (req, res) {
  const result = await getAllAchievement();
  res.json({ success: true, payload: result });
});

achievementRouter.put("/", async function (req, res) {
  const result = await updateAchievement(req.body);
  res.json({ success: true, payload: result });
});

achievementRouter.delete("/:id", async function (req, res) {
  const searchedId = Number(req.params.id);
  deleteAchievementById(searchedId);
  const result = {
    success: true,
    payload: `The achievement with id: ${searchedId} has been deleted`,
  };
  res.json(result);
});

export default achievementRouter;
