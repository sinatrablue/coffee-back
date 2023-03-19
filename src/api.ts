import express from "express";
import { MenuItemsRouter } from "./MenuItems.router";

const app = express.Router();

app.use("/menu", MenuItemsRouter)
app.get("/ping", (req, res) => {
    res.json( {ping: "ping ok"} )
})

export const api = app