import express from "express";
import { getAllgratitude, addgratitude } from "../models/gratitude.js";
const router = express.Router();
router.get("/", async function (req, res) {
  const result = await getAllgratitude();
  res.json({ success: true, payload: result });
});
router.post("/", async function (req, res) {
  const result = await addgratitude(req.body);
  res.json({ success: true, payload: result });
});
export default router;