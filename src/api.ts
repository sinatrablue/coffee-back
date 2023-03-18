import express from "express";

const app = express.Router();

app.get("/ping", (req, res) => {
    res.json( {ping: "ping ok"} )
})

export const api = app