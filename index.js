import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
import cors from "cors";
//import router

// CORS is used to connect the information from backend to frontend
app.use(cors());
// Unpack any json request, normally for POST,PUT
app.use(express.json());
app.use("/todos", toDosRouter);
app.get("/", (req, res) => {
  res.json({ success: "true", payload: "get all tasks for you!" });
});
//app.listen(PORT, () => console.log(`listening ${PORT}`));
// it is the same as bellow
app.listen(PORT, function () {
  console.log(`listening ${PORT}`);
});

