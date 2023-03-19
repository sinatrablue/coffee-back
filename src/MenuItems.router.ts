import express from "express";
import { MenuItem } from "./interfaces/MenuItem";

const menu: MenuItem[] = [
    {
        id: "chai",
        name: "chai",
        price: 5
    },
    {
        id: "macchiato",
        name: "macchiato",
        price: 2
    },
    {
        id: "matcha latte",
        name: "matcha latte",
        price: 4
    }
]

const app = express.Router()

app.get("/", (req, res) => {
    try {
        res.json(menu)
    } catch (err) {
        console.log('err: ', err)
        res.status(500).end()
    }
})

app.get("/:id", (req, res) => {
    try {
        let id = req.params.id
        console.log('id: ', id)
        let item = menu.find(i => i.id === id)
        if (!item) {
            res.status(404).end()
            return
        }
        res.json(item)
    } catch (err) {
        console.log('err: ', err)
        res.status(500).end()
    }
})

// TODO post

// TODO delete

export const MenuItemsRouter = app