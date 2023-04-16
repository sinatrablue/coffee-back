import express from "express";
import { MenuItem } from "./interfaces/MenuItem";

const menu: MenuItem[] = [
  {
    id: "1",
    name: "chai",
    description: "Spiced latte, the indian way",
    price: 5,
  },
  {
    id: "2",
    name: "macchiato",
    description: "Expresso with a cloud of steamed milk",
    price: 2,
  },
  {
    id: "3",
    name: "matcha latte",
    description: "Hot milk with matcha",
    price: 4,
  },
  {
    id: "4",
    name: "cappuccino",
    description: "Espresso with some milk topped with steamed milk",
    price: 2.5,
  },
  {
    id: "5",
    name: "expresso",
    description: "Classic italian coffee",
    price: 1.5,
  },
  {
    id: "6",
    name: "golden latte",
    description: "Blend of spices in hot milk, coloured by tumeric",
    price: 4,
  },
];

const app = express.Router();

app.get("/", (req, res) => {
  try {
    res.json(menu);
  } catch (err) {
    console.log("err: ", err);
    res.status(500).end();
  }
});

app.get("/:id", (req, res) => {
  try {
    let id = req.params.id;
    console.log("id: ", id);
    let item = menu.find((i) => i.id === id);
    if (!item) {
      res.status(404).end();
      return;
    }
    res.json(item);
  } catch (err) {
    console.log("err: ", err);
    res.status(500).end();
  }
});

// TODO post

// TODO delete

export const MenuItemsRouter = app;
