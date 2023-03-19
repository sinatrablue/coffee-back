import { CoffeeServer } from "../src/CoffeeServer"
import axios from "axios"
const assert = require("chai").assert

describe("CoffeeServer", () => {
    it("should start & stop", async () => {
        const coffeeServer = new CoffeeServer({ port: 3000} )
        await coffeeServer.start()
        let response = await axios.get("http://localhost:3000/api/ping")
        assert.equal(response.status, 200, "first ping res 200")
        await coffeeServer.stop()
        let error = undefined
        try {
            await axios.get("http://localhost:3000/api/ping")
        } catch (err) {
            console.log('err: ', err)
            error = err
        }
        assert(error !== undefined, "error isn't undefined anymore")
        assert(axios.isAxiosError(error), "error is AxiosError")
    })

    it("should be ok", () => {
        assert.equal(1, 1)
    })
})