"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("@nestjs.pro/common/dist/server/Server");
const AppModule_1 = require("./AppModule");
const ServerConfig_1 = require("../../modules/common/dist/server/ServerConfig");
Server_1.Server.bootstrap(new ServerConfig_1.ServerConfig({
    name: 'Test App',
    port: 8080,
    module: AppModule_1.AppModule,
    swagger: {
        path: 'swagger',
        title: 'nestjs.pro template application',
        description: 'nestjs.pro template application',
        version: '0.0.1',
        tags: [],
        contactName: 'John Doe',
        contactEmail: 'support@nestjs.pro',
        contactUrl: 'https://nestjs.pro',
        docsDescription: 'docs',
        docsUrl: 'https://nestjs.pro',
        serverUrls: ['http://localhost:8080']
    }
}));
//# sourceMappingURL=main.js.map