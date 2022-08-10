import express from "express";
import { getAllAchievement, updateAchievement } from "../models/achievement.js";

const achievementRouter = express.Router();

achievementRouter.get("/", async function (req, res) {
  const result = await getAllAchievement();
  res.json({ success: true, payload: result });
});

achievementRouter.put("/:id", async function (req, res) {
  const searchedId = req.params.id;
  const result = await updateAchievement(searchedId, req.body);
  res.json({
    success: true,
    payload: `You have updated achievement with id: ${searchedId}`,
  });
});

// achievementRouter.delete("/:id", async function (req, res) {
//   const searchedId = Number(req.params.id);
//   deleteAchievementById(searchedId);
//   const result = {
//     success: true,
//     payload: `The achievement with id: ${searchedId} has been deleted`,
//   };
//   res.json(result);
// });

export default achievementRouter;
