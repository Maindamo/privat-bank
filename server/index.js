const express = require("express");
const bodyParser = require("body-parser");
const database = require("./database");
const cors = require("cors");
const { Translations, Template } = require("./database/index");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/set-name", async (req, res) => {
  const name_1 = Translations.findOne({
    where: {
      key: "name_1",
    },
  });

  const name_2 = Translations.findOne({
    where: {
      key: "name_2",
    },
  });

  const name_3 = Translations.findOne({
    where: {
      key: "name_3",
    },
  });

  name_1.value = req.body.name1;
  name_2.value = req.body.name2;
  name_3.value = req.body.name3;

  await name_1.save();
  await name_2.save();
  await name_3.save();
  return res.json({ status: 200 });
});

app.get("/list-name", async (req, res) => {
  const name = await Template.findAll(); //await database.getTemplateName();
  res.json(name);
});

app.get("/payment-history", async (req, res) => {
  const payments = await Translations.findAll(); //await database.getPaymentHistory();
  res.json(payments);
});

app.post("/add-payment", async (req, res) => {
  const { sender_name, sender_card, receiver_name, receiver_card, amount, day, time } = req.body;
  // const sender_name = req.body.sender_name;
  // const sender_card = req.body.sender_card;
  // const receiver_name = req.body.receiver_name;
  // const receiver_card = req.body.receiver_card;
  // const amount = req.body.amount;
  // const day = req.body.day;
  // const time = req.body.time;
  // await database.addPayment(sender_name, sender_card, receiver_name, receiver_card, amount, day, time);
  await Translations.create({
    sender_name,
    sender_card,
    receiver_name,
    receiver_card,
    amount,
    day,
    time,
  });
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Server start: localhost:${port}`));
