import express from "express";
import { getAllGratitude, addGratitude } from "../models/gratitude.js";
const gratitudeRouter = express.Router();

gratitudeRouter.get("/", async function (req, res) {
  const result = await getAllGratitude();
  res.json({ success: true, payload: result });
});

gratitudeRouter.post("/", async function (req, res) {
  const result = await addGratitude(req.body);
  res.json({ success: true, payload: result });
});

export default gratitudeRouter;