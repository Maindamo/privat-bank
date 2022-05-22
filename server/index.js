const express = require("express");
const bodyParser = require("body-parser");
const database = require("./database");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/set-name", async (req, res) => {
  await database.editName(req.body.name1, req.body.name2, req.body.name3);
  return res.json({ status: 200 });
});

app.get("/list-name", async (req, res) => {
  const name = await database.getTemplateName();
  res.json(name);
});

app.get("/payment-history", async (req, res) => {
  const payments = await database.getPaymentHistory();
  res.json(payments);
});

app.post("/add-payment", async (req, res) => {
  const sender_name = req.body.sender_name;
  const sender_card = req.body.sender_card;
  const receiver_name = req.body.receiver_name;
  const receiver_card = req.body.receiver_card;
  const amount = req.body.amount;
  const day = req.body.day;
  const time = req.body.time;
  await database.addPayment(sender_name, sender_card, receiver_name, receiver_card, amount, day, time);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
