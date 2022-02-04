import { NestFactory } from '@nestjs/core'
//
import { AppModule } from "./app.modile";

async function start() {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)

    await app.listen(PORT, () => console.log(`project started on ${PORT}`))
}
start()