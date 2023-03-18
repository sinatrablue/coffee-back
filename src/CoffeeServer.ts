import { CoffeeServerOptions } from "./interfaces/CoffeeServerOptions";
import { api } from "./api";
import express, { Express } from "express";

export class CoffeeServer {
    app: Express
    options: CoffeeServerOptions = {
        port: 3000
    }

    constructor(options?: CoffeeServerOptions) {
        if (options)
            this.options = options
        
        const app = express();
        app.use("/api", api)
        this.app = app
    }

    async start() {
        this.app.listen(this.options.port, () => {
            console.log(` > Started on port : ${this.options.port}`)
        })
    }

    async stop() {
        throw new Error("Not implemented")
    }
}
