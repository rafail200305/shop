const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

const SellisSchema = new Schema({
  title: { type: String, require: true },
  price: { type: Number, require: true },
  imageUrl: { type: String, require: true },
});

const SellisModel = mongoose.model("Sellis", SellisSchema);
app.get("/api/product", async (req, res) => {
  try {
    const sellis = await SellisModel.find({});
    if (sellis.length > 0) {
      res.status(200).send({ message: "data succces", data: sellis });
    } else {
      res.status(204).send({ message: "data is empty", data: mull });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/api/product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const sellis = await SellisModel.findById({ id });

    if (sellis) {
      res.status(200).send({ message: "data succces", data: sellis });
    } else {
      res.status(404).send({ message: "data is empty", data: mull });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete("/api/product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSellis = await SellisModel.findByAndDelete(id);
    res.status(200).send({ message: "deleted success", delete: deletedSellis });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/api/product", async (req, res) => {
  try {
    const newSellis = new SellisModel({ ...req.body });
    await newSellis.save();
    res.status(200).send({ message: "create success", data: newSellis });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

const DB_URL =
  "mongodb+srv://azpm101azmiu:azmp101@cluster0.mt31xwa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`Link:http://localhost:${port}`);
  });
});