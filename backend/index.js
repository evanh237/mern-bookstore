import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send(`Howdy, pardner!`);
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log(`App connected to the db`);
    app.listen(PORT, () => {
      console.log(`app is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
