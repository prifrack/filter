"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const cors = require("cors");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const port = process.env.PORT || 3000;
    app.enableCors();
    app.use(cors());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Digital Bookstore')
        .setDescription('The Digital Bookstore API ')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    app.setGlobalPrefix('/api');
    await app.listen(port);
    console.log(`The application is running in: http://localhost:${port}/api\n`);
    console.log(`the swagger app is running in: http://localhost:${port}/api/docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map