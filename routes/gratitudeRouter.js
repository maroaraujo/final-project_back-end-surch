import express from "express";
import { getAllGratitude, addGratitude, deleteGratitudeById } from "../models/gratitude.js";
const gratitudeRouter = express.Router();

gratitudeRouter.get("/", async function (req, res) {
  const result = await getAllGratitude();
  res.json({ success: true, payload: result });
});

gratitudeRouter.post("/", async function (req, res) {
  const result = await addGratitude(req.body);
  res.json({ success: true, payload: result });
});

gratitudeRouter.delete("/:id", async function (req, res) {
  const searchedId = Number(req.params.id);
  deleteGratitudeById(searchedId);
  const result = {
    success: true,
    payload: `The gratitude with id: ${searchedId} has been deleted`,
  };
  res.json(result);
});


export default gratitudeRouter;