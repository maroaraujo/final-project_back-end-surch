import express from "express";
import cors from "cors";
import gratitudeRouter from "./routes/gratitudeRouter.js";
import moodRouter from "./routes/moodRouter.js";
import achievementRouter from "./routes/achievementRouter.js";
//import router

const app = express();

// CORS is used to connect the information from backend to frontend
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

// corsOptions
app.use(cors());

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers, *, Access-Control-Allow-Origin",
    "Origin, X-Requested-with, Content_Type,Accept,Authorization",
    "http://localhost:3000"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});

// Unpack any json request, normally for POST,PUT

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/gratitude", gratitudeRouter);

app.use("/mood", moodRouter);
app.use("/achievement", achievementRouter);

export default app;
