import { CoffeeServer } from "./CoffeeServer"

console.log(".+* About to start the CoffeeServer *+.");

(
    async () => {
        try {
            const server = new CoffeeServer({port: 3001})
            await server.start()
        } catch (err) {
            console.log('server start err: ', err)
        }
    }
) ()