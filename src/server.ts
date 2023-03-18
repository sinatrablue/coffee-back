console.log(".+* About to start the server *+.")

import express from "express";
import { api } from "./api";

const app = express();
const port = 3000;

app.use("/api", api);

app.listen(port, () => {
    console.log(` > Back listening on port <${port}>`)
})

// app.use(express.static('.'))