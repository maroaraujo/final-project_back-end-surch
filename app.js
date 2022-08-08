import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
import cors from "cors";
import gratitudeRouter from "./routes/gratitudeRouter.js";
import moodRouter from "./routes/moodRouter.js"
//import router

// CORS is used to connect the information from backend to frontend
app.use(cors());

// Unpack any json request, normally for POST,PUT

app.use(express.json());
app.use("/gratitude", gratitudeRouter);

app.use("/mood", moodRouter)

app.get("/", (req, res) => {
  res.json({ success: "true", payload: "test" });
});

//app.listen(PORT, () => console.log(`listening ${PORT}`));
// it is the same as bellow
app.listen(PORT, function () {
  console.log(`listening ${PORT}`);
});

