import { CoffeeServerOptions } from "./interfaces/CoffeeServerOptions";
import { api } from "./api";
import express, { Express } from "express";
import { createServer, Server } from "http";

export class CoffeeServer {
    server: Server
    options: CoffeeServerOptions = {
        port: 3000
    }

    constructor(options?: CoffeeServerOptions) {
        if (options)
            this.options = options
        
        const app = express();
        app.use("/api", api)
        this.server = createServer(app)
    }

    async start() {
        try {
            this.server.listen(this.options.port, () => {
                console.log(`\t-> Started with success on port ${this.options.port}`);
            });
        } catch (err) {
            console.log('err: ', err)
            throw new Error("Server did not start")
        }
    }
    async stop() {
        try {
            this.server.close(() => {
                console.log("\t-> Stopped server successfully")
            })
        } catch (err) {
            console.log('err: ', err)
            throw new Error("Server did not stop properly")
        }
    }
}
