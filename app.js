import express from "express";
import cors from "cors";
import gratitudeRouter from "./routes/gratitudeRouter.js";
import moodRouter from "./routes/moodRouter.js";
//import router

const app = express();

// CORS is used to connect the information from backend to frontend
const corsOptions = {
  origin: "http://localhost:3000/home",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Unpack any json request, normally for POST,PUT

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/gratitude", gratitudeRouter);

app.use("/mood", moodRouter);

export default app;
