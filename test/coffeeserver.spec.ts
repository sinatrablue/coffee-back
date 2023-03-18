import { CoffeeServer } from "../src/CoffeeServer"
import axios from "axios"
const assert = require("chai").assert

describe("CoffeeServer", () => {
    it("should start & stop", async () => {
        const coffeeServer = new CoffeeServer({ port: 3000} )
        await coffeeServer.start()
        let response = await axios.get("localhost:3000/api/ping");
        assert.equal(response.status, 200)
        await coffeeServer.stop()
        response = await axios.get("localhost:3000/api/ping");
        assert.equal(response.status, 0)
    })
    it("should be ok", () => {
        assert.equal(1, 1)
    })
})